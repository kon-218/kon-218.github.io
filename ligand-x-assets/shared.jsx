// ============================================================
// Shared components: icons, molecule placeholder, code blocks
// ============================================================

const Icon = ({ name, size = 16, ...rest }) => {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    arrowDown: <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    chev: <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    check: <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    copy: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></g>,
    github: <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.06c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18A11.07 11.07 0 0 1 12 6.8c.98 0 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>,
    docker: <g><rect x="1" y="9" width="3" height="3" fill="currentColor"/><rect x="5" y="9" width="3" height="3" fill="currentColor"/><rect x="9" y="9" width="3" height="3" fill="currentColor"/><rect x="13" y="9" width="3" height="3" fill="currentColor"/><rect x="5" y="5" width="3" height="3" fill="currentColor"/><rect x="9" y="5" width="3" height="3" fill="currentColor"/><rect x="13" y="5" width="3" height="3" fill="currentColor"/><rect x="9" y="1" width="3" height="3" fill="currentColor"/><path d="M17 9c2 0 4 1 5 2-1 4-4 6-9 6-5 0-9-3-9-7" fill="currentColor"/></g>,
    linux: <g fill="currentColor"><ellipse cx="12" cy="9" rx="4.5" ry="6"/><circle cx="10" cy="8" r="1" fill="#fff"/><circle cx="14" cy="8" r="1" fill="#fff"/><path d="M5 18c0-2 2-4 7-4s7 2 7 4-2 4-7 4-7-2-7-4z"/></g>,
    apple: <path fill="currentColor" d="M17.5 12.5c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.4-2.2-4.1-2.2-1.7-.2-3.4 1-4.3 1-.9 0-2.3-1-3.8-1-1.9 0-3.7 1.1-4.7 2.8C1 12.4 2.4 18.1 4.5 21c1 1.5 2.2 3 3.8 3 1.5-.1 2.1-1 3.9-1s2.3 1 3.9 1c1.6 0 2.6-1.4 3.6-2.9 1.1-1.7 1.6-3.4 1.6-3.4-.1 0-3.1-1.2-3.1-4.7zM14.6 4.1c.8-1 1.4-2.4 1.2-3.7-1.2.1-2.6.8-3.5 1.8-.7.8-1.4 2.2-1.2 3.5 1.4.1 2.7-.6 3.5-1.6z"/>,
    windows: <g fill="currentColor"><path d="M2 4.5l9-1.3v9H2zM12 3l10-1.5v11.3H12zM2 13.5h9v9L2 21zM12 13.5h10V23l-10-1.5z"/></g>,
    play: <path fill="currentColor" d="M8 5v14l11-7z"/>,
    search: <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"><circle cx="11" cy="11" r="6"/><path d="m20 20-3.5-3.5"/></g>,
    book: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h12a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4H8a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h12z"/></g>,
    clock: <g stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></g>,
    box: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8L12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v9"/></g>,
    flask: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-10V3"/><path d="M7 14h10"/></g>,
    chip: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9zM2 9h2M2 15h2M20 9h2M20 15h2M9 2v2M15 2v2M9 20v2M15 20v2"/></g>,
    sigma: <path fill="currentColor" d="M6 4h12v2l-7 6 7 6v2H6v-2l7-6-7-6z"/>,
    atom: <g stroke="currentColor" strokeWidth="1.4" fill="none"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></g>,
    funnel: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18l-7 9v7l-4-2v-5z"/></g>,
    target: <g stroke="currentColor" strokeWidth="1.6" fill="none"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></g>,
    wave: <path d="M2 12c2-3 4-3 5 0s3 3 5 0 3-3 5 0 3 3 5 0" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>,
    network: <g stroke="currentColor" strokeWidth="1.5" fill="none"><circle cx="6" cy="6" r="2.5" fill="currentColor"/><circle cx="18" cy="6" r="2.5" fill="currentColor"/><circle cx="12" cy="18" r="2.5" fill="currentColor"/><path d="M7.5 7.5l3 8M16.5 7.5l-3 8M7 6h10"/></g>,
    scale: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"><path d="M12 3v18M5 8l7-4 7 4M3 12h4l-2 5h-2zM17 12h4l-2 5h-2zM3 17h4M17 17h4"/></g>,
    download: <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12M6 12l6 6 6-6M4 20h16"/></g>,
    external: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M21 3l-9 9M14 5h-9v14h14v-9"/></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }} {...rest}>
      {paths[name]}
    </svg>
  );
};

