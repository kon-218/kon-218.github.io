---
layout: page
sidebar: none
subheadline: Computational Drug Design
title: "Molecular Docking: Accelerating Lead Discovery with In Silico Tools"
teaser: "Drug-like chemical space contains an estimated $10^{60}$ molecules, which is far more than can ever be synthesised and tested feasibly. Molecular docking provides a quick in silico filter, screening millions of candidates in hours and returning a ranked shortlist that guides what chemists synthesise."
breadcrumb: true
tags:
- Molecular Docking
- Theory
- Structure-Based Drug Design
categories:
- blog
image:
    thumb: docking.png
    title: docking.png
permalink: /blog/molecular-docking-theory
header: no
---

### The Scale of Chemical Space

Finding a new drug begins with identifying a molecule, the ligand, that binds tightly and selectively to a disease-relevant protein target, the receptor. The receptor presents a specific cavity on its surface, the binding pocket or active site, whose shape and chemical environment determine which molecules fit and how tightly.

The challenge is one of scale. Estimates of drug-like chemical space range from $10^{60}$ to $10^{100}$ synthetically accessible molecules. Even high-throughput screening (HTS), the experimental gold standard, can realistically test only a few hundred thousand compounds per campaign, a vanishingly small fraction. Every compound that is synthesised and tested costs time and money so how do you decide which molecules are worth investigating in the first place?

Molecular docking provides chemists with a quick in silico filter. A single docking evaluation takes milliseconds on powerful GPU hardware, meaning a library of one million compounds can be screened in hours; returning a ranked shortlist that guides synthetic effort. This can compress years of exploratory chemistry into a prioritised queue that experimentalists can act on.

### What Docking is Measuring

For docking to be useful, its ranking must correlate with real binding strength. The physical quantity that governs whether a ligand binds is the Gibbs free energy of binding:

$$\Delta G_{bind} = \Delta H_{bind} - T\Delta S_{bind}$$

The enthalpic term ($\Delta H$) captures direct non-covalent interactions such as hydrogen bonds and van der Waals contacts; as well as electrostatic interactions. The entropic term ($-T\Delta S$) accounts for the loss of conformational freedom when a flexible ligand locks into the pocket, and the gain in entropy as ordered water molecules are expelled into bulk solvent.

This free energy has a directly measurable laboratory counterpart, the dissociation constant $K_d$:

$$K_d = e^{\Delta G_{bind} / RT}$$

At 298 K, a $\Delta G$ of −9 kcal/mol corresponds to a $K_d$ of roughly 200 nM — a moderately potent drug. Most approved drugs bind in the 1 nM–1 μM range. Docking scoring functions attempt to estimate this $\Delta G$, though with approximations that limit their absolute accuracy.

### Searching Conformational Space

Before a score can be assigned, the algorithm must find the best-fitting orientation, the pose, of the ligand in the pocket. For a flexible ligand with many rotatable bonds and six degrees of translational and rotational freedom, the number of possible poses is enormous. Several search strategies make this tractable:

- Genetic Algorithms: Used by tools like AutoDock 4, these evolve a population of candidate poses through "crossover" and "mutation" operators, analogous to biological evolution, until high-affinity configurations emerge
- Incremental Construction: The molecule is fragmented, each piece is docked into sub-pockets, and fragments are reassembled, efficiently exploring the combinatorial space
- Protein Flexibility: Early "lock and key" models treated the receptor as rigid. Modern approaches allow side-chain movement and, in induced-fit protocols, backbone rearrangement. This better reflects the reality that binding often reshapes the pocket around the ligand

### Scoring Functions

Once a pose is generated, a scoring function ranks it. This is the core computational challenge: a function fast enough to evaluate millions of poses must still correlate with binding affinity. Functions fall into three families:

1. Physics-based: Use classical mechanics (van der Waals and Coulombic potentials) to estimate interaction energies directly
2. Empirical: Express affinity as a weighted sum of hydrogen bonds, hydrophobic contacts, and rotatable bond penalties, with weights trained by regression against experimental binding data
3. Machine learning: Learn preferred interaction geometries from the PDB, or use deep learning (e.g., GNINA) to predict affinity from raw atomic coordinates without hand-crafted energy terms

### Virtual Screening in Practice

The full virtual screening workflow has three phases:

1. Preparation: Clean the receptor structure, assign protonation states, define the search box around the binding pocket. Prepare each ligand: convert SMILES to a 3D model, enumerate tautomers, assign charges.
2. Docking: Run the pose search and scoring for every compound in the library; rank by score
3. Validation: Before trusting a screen, re-dock ligands with known crystal structures. Tools like AutoDock Vina achieve ~80% success at reproducing the native pose (RMSD ≤ 2.0 Å), establishing that the protocol is working before real predictions are made

The key metric for evaluating a virtual screen is the Enrichment Factor (EF): the ratio of known actives recovered in the top-ranked fraction of results relative to random chance. An EF of 10 at 1% of the library means docking found 10× more active compounds in the top 1% than random selection would, a meaningful compression of chemical space required to explore experimentally.

### Limitations of docking

Docking's ability to rapidly produce results comes at a cost, it is good for casting a wide net but should not be used for precise ranking of compounds. Scoring functions make significant approximations: entropic contributions are simplified, protein flexibility is often neglected, and solvation effects are difficult to capture. Scores correlate imperfectly with experimental affinities and rankings can be misleading for structurally diverse compound sets.

The correct perspective is to use docking as a filter, not a measurement. It narrows a library of millions to a tractable shortlist of hundreds, but it does not replace experimental binding assays. For rigorous affinity ranking of the shortlist, the physics-based methods described in the [ABFE](/blog/abfe-theory) and [RBFE](/blog/rbfe-theory) posts provide much higher accuracy at greater computational cost.

### References

1. Trott, O., & Olson, A. J. (2010). AutoDock Vina: Improving the speed and accuracy of docking with a new scoring function, efficient optimization, and multithreading. *Journal of Computational Chemistry*, 31(2), 455–461. [doi:10.1002/jcc.21334](https://doi.org/10.1002/jcc.21334)
2. Morris, G. M., et al. (2009). AutoDock4 and AutoDockTools4: Automated docking with selective receptor flexibility. *Journal of Computational Chemistry*, 30(16), 2785–2791. [doi:10.1002/jcc.21256](https://doi.org/10.1002/jcc.21256)
3. McNutt, A. T., et al. (2021). GNINA 1.0: molecular docking with deep learning. *Journal of Cheminformatics*, 13, 43. [doi:10.1186/s13321-021-00522-2](https://doi.org/10.1186/s13321-021-00522-2)
4. Li, Y., et al. (2014). Comparative Assessment of Scoring Functions on an Updated Benchmark: 2. Evaluation Methods and General Results. *Journal of Chemical Information and Modeling*, 54(6), 1717–1736. [doi:10.1021/ci500081m](https://doi.org/10.1021/ci500081m)
5. Shoichet, B. K. (2004). Virtual screening of chemical libraries. *Nature*, 432(7019), 862–865. [doi:10.1038/nature03197](https://doi.org/10.1038/nature03197)
6. Friesner, R. A., et al. (2004). Glide: A New Approach for Rapid, Accurate Docking and Scoring. 1. Method and Assessment of Docking Accuracy. *Journal of Medicinal Chemistry*, 47(7), 1739–1749. [doi:10.1021/jm0306430](https://doi.org/10.1021/jm0306430)