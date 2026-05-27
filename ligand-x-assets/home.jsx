// ============================================================
// HomePage - product-led Ligand-X overview
// ============================================================

const CORE_CAPABILITIES = [
  { name: "Project workspace", decision: "Keep assets tied to one experiment" },
  { name: "Molecule library", decision: "Track ligands, formats, and generated molecules" },
  { name: "Ketcher editing", decision: "Draw, edit, import, and export chemical structures" },
  { name: "Mol* viewing", decision: "Review proteins, complexes, pockets, and poses" },
  { name: "Protein cleaning", decision: "Prepare raw structures for modeling" },
  { name: "Pocket finding", decision: "Identify candidate binding sites" },
  { name: "Docking", decision: "Screen ligands and compare poses" },
  { name: "MD", decision: "Move promising complexes into simulation" },
  { name: "MSA/alignment", decision: "Add sequence context around targets" },
];

const CORE_LABELS = [
  "Project workspace", "Molecule library", "Ketcher editing", "Mol* viewing", "Protein cleaning",
  "Pocket finding", "Docking", "MD", "MSA/alignment",
];

const HOME_PRO_MODULES = [
  { name: "QC", decision: "Electronic properties, charges, Fukui indices, and frequencies" },
  { name: "ADMET", decision: "Property and liability screening" },
  { name: "Boltz-2", decision: "Structure and affinity prediction" },
  { name: "ABFE/RBFE", decision: "Binding free-energy prioritization" },
  { name: "GenAI", decision: "Generative design and optimization" },
  { name: "Kinetics", decision: "Residence-time and pathway workflows" },
];

const STORY_STAGES = [
  {
    eyebrow: "Create a project",
    title: "Start with a persistent workspace, not another folder tree.",
    text: "Import proteins, ligands, structures, and generated assets into one project so the experiment has a durable record from the first file onward.",
    points: ["Project-scoped proteins, molecules, pockets, jobs, and outputs", "Ketcher editing with SMILES, SDF, and PDB import/export", "Mol* review for proteins, complexes, pockets, and poses"],
    visual: "workspace",
  },
  {
    eyebrow: "Prepare the target",
    title: "Turn raw structures into modeling-ready systems.",
    text: "Clean proteins, detect components, handle waters, ions, metals, and ligands, find pockets, and align sequences before the calculation starts.",
    points: ["PDB, mmCIF, SDF, and SMILES-to-3D handling", "Protein cleanup and component detection", "Pocket finding plus pairwise and multiple-sequence alignment"],
    visual: "target",
  },
  {
    eyebrow: "Screen and simulate",
    title: "Move from docked poses to MD trajectories without leaving the app.",
    text: "Dock ligands, review ranked poses, inspect interactions, run MD, and track jobs through the same local workspace.",
    points: ["AutoDock Vina docking with receptor and ligand preparation", "Batch results, affinity scores, interactions, and pose downloads", "OpenMM minimization, equilibration, trajectories, checkpoints, and analytics"],
    visual: "simulate",
  },
  {
    eyebrow: "Prioritize with Pro",
    title: "Add advanced modules when the project needs stronger decisions.",
    text: "Licensed Pro services extend the same workflow with property risk, binding confidence, design expansion, and mechanistic insight.",
    points: ["QC and ADMET for property risk", "Boltz-2, ABFE, and RBFE for binding confidence", "GenAI and kinetics workflows for design expansion and mechanism"],
    visual: "pro",
  },
];

const SERVICES = [
  { name: "FastAPI gateway", detail: "single routing layer" },
  { name: "Docker services", detail: "isolated scientific tools" },
  { name: "Celery workers", detail: "CPU, GPU, and long jobs" },
  { name: "Persisted state", detail: "jobs survive page refreshes" },
  { name: "SSE/WebSocket", detail: "live progress updates" },
  { name: "Selective startup", detail: "only enabled modules run" },
  { name: "Desktop launcher", detail: "local install path" },
  { name: "Server Compose", detail: "headless deployment" },
];