// ============================================================
// Molecule placeholder — abstract 3D protein with controls chrome
// Generated procedurally — looks like a molecular viewer screenshot,
// not a hand-drawn protein.
// ============================================================

const MoleculePlaceholder = ({ pdb = "PDB 4W52", live = true }) => {
  // Pre-computed atom positions (alpha-carbon backbone of a folded shape)
  // Using a deterministic spline so it looks protein-like without faking biology.
  const atoms = React.useMemo(() => {
    const points = [];
    const N = 90;
    for (let i = 0; i < N; i++) {
      const t = i / N;
      const angle = t * Math.PI * 6 + Math.sin(t * 12) * 0.6;
      const r = 30 + Math.sin(t * 7) * 18 + Math.cos(t * 3) * 8;
      const cx = 50 + Math.cos(angle) * r * 0.5;
      const cy = 50 + Math.sin(angle) * r * 0.5 + Math.cos(t * 5) * 8;
      const z = Math.sin(t * 8) * 20;
      points.push({ x: cx, y: cy, z, t });
    }
    return points;
  }, []);

  // Build ribbon segments grouped into helix/sheet "regions"
  const ribbonPath = React.useMemo(() => {
    return atoms.map((a, i) => (i === 0 ? `M ${a.x} ${a.y}` : `L ${a.x} ${a.y}`)).join(" ");
  }, [atoms]);

  // Helix highlights (a few continuous runs)
  const helixSegments = [
    { from: 8, to: 22, color: "#1f8a8c" },
    { from: 30, to: 44, color: "#2a9d8f" },
    { from: 52, to: 64, color: "#264653" },
    { from: 70, to: 84, color: "#1f8a8c" },
  ];

  return (
    <div className="viewer">
      <div className="viewer-bg" />
      <div className="viewer-protein">
        <svg viewBox="0 0 100 100" width="92%" height="92%" style={{ display: 'block' }}>
          <defs>
            <radialGradient id="atom-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2a9d8f" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2a9d8f" stopOpacity="0" />
            </radialGradient>
            <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.4" />
            </filter>
          </defs>

          {/* Surface glow */}
          <circle cx="50" cy="50" r="38" fill="url(#atom-glow)" />

          {/* Surface envelope (transparent protein surface) */}
          <ellipse cx="50" cy="50" rx="34" ry="30" fill="#2a9d8f" fillOpacity="0.06" stroke="#2a9d8f" strokeOpacity="0.18" strokeWidth="0.3" />
          <ellipse cx="48" cy="52" rx="28" ry="24" fill="#2a9d8f" fillOpacity="0.04" stroke="#2a9d8f" strokeOpacity="0.14" strokeWidth="0.2" transform="rotate(30 48 52)" />

          {/* Backbone trace */}
          <path d={ribbonPath} fill="none" stroke="#1f6660" strokeWidth="0.4" strokeOpacity="0.5" filter="url(#soft)" />

          {/* Helix segments */}
          {helixSegments.map((seg, i) => {
            const pts = atoms.slice(seg.from, seg.to);
            const path = pts.map((a, idx) => (idx === 0 ? `M ${a.x} ${a.y}` : `L ${a.x} ${a.y}`)).join(" ");
            return (
              <g key={i}>
                <path d={path} fill="none" stroke={seg.color} strokeWidth="2.4" strokeLinecap="round" opacity="0.85" />
                <path d={path} fill="none" stroke="#fff" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
              </g>
            );
          })}

          {/* Ligand atoms cluster — small molecule in binding pocket */}
          <g transform="translate(38, 56)">
            {[
              { x: 0, y: 0, r: 1.8, c: "#1a1a1a" },
              { x: 3, y: -1, r: 1.6, c: "#1a1a1a" },
              { x: 5, y: 1.5, r: 1.4, c: "#cc2222" },
              { x: 2, y: 2.5, r: 1.4, c: "#3366cc" },
              { x: -2, y: 1.8, r: 1.4, c: "#1a1a1a" },
              { x: -1, y: -2, r: 1.2, c: "#cc2222" },
            ].map((a, i) => (
              <g key={i}>
                <circle cx={a.x} cy={a.y} r={a.r * 0.9} fill="#fff" opacity="0.9" />
                <circle cx={a.x} cy={a.y} r={a.r * 0.7} fill={a.c} />
              </g>
            ))}
            {/* bonds */}
            <g stroke="#444" strokeWidth="0.4" opacity="0.7">
              <line x1="0" y1="0" x2="3" y2="-1" />
              <line x1="3" y1="-1" x2="5" y2="1.5" />
              <line x1="0" y1="0" x2="2" y2="2.5" />
              <line x1="0" y1="0" x2="-2" y2="1.8" />
              <line x1="0" y1="0" x2="-1" y2="-2" />
            </g>
          </g>
        </svg>
      </div>

      <div className="viewer-tag">
        {live && <span className="pulse" />}
        Mol* viewer
      </div>
      <div className="viewer-pdb">{pdb}</div>
      <div className="viewer-controls">
        <button title="Zoom in">+</button>
        <button title="Zoom out">−</button>
        <button title="Reset" style={{ fontSize: 11 }}>↻</button>
      </div>
      <div className="viewer-axes">
        <span>X</span><span>Y</span><span>Z</span>
      </div>
    </div>
  );
};

