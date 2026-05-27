// ============================================================
// DocsPage — Getting Started style technical docs
// ============================================================

const DOCS_SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    subsections: [],
  },
  {
    id: "requirements",
    title: "System requirements",
    subsections: [],
  },
  {
    id: "install",
    title: "Installation",
    subsections: [],
  },
  {
    id: "first-run",
    title: "First run",
    subsections: [],
  },
  {
    id: "config",
    title: "Configuration",
    subsections: [],
  },
  {
    id: "dev-mode",
    title: "Development mode",
    subsections: [],
  },
  {
    id: "ports",
    title: "Service ports",
    subsections: [],
  },
  {
    id: "next",
    title: "Next steps",
    subsections: [],
  },
];

const DocsPage = () => {
  const [activeSection, setActiveSection] = React.useState("overview");
  const sectionRefs = React.useRef({});

  // Scroll to section on sidebar click
  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Track active section on scroll
  React.useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY + 100;
      let current = "overview";
      for (const s of DOCS_SECTIONS) {
        const el = sectionRefs.current[s.id];
        if (el && el.offsetTop <= top) current = s.id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-fade">
      {/* Header */}
      <section style={{ padding: 'var(--sp-8) 0 var(--sp-5)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-wide">
          <div className="eyebrow"><span className="dot" />Documentation · Getting started</div>
          <h1 style={{ fontSize: 'clamp(34px, 4vw, 52px)', margin: '12px 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600 }}>
            Install Ligand-X with the launcher or CLI.
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 680, margin: 0 }}>
            Current setup paths for desktop users, production servers, and developers.
            The launcher is the recommended route; the CLI is available for headless deployments.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => window.open('https://github.com/kon-218/ligand-x', '_blank')}>
              <Icon name="github" size={13} />
              github.com/kon-218/ligand-x
              <Icon name="external" size={11} />
            </button>
            <span className="tag">PolyForm Noncommercial</span>
            <span className="tag">v0.1.0 · current repo</span>
            <span className="tag">launcher-first install</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: 'var(--sp-7) 0 var(--sp-9)' }}>
        <div className="container-wide">
          <div className="docs-layout">

            {/* LEFT NAV */}
            <aside className="docs-side">
              <h6>Getting started</h6>
              <ul>
                {DOCS_SECTIONS.map((s) => (
                  <li key={s.id}>
                    <button
                      className={activeSection === s.id ? "active" : ""}
                      onClick={() => scrollTo(s.id)}
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
              <h6>Reference</h6>
              <ul>
                <li><button onClick={() => window.__nav('features')}>Capability reference</button></li>
                <li><button>REST API</button></li>
                <li><button>File formats</button></li>
                <li><button>CLI</button></li>
              </ul>
              <h6>Theory</h6>
              <ul>
                <li><button>Docking</button></li>
                <li><button>MD</button></li>
                <li><button>Free energy</button></li>
                <li><button>Quantum chemistry</button></li>
              </ul>
            </aside>

            {/* MAIN */}
            <main className="docs-main">

              {/* Overview */}
              <h2 id="overview" ref={(r) => sectionRefs.current.overview = r}>Overview</h2>
              <p>
                <strong>Ligand-X</strong> is a containerized, self-hosted platform for computer-aided drug discovery.
                It bundles structure preparation, docking, molecular dynamics, binding-site analysis,
                sequence tools, molecule editing, and licensed Pro modules behind a single web interface.
              </p>
              <p>
                The stack runs locally in Docker. A Next.js frontend talks to a FastAPI gateway; jobs are
                coordinated through PostgreSQL, Redis, RabbitMQ, and Celery workers.
              </p>
              <div className="callout">
                <span className="tag">Heads-up</span>
                This guide matches the current local <code>ligand-x</code> and <code>ligand-x-pro</code>
                repositories. Pro modules require an Academic or Pro license and private container images.
              </div>

              {/* Requirements */}
              <h2 id="requirements" ref={(r) => sectionRefs.current.requirements = r}>System requirements</h2>
              <table className="port-table">
                <thead>
                  <tr><th>Component</th><th>Minimum</th><th>Recommended</th></tr>
                </thead>
                <tbody>
                  <tr><td>OS</td><td className="mono">Linux / macOS / WSL 2</td><td className="mono">Ubuntu 22.04+</td></tr>
                  <tr><td>Docker</td><td className="mono">20.10</td><td className="mono">Docker Compose v2</td></tr>
                  <tr><td>RAM</td><td className="mono">16 GB</td><td className="mono">32 GB+ for GPU services</td></tr>
                  <tr><td>Disk</td><td className="mono">20 GB free</td><td className="mono">50 GB+ for trajectories and Pro images</td></tr>
                  <tr><td>GPU</td><td className="mono">Optional</td><td className="mono">NVIDIA GPU + Container Toolkit</td></tr>
                </tbody>
              </table>

              {/* Install */}
              <h2 id="install" ref={(r) => sectionRefs.current.install = r}>Installation</h2>
              <p>
                For desktop use, install the Ligand-X launcher from GitHub Releases. The launcher downloads the
                runtime bundle, imports a license when available, pulls selected open-core and Pro images, and
                starts the app without requiring a git clone.
              </p>
              <CodeBlock
                label="desktop"
                copyText={`# Download from https://github.com/kon-218/ligand-x/releases\n# Windows: ligandx-launcher-windows-amd64-installer.exe\n# macOS: ligandx-launcher-darwin-arm64.dmg or ligandx-launcher-darwin-amd64.dmg\n# Linux: ligandx-launcher-linux-amd64.AppImage`}
              >
                <Comment># Download from https://github.com/kon-218/ligand-x/releases</Comment>{"\n"}
                <Comment># Windows: ligandx-launcher-windows-amd64-installer.exe</Comment>{"\n"}
                <Comment># macOS: ligandx-launcher-darwin-arm64.dmg or ligandx-launcher-darwin-amd64.dmg</Comment>{"\n"}
                <Comment># Linux: ligandx-launcher-linux-amd64.AppImage</Comment>
              </CodeBlock>

              <h3>Production / headless CLI</h3>
              <p>For servers or source checkouts, configure production environment variables and pull images from GHCR.</p>
              <CodeBlock
                label="production"
                copyText={`git clone https://github.com/kon-218/ligand-x.git\ncd ligand-x\ncp .env.production.template .env.production\n# edit .env.production\nmake pull\nmake prod`}
              >
                <Cmd><Fn>git</Fn> clone https://github.com/kon-218/ligand-x.git</Cmd>{"\n"}
                <Cmd><Kw>cd</Kw> ligand-x</Cmd>{"\n"}
                <Cmd><Fn>cp</Fn> .env.production.template .env.production</Cmd>{"\n"}
                <Comment># edit .env.production, then pull and start published images</Comment>{"\n"}
                <Cmd><Fn>make</Fn> pull</Cmd>{"\n"}
                <Cmd><Fn>make</Fn> prod</Cmd>
              </CodeBlock>

              {/* First run */}
              <h2 id="first-run" ref={(r) => sectionRefs.current['first-run'] = r}>First run</h2>
              <p>
                After startup, verify the containers and health endpoints. Open-core modules work without a license;
                Academic and Pro licenses unlock private Pro services.
              </p>
              <CodeBlock
                label="verify"
                copyText={`docker compose ps\ncurl http://localhost:8000/health\ncurl http://localhost:8000/api/services/health\n# open http://localhost:3000`}
              >
                <Cmd><Fn>docker</Fn> compose ps</Cmd>{"\n"}
                <Cmd><Fn>curl</Fn> http://localhost:8000/health</Cmd>{"\n"}
                <Cmd><Fn>curl</Fn> http://localhost:8000/api/services/health</Cmd>{"\n"}
                <span style={{ color: 'oklch(0.78 0.10 200)' }}>{"Open http://localhost:3000"}</span>
              </CodeBlock>

              {/* Configuration */}
              <h2 id="config" ref={(r) => sectionRefs.current.config = r}>Configuration</h2>
              <p>
                Production configuration is read from <code>.env.production</code>. Required values include
                database, RabbitMQ, Flower, QC, API URL, CORS, and optional ORCA path settings.
              </p>
              <CodeBlock
                label=".env.production"
                copyText={`POSTGRES_PASSWORD=change-me\nRABBITMQ_PASSWORD=change-me\nFLOWER_PASSWORD=change-me\nQC_SECRET_KEY=generate-a-random-secret\nNEXT_PUBLIC_API_URL=http://localhost:8000\nCORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000\nORCA_HOST_PATH=/opt/orca\nLIGANDX_PRO_IMAGE_PREFIX=ghcr.io/kon-218/ligand-x-pro`}
              >
                <span style={{ color: 'var(--code-comment)' }}># .env.production - required production settings</span>{"\n"}
                <Kw>POSTGRES_PASSWORD</Kw>=<Str>change-me</Str>{"\n"}
                <Kw>RABBITMQ_PASSWORD</Kw>=<Str>change-me</Str>{"\n"}
                <Kw>FLOWER_PASSWORD</Kw>=<Str>change-me</Str>{"\n"}
                <Kw>QC_SECRET_KEY</Kw>=<Str>generate-a-random-secret</Str>{"\n"}
                <Kw>NEXT_PUBLIC_API_URL</Kw>=<Str>http://localhost:8000</Str>{"\n"}
                <Kw>CORS_ORIGINS</Kw>=<Str>http://localhost:3000,http://127.0.0.1:3000</Str>{"\n"}
                <Kw>ORCA_HOST_PATH</Kw>=<Str>/opt/orca</Str>{"\n"}
                <Kw>LIGANDX_PRO_IMAGE_PREFIX</Kw>=<Str>ghcr.io/kon-218/ligand-x-pro</Str>
              </CodeBlock>

              {/* Dev mode */}
              <h2 id="dev-mode" ref={(r) => sectionRefs.current['dev-mode'] = r}>Development mode</h2>
              <p>
                <code>make dev</code> generates a local <code>.env</code>, mounts source into containers, and starts
                the Next.js frontend with hot reload. Partial startup targets are available for focused work.
              </p>
              <CodeBlock label="dev" copyText="make dev">
                <Cmd><Fn>make</Fn> dev</Cmd>{"\n"}
                <Cmd><Fn>make</Fn> dev-core</Cmd>{"\n"}
                <Cmd><Fn>make</Fn> dev-docking</Cmd>{"\n"}
                <Cmd><Fn>make</Fn> dev-free-energy</Cmd>
              </CodeBlock>

              {/* Ports */}
              <h2 id="ports" ref={(r) => sectionRefs.current.ports = r}>Service ports</h2>
              <table className="port-table">
                <thead>
                  <tr><th>Service</th><th>Port</th><th>Purpose</th></tr>
                </thead>
                <tbody>
                  <tr><td>Frontend</td><td className="mono">:3000</td><td>React UI + Mol* viewer</td></tr>
                  <tr><td>API Gateway</td><td className="mono">:8000</td><td>FastAPI · OpenAPI at <code>/docs</code></td></tr>
                  <tr><td>PostgreSQL</td><td className="mono">:5432</td><td>Job persistence and blob metadata</td></tr>
                  <tr><td>RabbitMQ</td><td className="mono">:15672</td><td>Management UI</td></tr>
                  <tr><td>Flower</td><td className="mono">:5555</td><td>Celery worker dashboard</td></tr>
                  <tr><td>Redis</td><td className="mono">:6379</td><td>WebSocket pub/sub and cache</td></tr>
                </tbody>
              </table>

              {/* Next */}
              <h2 id="next" ref={(r) => sectionRefs.current.next = r}>Next steps</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 16 }}>
                <NextCard
                  title="Run your first docking job"
                  desc="A 10-minute walkthrough of preparing a receptor + ligand and running AutoDock Vina."
                  icon="target"
                  onClick={() => window.__nav('features')}
                />
                <NextCard
                  title="Set up GPU acceleration"
                  desc="Configure the MD service for CUDA and verify with the validation test suite."
                  icon="chip"
                />
                <NextCard
                  title="Read the architecture spec"
                  desc="How the gateway, workers and microservices communicate via Redis and Celery."
                  icon="network"
                />
                <NextCard
                  title="Browse the capability reference"
                  desc="Full list of methods, parameters, supported file formats and theory links."
                  icon="book"
                  onClick={() => window.__nav('features')}
                />
              </div>
            </main>

            {/* RIGHT TOC */}
            <aside className="docs-toc">
              <h6>On this page</h6>
              <ul>
                {DOCS_SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      className={activeSection === s.id ? "active" : ""}
                      onClick={() => scrollTo(s.id)}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
};

const NextCard = ({ title, desc, icon, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'border-color 0.15s, transform 0.15s',
    }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <Icon name={icon} size={18} style={{ color: 'var(--accent-strong)' }} />
      <span style={{ fontWeight: 600, fontSize: 15 }}>{title}</span>
    </div>
    <p style={{ color: 'var(--muted)', fontSize: 13.5, margin: 0, lineHeight: 1.55 }}>{desc}</p>
    <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-strong)', display: 'flex', alignItems: 'center', gap: 4 }}>
      Continue <Icon name="arrow" size={11} />
    </div>
  </div>
);

Object.assign(window, { DocsPage });
