---
layout: page
sidebar: none
subheadline: Ligand-X Demo
title:  "Demo: Quantum Chemistry"
teaser: "Perform advanced DFT calculations on ligands to compute electronic properties, optimize geometries, and generate accurate partial charges."
breadcrumb: true
tags:
    - Ligand-X
    - Demo
    - Psi4
    - DFT
categories:
    - portfolio
image:
    thumb: qc.png
    title: qc.png
    caption: QM Workflow
permalink: /portfolio/ligand-x/quantum-chemistry-demo
header: no
---

### Video Walkthrough

<!-- YouTube video placeholder - replace VIDEO_ID with actual video ID -->
<div class="flex-video widescreen">
    <iframe src="https://www.youtube.com/embed/hUWTSDUAag4" frameborder="0" allowfullscreen></iframe>
</div>

> **Coming Soon:** Video walkthrough demonstrating quantum chemistry calculations in Ligand-X.

---

### Data Flow Pipeline

When you submit a quantum chemistry calculation, your data flows through these stages:

<div class="pipeline-stage">
    <h5>1. Molecule Preparation (0–10%)</h5>
    <ul>
        <li>Parse SDF/MOL structure</li>
        <li>Add hydrogens if missing</li>
        <li>Convert to Psi4 molecule format</li>
        <li>Set charge and multiplicity</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>2. Geometry Optimization (10–60%)</h5>
    <ul>
        <li>Initial single-point energy</li>
        <li>DFT optimization (B3LYP/6-31G*)</li>
        <li>Convergence criteria check</li>
        <li>Final optimized geometry</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>3. Property Calculation (60–90%)</h5>
    <ul>
        <li>Single-point at optimized geometry</li>
        <li>Compute molecular orbitals (HOMO/LUMO)</li>
        <li>Calculate dipole moment</li>
        <li>Generate electrostatic potential</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>4. Charge Analysis (90–100%)</h5>
    <ul>
        <li>Mulliken population analysis</li>
        <li>RESP charge fitting (optional)</li>
        <li>Export partial charges</li>
    </ul>
</div>

<div class="pipeline-results">
    <h5>Results</h5>
    <ul>
        <li>Optimized geometry (XYZ, SDF)</li>
        <li>HOMO-LUMO energies and gap</li>
        <li>Dipole moment (Debye)</li>
        <li>Partial charges per atom</li>
        <li>Total energy (Hartree)</li>
        <li>Orbital visualization</li>
    </ul>
</div>

---

### Tools Used

| Stage | Tool | Purpose |
|-------|------|---------|
| **Parsing** | RDKit ORCA-parser | Molecule parsing, format conversion |
| **QM Engine** | ORCA | DFT calculations |
| **Analysis** | Python | Post-processing of results |

---

### Workflow Steps

1. **Upload Ligand**: Provide SDF file or draw with Ketcher
2. **Select Method**: Choose DFT functional and basis set
3. **Configure Options**: Optimization, properties, charges
4. **Submit Job**: Calculation runs on QC worker
5. **Monitor Progress**: Watch optimization converge
6. **View Results**: Inspect orbitals, charges, properties

---

### Calculation Options

| Option | Description |
|--------|-------------|
| **Method** | DFT functional |
| **Basis Set** | Atomic orbital basis |
| **Geometry Optimization** | Find minimum energy structure |
| **Single Point** | Energy at fixed geometry |
| **HOMO-LUMO** | Frontier orbital energies |
| **Dipole Moment** | Molecular polarity |
| **Partial Charges** | Atomic charge distribution |
| **ESP Surface** | Electrostatic potential map |

---

### Common Methods

| Method | Description | Use Case |
|--------|-------------|----------|
| **B3LYP/6-31G*** | Standard DFT | General purpose |
| **ωB97X-D/def2-SVP** | Dispersion-corrected | Non-covalent interactions |
| **HF/STO-3G** | Minimal basis HF | Quick estimates |

---

### Output Properties

| Property | Units | Description |
|----------|-------|-------------|
| Total Energy | Hartree | Electronic + nuclear energy |
| HOMO | eV | Highest occupied orbital |
| LUMO | eV | Lowest unoccupied orbital |
| HOMO-LUMO Gap | eV | Reactivity indicator |
| Dipole Moment | Debye | Molecular polarity |

---
<a href="/portfolio/ligand-x/" class="button radius secondary">← Back to Ligand-X</a>
<a href="/blog/quantum-chemistry-theory" class="button radius">Learn the Theory →</a>

