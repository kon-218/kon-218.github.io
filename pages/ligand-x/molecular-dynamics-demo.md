---
layout: page
sidebar: none
subheadline: Ligand-X Demo
title:  "Demo: Molecular Dynamics"
teaser: "Experience the ease of setting up and running GPU-accelerated MD simulations with OpenMM in Ligand-X."
breadcrumb: true
tags:
    - Ligand-X
    - Demo
    - OpenMM
categories:
    - portfolio
image:
    thumb: md.png
    title: md.png
permalink: /portfolio/ligand-x/molecular-dynamics-demo
header: no
---

### Video Walkthrough

<div class="flex-video widescreen">
    <iframe src="https://www.youtube.com/embed/NhV21Gl4pvs" frameborder="0" allowfullscreen></iframe>
</div>

> **Look at them wiggle!** Video walkthrough demonstrating MD simulation setup and execution from a PDB ID using Ligand-X.

---

### Data Flow Pipeline

When you submit an MD optimization job, your data flows through these stages:

<div class="pipeline-stage">
    <h5>1. Ligand Processing</h5>
    <ul>
        <li>Parse SDF/SMILES ligand</li>
        <li>Generate 3D coordinates if needed</li>
        <li>Assign AM1-BCC partial charges</li>
        <li>Generate GAFF2/OpenFF force field parameters</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>2. System Building</h5>
    <ul>
        <li>Load and clean protein (PDBFixer)</li>
        <li>Combine protein and ligand</li>
        <li>Add TIP3P water box (1.0 nm padding)</li>
        <li>Add ions (neutralize + 0.15 M ionic strength)</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>3. Energy Minimization</h5>
    <ul>
        <li>Steepest descent minimization</li>
        <li>Remove steric clashes</li>
        <li>Converge to local energy minimum</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>4. NVT Equilibration</h5>
    <ul>
        <li>Gradually heat system to 300 K</li>
        <li>Velocity rescaling thermostat</li>
        <li>Protein backbone restraints</li>
        <li>25,000 steps (50 ps)</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>5. NPT Equilibration</h5>
    <ul>
        <li>Monte Carlo barostat (1 bar)</li>
        <li>Equilibrate box volume and density</li>
        <li>Release restraints gradually</li>
        <li>25,000 steps (50 ps)</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>6. Output Generation</h5>
    <ul>
        <li>Extract final equilibrated coordinates</li>
        <li>Write PDB files for each stage</li>
        <li>Generate trajectory summary</li>
    </ul>
</div>

<div class="pipeline-results">
    <h5>Results</h5>
    <ul>
        <li>Equilibrated PDB structure</li>
        <li>Energy plots (potential, kinetic, total)</li>
        <li>System info (atoms, waters, ions, box size)</li>
        <li>Trajectory file (DCD format, if production run)</li>
        <li>Download options for all output files</li>
    </ul>
</div>

---

### Tools Used

| Stage | Tool | Purpose |
|-------|------|---------|
| **Ligand Prep** | RDKit | Molecule parsing, 3D generation |
| **Charges** | AmberTools | AM1-BCC charge assignment |
| **Force Fields** | OpenMMForceFields | GAFF2, OpenFF parameters |
| **Protein Prep** | PDBFixer | Structure cleaning |
| **Simulation** | OpenMM | GPU-accelerated MD engine |
| **Water Model** | TIP3P | Explicit water solvation |

---

### Default Simulation Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `temperature` | 300 K | Target temperature |
| `pressure` | 1.0 bar | Target pressure |
| `ionic_strength` | 0.15 M | Salt concentration |
| `min_steps` | 1000 | Minimization steps |
| `nvt_steps` | 25000 | NVT equilibration (50 ps) |
| `npt_steps` | 25000 | NPT equilibration (50 ps) |
| `protein_ff` | amber14-all | Protein force field |
| `ligand_ff` | gaff-2.11 | Ligand force field |

---

### Output Files

| File | Description |
|------|-------------|
| `minimized.pdb` | After energy minimization |
| `nvt_equilibrated.pdb` | After NVT equilibration |
| `npt_equilibrated.pdb` | After NPT equilibration |
| `final.pdb` | Final equilibrated structure |
| `trajectory.dcd` | Trajectory (if production run) |

---
<a href="/portfolio/ligand-x/" class="button radius secondary">← Back to Ligand-X</a>
<a href="/blog/molecular-dynamics-theory" class="button radius">Learn the Theory →</a>

