---
layout: page
sidebar: none
subheadline: Ligand-X Demo
title:  "Demo: Protein Structure Cleaning"
teaser: "Watch how Ligand-X automatically cleans and prepares raw PDB structures for simulation using PDBFixer."
breadcrumb: true
tags:
    - Ligand-X
    - Demo
    - PDBFixer
categories:
    - portfolio
image:
    thumb: cleaning_demo.jpeg
    title: cleaning_demo.jpeg
    caption: Cleaning Workflow
permalink: /portfolio/ligand-x/protein-cleaning-demo
header: no
---

### Video Walkthrough

<!-- YouTube video placeholder - replace VIDEO_ID with actual video ID -->
<div class="flex-video widescreen">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID_CLEANING" frameborder="0" allowfullscreen></iframe>
</div>

> **Coming Soon:** Video walkthrough demonstrating protein cleaning in Ligand-X.

---

### Data Flow Pipeline

When you submit a protein for cleaning, your data flows through these stages:

<div class="pipeline-stage">
    <h5>1. Structure Loading</h5>
    <ul>
        <li>Fetch from RCSB PDB or parse uploaded file</li>
        <li>Identify chains, residues, and heteroatoms</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>2. Component Analysis</h5>
    <ul>
        <li>Identify ligands, waters, ions, metals</li>
        <li>Classify each heteroatom group</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>3. Water/Ion Removal</h5>
    <ul>
        <li>Remove crystallographic waters (optional)</li>
        <li>Remove buffer ions (optional)</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>4. Missing Residue Repair</h5>
    <ul>
        <li>Identify missing residues from SEQRES</li>
        <li>Model missing loops using PDBFixer</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>5. Missing Atom Repair</h5>
    <ul>
        <li>Add missing heavy atoms</li>
        <li>Rebuild incomplete sidechains</li>
    </ul>
</div>

<div class="pipeline-stage">
    <h5>6. Hydrogen Addition</h5>
    <ul>
        <li>Add hydrogens at physiological pH (7.4)</li>
        <li>Assign protonation states</li>
    </ul>
</div>

<div class="pipeline-results">
    <h5>Results</h5>
    <ul>
        <li>Clean PDB file ready for simulation</li>
        <li>Report of modifications made</li>
        <li>Interactive 3D visualization (MolStar)</li>
        <li>Download options (PDB format)</li>
    </ul>
</div>

---

### Tools Used

| Stage | Tool | Purpose |
|-------|------|---------|
| **Fetching** | RCSB API | Download structures by PDB ID |
| **Parsing** | BioPython | Parse PDB format |
| **Cleaning** | PDBFixer | Comprehensive structure repair |
| **Analysis** | ComponentAnalyzer | Classify heteroatoms |
| **Visualization** | MolStar | Interactive 3D viewer |

---

### Workflow Steps

1. **Input Structure**: Enter a PDB ID (e.g., "1HSG") or upload a PDB file
2. **Review Components**: See identified ligands, waters, ions
3. **Select Options**: Choose what to remove/keep
4. **Clean Structure**: PDBFixer repairs and protonates
5. **Visualize**: Inspect cleaned structure in MolStar
6. **Download**: Export clean PDB for downstream analysis

---

### Common Issues Fixed

| Problem | Solution |
|---------|----------|
| Missing residues | Loop modeling from sequence |
| Missing atoms | Sidechain reconstruction |
| No hydrogens | pH-dependent protonation |
| Alternate conformations | Select highest occupancy |
| Non-standard residues | Convert to standard or parameterize |

---
<a href="/portfolio/ligand-x/" class="button radius secondary">← Back to Ligand-X</a>
<a href="/blog/protein-cleaning-theory" class="button radius">Learn the Theory →</a>