// ============================================================
// Pipeline animated diagram
// ============================================================

const PipelineDiagram = ({ data, density = "spacious" }) => {
  return (
    <div className="pipeline">
      {data.map((step, i) => (
        <div className="pipeline-step" key={i}>
          <div className="idx">STEP {String(i + 1).padStart(2, "0")}</div>
          <div className="ttl">{step.title}</div>
          <div className="desc">{step.desc}</div>
          {i < data.length - 1 && <div className="arrow" />}
        </div>
      ))}
    </div>
  );
};

// ============================================================
// Code block with copy button + syntax highlighting (lite)
// ============================================================

const CodeBlock = ({ tabs, label, copyText, children }) => {
  const [active, setActive] = React.useState(0);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const text = tabs ? tabs[active].copy : copyText || "";
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const content = tabs ? tabs[active].content : children;
  const showCopy = tabs ? !!tabs[active].copy : !!copyText;

  return (
    <div className="code-card">
      <div className="code-head">
        <div className="tabs-mini">
          {tabs ? tabs.map((t, i) => (
            <button key={i} className={i === active ? "active" : ""} onClick={() => setActive(i)}>
              {t.label}
            </button>
          )) : <span>{label || "shell"}</span>}
        </div>
        {showCopy && (
          <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={handleCopy}>
            <Icon name={copied ? "check" : "copy"} size={12} />
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>
      <div className="code-body">{content}</div>
    </div>
  );
};

// Render a command line with prompt
const Cmd = ({ children }) => (
  <span><span className="c-prompt">$</span>{children}</span>
);
const Comment = ({ children }) => <span className="c-comment">{children}</span>;
const Kw = ({ children }) => <span className="c-keyword">{children}</span>;
const Str = ({ children }) => <span className="c-string">{children}</span>;
const Fn = ({ children }) => <span className="c-fn">{children}</span>;

// ============================================================
// Brand mark
// ============================================================

const BrandMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="oklch(0.55 0.10 200)" />
        <stop offset="100%" stopColor="oklch(0.40 0.08 200)" />
      </linearGradient>
    </defs>
    <circle cx="6" cy="8" r="2.6" fill="url(#bm-g)" />
    <circle cx="18" cy="8" r="2.6" fill="url(#bm-g)" />
    <circle cx="12" cy="18" r="2.6" fill="url(#bm-g)" />
    <path d="M6 8 L12 18 L18 8 L6 8" stroke="oklch(0.40 0.08 200)" strokeWidth="1.2" fill="none" />
  </svg>
);

// Export to window
Object.assign(window, {
  Icon,
  MoleculePlaceholder,
  PipelineDiagram,
  CodeBlock,
  BrandMark,
  Cmd, Comment, Kw, Str, Fn,
});
