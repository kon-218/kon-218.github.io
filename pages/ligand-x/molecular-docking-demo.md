---
layout: page
sidebar: none
subheadline: Ligand-X Demo
title:  "Demo: Molecular Docking"
teaser: "See Ligand-X executing molecular docking with AutoDock Vina to predict ligand binding poses and affinities."
breadcrumb: true
tags:
    - Ligand-X
    - Demo
    - AutoDock Vina
categories:
    - portfolio
image:
    thumb: docking.png
    title: docking.png
permalink: /portfolio/ligand-x/molecular-docking-demo
header: no
---

### Video Walkthrough

<div class="flex-video widescreen">
    <iframe src="https://www.youtube.com/embed/JQo8EczUMAE" frameborder="0" allowfullscreen></iframe>
</div>

> **Docking:** Rapid screening for binding poses and affinities.

---

### Data Flow Pipeline

When you submit a docking job, your data flows through these stages:

<div class="pipeline-stage">
    <h5>1. Receptor Preparation</h5>
    <ul>
        <li>Parse PDB structure</li>
        <li>Remove waters/ions (optional)</li>
        <li>Add polar hydrogens</li>
        <li>Convert to PDBQT format (Meeko)</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>2. Ligand Preparation</h5>
    <ul>
        <li>Parse SDF/MOL/SMILES</li>
        <li>Add hydrogens, generate 3D if needed</li>
        <li>Assign Gasteiger charges</li>
        <li>Detect rotatable bonds</li>
        <li>Convert to PDBQT format</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>3. Grid Box Definition</h5>
    <ul>
        <li>Define search space in binding site</li>
        <li>Center coordinates (x, y, z)</li>
        <li>Box dimensions (default: 20×20×20 Å)</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>4. Docking Execution</h5>
    <ul>
        <li>AutoDock Vina search algorithm</li>
        <li>Explore conformational space</li>
        <li>Score poses with Vina scoring function</li>
        <li>Generate ranked pose library</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>5. Pose Conversion</h5>
    <ul>
        <li>Convert PDBQT → SDF (preserves bonds)</li>
        <li>Convert PDBQT → PDB (for MolStar)</li>
    </ul>
</div>

<div class="pipeline-results">
    <h5>Results</h5>
    <ul>
        <li>Ranked poses with relative binding scores</li>
        <li>3D visualization of each pose (MolStar)</li>
        <li>RMSD values between poses</li>
        <li>Download options (PDB, SDF, PDBQT)</li>
    </ul>
</div>

---

### Tools Used

| Stage | Tool | Purpose |
|-------|------|---------|
| **Receptor Prep** | Meeko | Modern PDBQT preparation |
| **Ligand Prep** | RDKit | Molecule parsing, 3D generation |
| **Format Conversion** | OpenBabel, Meeko | PDBQT ↔ SDF/PDB |
| **Docking** | AutoDock Vina | Pose prediction and scoring |
| **Visualization** | MolStar | Interactive 3D viewer |

---

### Docking Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `exhaustiveness` | 32 | Search thoroughness (higher = slower, better) |
| `num_modes` | 10 | Maximum poses to return |
| `energy_range` | 100.0 | Energy range for poses (kcal/mol) |
| `scoring` | vina | Scoring function (vina, ad4, vinardo) |

---
<a href="/portfolio/ligand-x/" class="button radius secondary">← Back to Ligand-X</a>
<a href="/blog/molecular-docking-theory" class="button radius">Learn the Theory →</a>