const USE_CASES = [
  {
    title: "Academic lab",
    text: "Run teaching, docking, MD, and local project workflows without managed cloud infrastructure.",
  },
  {
    title: "Startup discovery team",
    text: "Keep early target and ligand work private while standardizing project assets and computational jobs.",
  },
  {
    title: "Computational chemist",
    text: "Move from cleaned structures to docked poses to MD trajectories without manually stitching tools together.",
  },
];

const HeroPreview = () => (
  <div className="hero-product" aria-hidden="true">
    <div className="hero-product-head">
      <span>Project: EGFR lead series</span>
      <span className="status-dot">local</span>
    </div>
    <div className="hero-product-body">
      <div className="hero-product-side">
        {["Library", "Protein", "Docking", "MD", "Pro"].map((item, i) => (
          <div className={`hero-side-row ${i === 2 ? "active" : ""}`} key={item}>
            <span className="mini-square" />
            {item}
          </div>
        ))}
      </div>
      <div className="hero-product-main">
        <MoleculePlaceholder pdb="PDB 4W52  -  docked pose" />
        <div className="hero-job-stack">
          {[
            ["Batch docking", "24 ligands", "complete"],
            ["MD equilibration", "OpenMM", "running"],
            ["RBFE network", "Pro", "queued"],
          ].map(([name, meta, state]) => (
            <div className="hero-job" key={name}>
              <div>
                <strong>{name}</strong>
                <span>{meta}</span>
              </div>
              <em>{state}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const HomeHero = () => (
  <section className="story-hero">
    <div className="container story-hero-inner">
      <div className="story-hero-copy">
        <div className="eyebrow"><span className="dot" />Self-hosted CADD workbench</div>
        <h1>
          Local CADD workflows without the <em>script sprawl</em>.
        </h1>
        <p className="hero-lede">
          Ligand-X is a self-hosted computational chemistry workbench for protein preparation,
          molecule editing, docking, molecular dynamics, project storage, and advanced licensed
          prediction modules.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary btn-lg" onClick={() => window.__nav('download')}>
            <Icon name="download" size={16} />
            Download Ligand-X
          </button>
          <button className="btn btn-secondary btn-lg" onClick={() => window.__nav('features')}>
            View capabilities
            <Icon name="arrow" size={14} />
          </button>
          <button className="btn btn-ghost btn-lg" onClick={() => window.open('https://github.com/kon-218/ligand-x', '_blank')}>
            <Icon name="github" size={16} />
            GitHub
          </button>
        </div>
        <div className="capability-strip" aria-label="Deployment proof points">
          {["Runs locally", "Docker-first", "Open core", "Pro modules available"].map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
      <HeroPreview />
    </div>
  </section>
);

const PainValueSection = () => (
  <section className="section pain-section">
    <div className="container pain-grid">
      <div>
        <div className="eyebrow"><span className="dot" />Pain / value</div>
        <h2>Built for the work between tools.</h2>
        <p className="pain-lede">
          Ligand-X is for teams that need serious computational chemistry workflows, but do not want their discovery process spread across scripts, folders, cloud tools, and disconnected viewers.
        </p>
      </div>
      <div className="pain-panel">
        <ul className="pain-list">
          <li>Structures live in one folder.</li>
          <li>Ligands live somewhere else.</li>
          <li>Docking outputs need manual parsing.</li>
          <li>MD setup becomes a separate workflow.</li>
          <li>Results are hard to connect back to the project.</li>
        </ul>
        <p className="pain-statement">
          Ligand-X keeps proteins, molecules, pockets, jobs, poses, trajectories, and generated outputs in one project workspace.
        </p>
      </div>
    </div>
  </section>
);

const WorkflowIntro = () => (
  <section className="section-tight workflow-intro">
    <div className="container section-head">
      <div>
        <div className="eyebrow"><span className="dot" />Main workflow</div>
        <h2>From target setup to project decisions.</h2>
      </div>
      <p className="sub">
        The core workflow follows the way computational chemists actually move: create a project,
        prepare the target, screen and simulate, then add advanced modules when prioritization needs more evidence.
      </p>
    </div>
  </section>
);

const StoryVisual = ({ type }) => {
  if (type === "workspace") {
    return (
      <div className="story-visual workspace-visual">
        <div className="visual-toolbar"><span /> <span /> <span /></div>
        <div className="workspace-grid">
          <div className="workspace-panel tall">
            <h5>Project assets</h5>
            {["4W52.pdb", "lead_023.sdf", "pocket_A", "dock_run_12"].map((x) => <p key={x}>{x}</p>)}
          </div>
          <div className="workspace-panel molecule-sketch"><Icon name="atom" size={64} /></div>
          <div className="workspace-panel"><strong>Jobs</strong><span>12 complete</span></div>
          <div className="workspace-panel"><strong>Library</strong><span>86 molecules</span></div>
        </div>
      </div>
    );
  }
  if (type === "target") {
    return (
      <div className="story-visual target-visual">
        <MoleculePlaceholder pdb="cleaned target  -  pockets" live={false} />
        <div className="pocket-tags"><span>pocket 01</span><span>chain A</span><span>MSA ready</span></div>
      </div>
    );
  }
  if (type === "simulate") {
    return (
      <div className="story-visual simulate-visual">
        {[
          ["Dock", "-9.4 kcal/mol", 100],
          ["Review poses", "Mol*", 100],
          ["Equilibrate", "OpenMM", 64],
          ["Analyze", "trajectory", 28],
        ].map(([name, meta, pct]) => (
          <div className="run-row" key={name}>
            <div><strong>{name}</strong><span>{meta}</span></div>
            <div className="run-bar"><i style={{ width: `${pct}%` }} /></div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="story-visual pro-visual">
      {HOME_PRO_MODULES.map((item) => (
        <div className="pro-visual-card" key={item.name}>
          <strong>{item.name}</strong>
          <span>{item.decision}</span>
        </div>
      ))}
    </div>
  );
};

const StorySection = ({ stage, index }) => (
  <section className={`story-section ${index % 2 ? "flip" : ""}`}>
    <div className="container story-grid">
      <div className="story-copy">
        <div className="story-number">{String(index + 1).padStart(2, "0")}</div>
        <div className="eyebrow"><span className="dot" />{stage.eyebrow}</div>
        <h2>{stage.title}</h2>
        <p>{stage.text}</p>
        <ul className="story-points">
          {stage.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
      <StoryVisual type={stage.visual} />
    </div>
  </section>
);

const LocalValueSection = () => (
  <section className="section local-value-section">
    <div className="container local-value-grid">
      <div>
        <div className="eyebrow"><span className="dot" />Why local matters</div>
        <h2>Your structures and results stay on your hardware.</h2>
        <p>
          Ligand-X is designed for sensitive structures, early ligand ideas, internal targets, and teams that want reproducible workflows without forcing every calculation through a managed cloud app.
        </p>
      </div>
      <div className="local-value-list">
        {["No required cloud upload for sensitive structures", "Use local CPU/GPU resources", "Works for desktop or server deployment", "Suitable for academic labs, startups, and internal research environments"].map((item) => (
          <div className="local-value-item" key={item}><Icon name="check" size={16} /><span>{item}</span></div>
        ))}
      </div>
    </div>
  </section>
);

const OpenCoreProSection = () => (
  <section className="section capability-map-section">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot" />Open Core vs Pro</div>
          <h2>Start with the local workbench. Add advanced decision modules when needed.</h2>
        </div>
        <p className="sub">
          Each layer is framed by the decisions it supports, from day-to-day project execution to higher-confidence prioritization.
        </p>
      </div>
      <div className="edition-map">
        <div className="edition-card">
          <h3>Open Core</h3>
          <p>Everyday local workflows for project setup, target preparation, screening, simulation, and review.</p>
          <div className="capability-cloud">
            {CORE_LABELS.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="edition-card pro-edition-card">
          <h3>Pro</h3>
          <p>Licensed services for higher-confidence prioritization once the project needs more evidence.</p>
          <div className="module-decision-list">
            {HOME_PRO_MODULES.map((item) => (
              <div className="module-decision" key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.decision}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ArchitectureProofSection = () => (
  <section className="section local-section">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot" />Architecture proof</div>
          <h2>Built like infrastructure, not a notebook demo.</h2>
        </div>
        <p className="sub">
          Technical evaluators can see the operating model: a gateway, containerized services, persistent jobs, live progress, and deployment paths for desktops or servers.
        </p>
      </div>
      <div className="service-board">
        <div className="service-spine">
          <span>Frontend</span>
          <Icon name="arrow" size={15} />
          <span>FastAPI gateway</span>
          <Icon name="arrow" size={15} />
          <span>Docker services + workers</span>
        </div>
        <div className="service-grid proof-grid">
          {SERVICES.map((svc) => (
            <div className="service-cell" key={svc.name}>
              <strong>{svc.name}</strong>
              <span>{svc.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const UseCasesSection = () => (
  <section className="section use-cases-section">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow"><span className="dot" />Use cases</div>
          <h2>Built for teams that need workflow control.</h2>
        </div>
        <p className="sub">
          Ligand-X fits small teams and individual computational chemists who want local execution, project continuity, and a path to advanced methods.
        </p>
      </div>
      <div className="use-case-grid">
        {USE_CASES.map((item) => (
          <div className="use-case-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const QuickStartSection = () => (
  <section className="section quick-story-section">
    <div className="container quick-story-grid">
      <div>
        <div className="eyebrow"><span className="dot" />Installation</div>
        <h2>Use the launcher for desktops, or Compose for servers.</h2>
        <p>
          Desktop: install Docker, open the Ligand-X launcher, select modules, and start. Server: clone the repo, configure the environment, and run Compose.
        </p>
      </div>
      <CodeBlock
        tabs={[
          {
            label: "desktop",
            copy: "Install Docker\nOpen Ligand-X launcher\nSelect modules\nStart",
            content: (
              <>
                <Comment># Desktop path</Comment>{"\n"}
                <Cmd>Install Docker Desktop or Docker Engine</Cmd>{"\n"}
                <Cmd>Open the Ligand-X launcher</Cmd>{"\n"}
                <Cmd>Select Free or licensed Pro modules</Cmd>{"\n"}
                <span style={{ color: "#7ee787" }}>ready at http://localhost:3000</span>
              </>
            ),
          },
          {
            label: "server",
            copy: "git clone https://github.com/kon-218/ligand-x\ncd ligand-x\ncp .env.production.template .env.production\nmake pull\nmake prod",
            content: (
              <>
                <Cmd><Fn>git</Fn> clone https://github.com/kon-218/ligand-x</Cmd>{"\n"}
                <Cmd><Kw>cd</Kw> ligand-x</Cmd>{"\n"}
                <Cmd><Fn>cp</Fn> .env.production.template .env.production</Cmd>{"\n"}
                <Cmd><Fn>make</Fn> pull</Cmd>{"\n"}
                <Cmd><Fn>make</Fn> prod</Cmd>
              </>
            ),
          },
        ]}
      />
    </div>
  </section>
);

const CTASection = () => (
  <section className="section final-story-cta">
    <div className="container final-story-inner">
      <div className="eyebrow"><span className="dot" />Open core + licensed Pro</div>
      <h2>Start local. Add advanced modules when the project needs them.</h2>
      <p>
        Run the open-core workbench for projects, structures, docking, and MD. Compare Free and Pro when your team needs property risk, binding confidence, generative design, or kinetics workflows.
      </p>
      <div className="hero-cta">
        <button className="btn btn-primary btn-lg" onClick={() => window.__nav('download')}>
          <Icon name="download" size={16} />
          Download Ligand-X
        </button>
        <button className="btn btn-secondary btn-lg" onClick={() => window.__nav('pro')}>
          Compare Free and Pro
          <Icon name="arrow" size={14} />
        </button>
        <button className="btn btn-secondary btn-lg" onClick={() => window.__nav('contact')}>
          Contact for access
        </button>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <div className="page-fade">
    <HomeHero />
    <PainValueSection />
    <WorkflowIntro />
    {STORY_STAGES.map((stage, index) => <StorySection stage={stage} index={index} key={stage.eyebrow} />)}
    <LocalValueSection />
    <OpenCoreProSection />
    <ArchitectureProofSection />
    <UseCasesSection />
    <QuickStartSection />
    <CTASection />
  </div>
);

Object.assign(window, { HomePage });
