// ============================================================
// FeaturesPage — current open-core + Pro capability reference
// ============================================================

const FEATURES = [
  {
    id: "structure",
    icon: "funnel",
    tier: "Open Core",
    tag: "structure",
    title: "Structure and Protein Cleaning",
    summary: "Prepare PDB structures for downstream modeling with component detection, repair, and cleanup.",
    details: [
      "Fetch or import PDB structures",
      "Identify chains, ligands, waters, ions, and metals",
      "Repair missing atoms and incomplete residues",
      "Optional water and ion removal",
      "Export simulation-ready PDB assets",
    ],
    tools: ["PDBFixer", "BioPython", "RDKit", "OpenBabel"],
    formats: ["PDB / mmCIF -> cleaned PDB"],
  },
  {
    id: "docking",
    icon: "target",
    tier: "Open Core",
    tag: "docking",
    title: "Molecular Docking",
    summary: "Single and batch ligand pose prediction with AutoDock Vina and interactive result review.",
    details: [
      "Receptor and ligand PDBQT preparation",
      "Configurable binding box and exhaustiveness",
      "Ranked poses with affinity scores",
      "Interaction summaries and pose downloads",
      "Mol* visualization for docked complexes",
    ],
    tools: ["AutoDock Vina", "Meeko", "RDKit", "OpenBabel", "Mol*"],
    formats: ["PDB + SDF / SMILES -> ranked poses"],
  },
  {
    id: "md",
    icon: "wave",
    tier: "Open Core",
    tag: "simulation",
    title: "Molecular Dynamics",
    summary: "OpenMM molecular dynamics workflows for minimization, equilibration, and trajectory generation.",
    details: [
      "Protein-ligand system construction",
      "OpenMM/OpenFF force-field setup",
      "Minimization, NVT, and NPT stages",
      "GPU acceleration when CUDA is available",
      "Trajectory and checkpoint outputs",
    ],
    tools: ["OpenMM", "OpenFF", "AmberTools", "MDAnalysis"],
    formats: ["PDB + ligand -> PDB / DCD / metrics"],
  },
  {
    id: "alignment",
    icon: "network",
    tier: "Open Core",
    tag: "structure",
    title: "Molecule and Structure Alignment",
    summary: "Align ligands and structures for comparison, mapping previews, and workflow setup.",
    details: [
      "3D molecule alignment for ligand series",
      "Reference-based pose comparison",
      "Geometry and RMSD outputs",
      "Prepared inputs for docking and free-energy workflows",
    ],
    tools: ["RDKit", "Kartograf", "OpenFE helpers"],
    formats: ["SDF series -> aligned structures"],
  },
  {
    id: "msa",
    icon: "book",
    tier: "Open Core",
    tag: "sequence",
    title: "Sequence Tools and MSA",
    summary: "Pairwise and multiple-sequence analysis for protein-family context and target comparison.",
    details: [
      "Pairwise sequence alignment workflows",
      "Multiple sequence alignment service",
      "Cached sequence results",
      "Outputs for target comparison and reporting",
    ],
    tools: ["EMBOSS", "MSA service", "FastAPI"],
    formats: ["FASTA -> alignments and reports"],
  },
  {
    id: "editor",
    icon: "atom",
    tier: "Open Core",
    tag: "structure",
    title: "Molecule Editor and Library",
    summary: "Draw, import, save, and reuse molecules and project assets inside the web app.",
    details: [
      "Ketcher molecule drawing and editing",
      "SMILES, SDF, and PDB import/export",
      "Persistent project molecule library",
      "Saved structures, poses, and generated assets",
    ],
    tools: ["Ketcher", "RDKit", "PostgreSQL"],
    formats: ["SMILES / SDF / PDB -> project assets"],
  },
  {
    id: "pocket-finder",
    icon: "search",
    tier: "Open Core",
    tag: "structure",
    title: "Binding-Site and Pocket Finding",
    summary: "Detect candidate binding pockets and prepare search regions for structure-based workflows.",
    details: [
      "Pocket prediction for imported protein structures",
      "Binding-site summaries for docking setup",
      "Reusable pocket coordinates in projects",
      "Integration with downstream pose workflows",
    ],
    tools: ["P2Rank", "DeepPocket assets", "FastAPI"],
    formats: ["PDB -> pocket candidates"],
  },
  {
    id: "qc",
    icon: "sigma",
    tier: "Pro",
    tag: "pro",
    title: "Quantum Chemistry",
    summary: "Licensed ORCA-backed calculations for geometries, charges, energetics, and molecular properties.",
    details: [
      "Geometry optimization and single-point jobs",
      "Frequency, charge, and Fukui analyses",
      "ORCA parser integration",
      "Worker-backed long-running calculations",
    ],
    tools: ["ORCA", "RDKit", "Pro QC worker"],
    formats: ["SDF / XYZ -> energies, charges, properties"],
  },
  {
    id: "admet",
    icon: "flask",
    tier: "Pro",
    tag: "pro",
    title: "ADMET Prediction",
    summary: "Licensed screening for drug-likeness and ADMET properties across single molecules or batches.",
    details: [
      "Batch SMILES screening",
      "Drug-likeness and property summaries",
      "Cached project-level predictions",
      "Private Pro container image",
    ],
    tools: ["PyTorch", "RDKit", "ADMET service"],
    formats: ["SMILES / SDF -> ADMET table"],
  },
  {
    id: "boltz2",
    icon: "atom",
    tier: "Pro",
    tag: "pro",
    title: "Boltz-2 Affinity Prediction",
    summary: "Licensed GPU service for Boltz-2 structure and binding-affinity prediction workflows.",
    details: [
      "Protein-ligand affinity prediction",
      "GPU-backed execution",
      "Project outputs and downloadable reports",
      "Private Pro image with licensed access",
    ],
    tools: ["Boltz-2", "CUDA", "Pro GPU worker"],
    formats: ["Target + ligand -> affinity prediction"],
  },
  {
    id: "free-energy",
    icon: "scale",
    tier: "Pro",
    tag: "pro",
    title: "ABFE and RBFE Workflows",
    summary: "Licensed alchemical free-energy calculations for single ligands and lead-optimization series.",
    details: [
      "Absolute binding free energy workflows",
      "Relative binding free energy networks",
      "Mapping previews and overlap analysis",
      "GPU-long worker execution",
    ],
    tools: ["OpenFE", "OpenMM", "LOMAP", "MBAR"],
    formats: ["PDB + ligand series -> DG / DDG"],
  },
  {
    id: "reinvent",
    icon: "sigma",
    tier: "Pro",
    tag: "pro",
    title: "REINVENT Generative Design",
    summary: "Licensed de novo molecule generation and optimization workflows backed by private workers.",
    details: [
      "Configuration generation for REINVENT runs",
      "Worker-backed molecule generation",
      "Project-level result handling",
      "Private Pro service and worker images",
    ],
    tools: ["REINVENT", "RDKit", "Pro worker"],
    formats: ["Objective config -> generated molecules"],
  },
  {
    id: "kinetics",
    icon: "wave",
    tier: "Pro",
    tag: "pro",
    title: "Binding Kinetics",
    summary: "Licensed kinetics workflows for residence-time and pathway analysis using advanced simulation methods.",
    details: [
      "RAMD and WESTPA-oriented workflows",
      "NAMD equilibration support",
      "Force-field preparation helpers",
      "Animation and pathway result handling",
    ],
    tools: ["NAMD", "WESTPA", "RAMD", "Pro kinetics worker"],
    formats: ["Complex setup -> kinetics outputs"],
  },
];

