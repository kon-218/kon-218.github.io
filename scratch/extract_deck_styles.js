const fs = require('fs');

const htmlPath = '/home/konstantin-nomerotski/Downloads/Ligand-X Investor Deck.html';
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Find all style tags and output their start and length
let match;
const regex = /<style[^>]*>([\s\S]*?)<\/style>/g;
let count = 0;
while ((match = regex.exec(htmlContent)) !== null) {
  count++;
  console.log(`Style Tag #${count}: starts at index ${match.index}, content length: ${match[1].length}`);
  fs.writeFileSync(`/home/konstantin-nomerotski/Downloads/deck_style_${count}.css`, match[1]);
  console.log(`Saved as deck_style_${count}.css`);
}
