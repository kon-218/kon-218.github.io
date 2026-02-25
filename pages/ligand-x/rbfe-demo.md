---
layout: page
sidebar: none
subheadline: Ligand-X Demo
title:  "Demo: Relative Binding Free Energy (RBFE)"
teaser: "See how Ligand-X compares binding affinities across a series of ligands using network-based alchemical calculations."
breadcrumb: true
tags:
    - Ligand-X
    - RBFE
    - Demo
categories:
    - portfolio
image:
    thumb: rbfe.png
    title: rbfe.png
    caption: RBFE Network Workflow
permalink: /portfolio/ligand-x/rbfe-demo
header: no
---

### Video Walkthrough

<!-- YouTube video placeholder - replace VIDEO_ID with actual video ID -->
<div class="flex-video widescreen">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID_RBFE" frameborder="0" allowfullscreen></iframe>
</div>

> **Coming Soon:** Video walkthrough demonstrating the complete RBFE workflow in Ligand-X.

---

### Data Flow Pipeline

When you submit an RBFE calculation, your data flows through these stages:

<div class="pipeline-stage">
    <h5>1. Ligand Preparation</h5>
    <ul>
        <li>Parse SDF files, add hydrogens</li>
        <li>Assign AM1-BCC charges using RDKit</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>2. Ligand Alignment</h5>
    <ul>
        <li>3D alignment using Kartograf atom mapper</li>
        <li>Compute RMSD to reference structure</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>3. Network Planning</h5>
    <ul>
        <li>Build transformation graph (MST/Radial/Maximal)</li>
        <li>Score edges using LOMAP</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>4. Optional: Docking Validation</h5>
    <ul>
        <li>Validate ligand poses via AutoDock Vina</li>
        <li>User confirms poses before proceeding</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>5. Alchemical Transformations</h5>
    <ul>
        <li>For each edge in network: create hybrid topology (OpenFE)</li>
        <li>Run complex leg (protein + ligand)</li>
        <li>Run solvent leg (ligand in water)</li>
        <li>Compute ΔΔG using MBAR</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>6. MLE Analysis</h5>
    <ul>
        <li>Maximum Likelihood Estimation to convert relative ΔΔG values to absolute rankings</li>
    </ul>
</div>

<div class="pipeline-results">
    <h5>Results</h5>
    <ul>
        <li>Network graph with ΔΔG for each transformation</li>
        <li>Ranked ligand list with relative binding affinities</li>
        <li>Uncertainty estimates for each value</li>
        <li>Alignment data and atom mapping visualizations</li>
    </ul>
</div>

---

### Tools Used

| Stage | Tool | Purpose |
|-------|------|---------|
| **Ligand Prep** | RDKit | Molecule parsing, hydrogen addition |
| **Charges** | Antechamber (AM1-BCC) | Partial charge assignment |
| **Atom Mapping** | Kartograf | 3D-aware atom mapping |
| **Network** | LOMAP | Scoring transformations |
| **Simulation** | OpenMM | GPU-accelerated MD |
| **Free Energy** | OpenFE | Alchemical RBFE protocol|
| **Analysis** | PyMBAR | Optimal free energy estimation |

---

### Example Output

After calculation completes, you'll see:

- **Network Viewer**: Interactive graph showing all ligand transformations
- **Ranked List**: Ligands sorted by predicted binding affinity
- **Uncertainty**: Error bars showing confidence in each prediction
- **Convergence**: Plots showing how estimates stabilized over simulation time

---
<a href="/portfolio/ligand-x/" class="button radius secondary">← Back to Ligand-X</a>
<a href="/blog/rbfe-theory" class="button radius">Learn the Theory →</a>

