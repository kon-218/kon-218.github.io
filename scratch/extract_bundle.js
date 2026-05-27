const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const htmlPath = '/home/konstantin-nomerotski/Downloads/Ligand-X Investor Deck.html';
const outputDir = '/home/konstantin-nomerotski/Downloads/extracted_deck_assets';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Use regex to extract manifest
const manifestMatch = htmlContent.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
if (!manifestMatch) {
  console.error("Could not find manifest script!");
  process.exit(1);
}

const manifest = JSON.parse(manifestMatch[1].trim());
console.log(`Found manifest with ${Object.keys(manifest).length} entries.`);

// Extract and map resources
const extResMatch = htmlContent.match(/<script type="__bundler\/ext_resources">([\s\S]*?)<\/script>/);
const resourceMap = {};
if (extResMatch) {
  const extResources = JSON.parse(extResMatch[1].trim());
  for (const entry of extResources) {
    resourceMap[entry.uuid] = entry.id;
  }
}

for (const [uuid, entry] of Object.entries(manifest)) {
  const name = resourceMap[uuid] || uuid;
  console.log(`Processing ${uuid} (${name}) [mime: ${entry.mime}, compressed: ${entry.compressed}]`);
  
  const buffer = Buffer.from(entry.data, 'base64');
  let finalBuffer = buffer;
  
  if (entry.compressed) {
    try {
      finalBuffer = zlib.gunzipSync(buffer);
    } catch (err) {
      console.error(`Failed to gunzip ${uuid}:`, err.message);
    }
  }
  
  const ext = entry.mime.split('/')[1] || 'bin';
  const fileName = `${name.replace(/[^a-zA-Z0-9.-]/g, '_')}.${ext}`;
  fs.writeFileSync(path.join(outputDir, fileName), finalBuffer);
  console.log(`Saved as ${fileName}`);
}
