---
layout: page
sidebar: none
subheadline: Ligand-X Demo
title:  "Demo: Absolute Binding Free Energy (ABFE)"
teaser: "See how Ligand-X calculates the exact binding affinity of a single ligand to a protein target using rigorous alchemical methods."
breadcrumb: true
tags:
    - Ligand-X
    - ABFE
    - Demo
categories:
    - portfolio
image:
    thumb: abfe.png
    title: abfe.png
    caption: ABFE Calculation Workflow
permalink: /portfolio/ligand-x/abfe-demo
header: no
---

### Video Walkthrough

<!-- YouTube video placeholder - replace VIDEO_ID with actual video ID -->
<div class="flex-video widescreen">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID_ABFE" frameborder="0" allowfullscreen></iframe>
</div>

> **Coming Soon:** Video walkthrough demonstrating the complete ABFE workflow in Ligand-X.

---

### Data Flow Pipeline

When you submit an ABFE calculation, your data flows through these stages:

<div class="pipeline-stage">
    <h5>1. Ligand Preparation</h5>
    <ul>
        <li>Parse SDF/SMILES, add hydrogens</li>
        <li>Assign AM1-BCC partial charges</li>
        <li>Create OpenFE SmallMoleculeComponent</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>2. Protein Preparation</h5>
    <ul>
        <li>Parse PDB, clean structure</li>
        <li>Create OpenFE ProteinComponent</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>3. Protocol Setup</h5>
    <ul>
        <li>Configure AbsoluteBindingProtocol</li>
        <li>Set lambda windows (typically 11–20)</li>
        <li>Configure HREX parameters</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>4. Complex Leg</h5>
    <ul>
        <li>Ligand bound to protein</li>
        <li>Gradually "turn off" ligand interactions</li>
        <li>Run HREX across lambda windows</li>
        <li>Compute ΔG_complex</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>5. Solvent Leg</h5>
    <ul>
        <li>Ligand in water box</li>
        <li>Gradually "turn off" ligand interactions</li>
        <li>Run HREX across lambda windows</li>
        <li>Compute ΔG_solvent</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>6. Thermodynamic Cycle</h5>
    <ul>
        <li>ΔG_binding = ΔG_complex − ΔG_solvent</li>
        <li>MBAR analysis for optimal estimate</li>
        <li>Error propagation for uncertainty</li>
    </ul>
</div>

<div class="pipeline-results">
    <h5>Results</h5>
    <ul>
        <li>ΔG binding free energy (kcal/mol)</li>
        <li>Statistical uncertainty</li>
        <li>Overlap matrices showing sampling quality</li>
        <li>Convergence plots over simulation time</li>
        <li>Replica exchange statistics</li>
    </ul>
</div>

---

### The Two-Leg Calculation

ABFE uses a thermodynamic cycle with two parallel simulations:

<div style="text-align: center;">
  <img src="/images/diagram_abfe.png" alt="Image Description" style="width: 400px;">
  <p style="text-align: center; font-style: italic;">Figure 1: Thermodynamic cycle for ABFE calculations</p>
  <!-- reference: https://www.nature.com/articles/s41589-021-00836-4 -->
</div>

---

### Tools Used

| Stage | Tool | Purpose |
|-------|------|---------|
| **Ligand Prep** | RDKit | Molecule parsing, 3D generation |
| **Charges** | AM1-BCC | Partial charge assignment |
| **Protein Prep** | PDBFixer | Structure cleaning |
| **Simulation** | OpenMM | GPU-accelerated MD |
| **Free Energy** | OpenFE | AbsoluteBindingProtocol |
| **Sampling** | HREX | Hamiltonian Replica Exchange |
| **Analysis** | MBAR | Multistate Bennett Acceptance Ratio |

---

### Example Output

After calculation completes, you'll see:

- **Binding Free Energy**: ΔG in kcal/mol with error estimate
- **Overlap Matrices**: Heatmaps showing sampling quality between λ windows
- **Convergence Plot**: How the ΔG estimate stabilized over time
- **Replica Exchange Stats**: Acceptance rates for configuration swaps
- **Thermodynamic Breakdown**: Individual leg contributions

---

### Protocol Settings

| Parameter | Default | Description |
|-----------|---------|-------------|
| `simulation_time_ns` | 5.0 | Production simulation per replica |
| `n_lambda_windows` | 11 | Number of alchemical states |
| `equilibration_length_ns` | 1.0 | Equilibration time per replica |
| `n_replicas` | 11 | Number of HREX replicas |

---
<a href="/portfolio/ligand-x/" class="button radius secondary">← Back to Ligand-X</a>
<a href="/blog/abfe-theory" class="button radius">Learn the Theory →</a>