const CATEGORIES = [
  { id: "all", label: "All capabilities" },
  { id: "core", label: "Open Core" },
  { id: "structure", label: "Structure" },
  { id: "simulation", label: "Simulation" },
  { id: "sequence", label: "Sequence" },
  { id: "pro", label: "Pro" },
];

const filterFeature = (feature, category) => {
  if (category === "all") return true;
  if (category === "core") return feature.tier === "Open Core";
  return feature.tag === category;
};

const FeatureDetail = ({ feature }) => (
  <div className="fx-detail">
    <div className="fx-detail-head">
      <div className={`fx-detail-icon ${feature.tier === "Pro" ? "pro" : ""}`}>
        <Icon name={feature.icon} size={26} style={{ color: feature.tier === "Pro" ? "#b7791f" : "var(--accent-strong)" }} />
      </div>
      <div>
        <div className="fx-detail-meta">
          <span className={`fx-detail-tier ${feature.tier === "Pro" ? "pro" : ""}`}>{feature.tier}</span>
          <span className="fx-detail-tag">{feature.tag}</span>
        </div>
        <h3>{feature.title}</h3>
      </div>
    </div>

    <p className="fx-detail-summary">{feature.summary}</p>

    <div className="fx-detail-grid">
      <div>
        <h5>Capabilities</h5>
        <ul className="fx-bullet-list">
          {feature.details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
      <div>
        <h5>Tools</h5>
        <div className="tools">
          {feature.tools.map((t) => <span className="tool-pill" key={t}>{t}</span>)}
        </div>
        <h5 style={{ marginTop: 20 }}>Input -> Output</h5>
        <div className="fx-io-list">
          {feature.formats.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="fx-detail-actions">
      {feature.tier === "Pro" ? (
        <button className="btn btn-primary btn-sm" onClick={() => window.__nav('pro')}>
          <Icon name="scale" size={12} />
          Explore Pro
        </button>
      ) : (
        <button className="btn btn-secondary btn-sm" onClick={() => window.__nav('docs')}>
          <Icon name="book" size={12} />
          Docs
        </button>
      )}
      <button className="btn btn-secondary btn-sm">
        <Icon name="play" size={12} />
        Demo
      </button>
    </div>
  </div>
);

const FeaturesPage = () => {
  const [selectedId, setSelectedId] = React.useState("docking");
  const [cat, setCat] = React.useState("all");
  const [query, setQuery] = React.useState("");

  const filtered = FEATURES.filter((f) => {
    if (!filterFeature(f, cat)) return false;
    if (!query.trim()) return true;
    const needle = query.trim().toLowerCase();
    return [
      f.title,
      f.summary,
      f.tier,
      f.tag,
      ...f.details,
      ...f.tools,
      ...f.formats,
    ].join(" ").toLowerCase().includes(needle);
  });

  React.useEffect(() => {
    if (!filtered.length) return;
    if (!filtered.some((f) => f.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);

  const selected = filtered.find((f) => f.id === selectedId) || filtered[0] || null;
  const grouped = {
    core: filtered.filter((f) => f.tier === "Open Core"),
    pro: filtered.filter((f) => f.tier === "Pro"),
  };

  return (
    <div className="page-fade">
      <section style={{ padding: 'var(--sp-8) 0 var(--sp-5)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="eyebrow"><span className="dot" />Features</div>
          <h1 style={{ fontSize: 'clamp(34px, 4vw, 52px)', margin: '12px 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600 }}>
            Open-core workflows with licensed Pro services.
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 720, margin: 0 }}>
            Ligand-X combines local structure handling, docking, MD, sequence analysis, editing, and project storage
            with licensed Pro modules for quantum chemistry, ADMET, Boltz-2, free energy, REINVENT, and kinetics.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--sp-6) 0 0' }}>
        <div className="container">
          <div className="fx-controls">
            <label className="fx-search">
              <Icon name="search" size={14} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search modules, tools, methods..."
              />
            </label>
            <div className="fx-filter-row">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={`fx-filter-pill ${cat === c.id ? "active" : ""}`}
                  onClick={() => setCat(c.id)}
                >
                  {c.label}
                  <span className="fx-filter-count">
                    {FEATURES.filter((f) => filterFeature(f, c.id)).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--sp-3) 0 var(--sp-8)' }}>
        <div className="container">
          <div className="fx-split">
            <aside className="fx-list">
              {grouped.core.length > 0 && (
                <>
                  <div className="fx-group-title">Open Core</div>
                  {grouped.core.map((f) => (
                    <button
                      key={f.id}
                      className={`fx-row ${selected?.id === f.id ? "active" : ""}`}
                      onClick={() => setSelectedId(f.id)}
                    >
                      <div className="feature-icon">
                        <Icon name={f.icon} size={22} style={{ color: "var(--accent-strong)" }} />
                      </div>
                      <div className="fx-row-copy">
                        <div className="feature-title">{f.title}</div>
                        <div className="feature-summary">{f.summary}</div>
                      </div>
                    </button>
                  ))}
                </>
              )}

              {grouped.pro.length > 0 && (
                <>
                  <div className="fx-group-title">Pro</div>
                  {grouped.pro.map((f) => (
                    <button
                      key={f.id}
                      className={`fx-row pro ${selected?.id === f.id ? "active" : ""}`}
                      onClick={() => setSelectedId(f.id)}
                    >
                      <div className="feature-icon pro">
                        <Icon name={f.icon} size={22} style={{ color: "#b7791f" }} />
                      </div>
                      <div className="fx-row-copy">
                        <div className="feature-title">{f.title}</div>
                        <div className="feature-summary">{f.summary}</div>
                      </div>
                      <span className="fx-pro-badge">PRO</span>
                    </button>
                  ))}
                </>
              )}
            </aside>

            <main>
              {selected ? (
                <FeatureDetail feature={selected} />
              ) : (
                <div className="fx-empty">No capabilities match your filters.</div>
              )}
            </main>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot" />How they connect</div>
              <h2>Core workflows prepare data for optional Pro modules.</h2>
            </div>
            <p className="sub">
              Start with local project assets, structure cleanup, pocket finding, docking, and MD. Add licensed Pro
              services when you need higher-end prediction, generation, or advanced simulation workflows.
            </p>
          </div>
          <PipelineFlow />
        </div>
      </section>

      <CTASection />
    </div>
  );
};

// ============================================================
// PipelineFlow — horizontal flow diagram
// ============================================================

const PipelineFlow = () => {
  const stages = [
    { label: "Projects + Molecules", icon: "box", type: "input" },
    { label: "Clean + Pockets", icon: "funnel", type: "service" },
    { label: "Dock + Align", icon: "target", type: "service" },
    { label: "MD + Sequence", icon: "wave", type: "service" },
    { label: "Pro: QC / ADMET / Boltz-2", icon: "sigma", type: "service" },
    { label: "Pro: FE / REINVENT / Kinetics", icon: "scale", type: "output" },
  ];
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--sp-6) var(--sp-5)', overflowX: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'space-between', minWidth: 840 }}>
        {stages.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{
              flex: '0 0 auto',
              padding: '14px 18px',
              background: s.type === 'input' ? 'var(--bg-subtle)' : s.type === 'output' ? 'var(--accent-soft)' : 'var(--bg)',
              border: `1px solid ${s.type === 'output' ? 'color-mix(in srgb, var(--accent) 30%, transparent)' : 'var(--border)'}`,
              borderRadius: 'var(--radius)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              minWidth: 124,
            }}>
              <Icon name={s.icon} size={20} style={{ color: s.type === 'output' ? 'var(--accent-strong)' : 'var(--ink-2)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: s.type === 'output' ? 'var(--accent-ink)' : 'var(--ink-2)', textAlign: 'center', lineHeight: 1.3 }}>{s.label}</span>
            </div>
            {i < stages.length - 1 && (
              <div style={{ flex: 1, height: 1, background: 'var(--border-strong)', position: 'relative', minWidth: 16 }}>
                <div style={{ position: 'absolute', right: -1, top: -3, width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid var(--border-strong)' }} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { FeaturesPage });
