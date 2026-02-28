---
layout: page
sidebar: none
subheadline: Biophysics simulation
title: "Molecular Dynamics: Physics-based simulation of biomolecules"
teaser: "Molecular Dynamics (MD) simulations allow us to study the physical movements of atoms and molecules, providing a view of the dynamic evolution of the system."
breadcrumb: true
tags:
- Molecular Dynamics
- Force Fields
- Theory
- Computational Biophysics
categories:
- blog
image:
    thumb: md.png
    title: md.png
permalink: /blog/molecular-dynamics-theory
header: no
---

### Beyond Static Structures

Structural biology has long relied on techniques like X-ray crystallography and cryo-EM to reveal protein structures. But these methods capture a single frozen snapshot. Proteins are not static sculptures: they are dynamic machines, and their function depends on how they move.

Molecular dynamics (MD) bridges this gap. Rather than a single structure, MD produces a trajectory — a time-ordered sequence of snapshots, typically saved every picosecond, showing where every atom is at each instant. Think of it as a molecular slow-motion film: each frame is a complete atomic configuration, and playing them in sequence reveals how the protein breathes, flexes, and responds to its environment. This lets us observe phenomena ranging from rapid hydrogen bond fluctuations to large-scale conformational changes linked to protein function.

### The Physics of Motion

MD is rooted in the Born-Oppenheimer approximation, which exploits the fact that electrons move roughly 1000× faster than nuclei. Because electrons relax to their ground state almost instantaneously on the timescale of nuclear motion, we can treat the electronic cloud as a static background potential and focus entirely on tracking the motion of the heavier nuclei. Each atom then obeys Newton's second law:

$$
m_i \frac{d^2\mathbf{r}_i(t)}{dt^2} = \mathbf{F}_i = -\nabla_i U(\mathbf{r}_1, \dots, \mathbf{r}_N)$$

The accuracy of the simulation depends entirely on the potential energy function ($U$), also called the force field, which encodes all interactions in the system.

### Force Fields

A force field approximates the total energy through two classes of interactions:

- Bonded terms ($U_{bond}$, $U_{angle}$, $U_{dihedral}$): Harmonic potentials that maintain equilibrium bond lengths and angles; periodic functions that describe rotational energy barriers
- Non-bonded interactions ($U_{vdW}$, $U_{electrostatic}$): Van der Waals interactions modelled by the Lennard-Jones potential (attractive at moderate distance, strongly repulsive at short range); electrostatics via Coulomb's Law using partial atomic charges

### Numerical Integration

Given a force field that returns the force on each atom, the next challenge is propagating the system forward in time. Because these equations have no analytical solution for systems of thousands of atoms, they must be solved numerically. The integrator advances the simulation one small time step (Δt) at a time — typically 1–2 femtoseconds — small enough to resolve the fastest molecular vibrations (e.g., O–H bond stretching at ~3500 cm⁻¹). Common algorithms include the Leap-Frog and Velocity Verlet integrators, both of which conserve energy with high accuracy over long simulations.

One important practical consideration is long-range electrostatics: direct summation of Coulombic interactions between all pairs of atoms would scale as $O(N^2)$, becoming prohibitive for large systems. Particle Mesh Ewald (PME) exploits the periodicity of the simulation box to compute electrostatics on a grid using fast Fourier transforms, reducing the cost to $O(N \log N)$ and making large-scale protein simulations tractable.

### Simulation Workflow

Getting reliable results requires careful preparation before the production run begins. Full details of system assembly are covered in the [protein cleaning post](/blog/protein-cleaning-theory); the key steps are:

1. System preparation: Clean the PDB structure, add missing hydrogens, assign topology
2. Solvation and ionization: Surround the protein with explicit water molecules and add counterions to reach physiological salt concentration and charge neutrality
3. Energy minimization: Relax high-energy steric clashes using algorithms like Steepest Descent, necessary to prevent the simulation from "exploding" due to atoms placed too close together
4. NVT equilibration: Heat the system to the target temperature at constant Number of particles, Volume, and Temperature
5. NPT equilibration: Stabilise density and pressure at constant Number of particles, Pressure, and Temperature before collecting production data

### Analyzing Trajectories

Once a trajectory is generated, several metrics characterize the system's behavior:

- RMSD (Root Mean Square Deviation): Measures global structural stability over time. An RMSD that rises sharply and never stabilises suggests the protein is undergoing large structural changes, while one that plateaus and fluctuates around a stable mean indicates the simulation has converged
- RMSF (Root Mean Square Fluctuation): Quantifies the flexibility of individual residues, averaged over the whole trajectory. High RMSF residues are mobile and often functionally important — they may form flexible binding loops or hinge regions
- Radius of Gyration ($R_g$): Measures molecular compactness; useful for studying protein folding or collapse

An important limitation of standard MD is timescale. A typical production simulation covers nanoseconds to microseconds on modern GPU hardware. Many biologically relevant events — protein folding, large domain rearrangements, slow conformational changes — occur on timescales of milliseconds or longer, which remains beyond the reach of standard MD without enhanced sampling techniques.

These descriptors form the foundation for downstream analyses. Beyond structural characterisation, MD trajectories provide the microscopic sampling that underpins the binding free energy calculations described in the [ABFE](/blog/abfe-theory) and [RBFE](/blog/rbfe-theory) posts.

### References

1. Karplus, M., & McCammon, J. A. (2002). Molecular dynamics simulations of biomolecules. *Nature Structural Biology*, 9(9), 646–652. [doi:10.1038/nsb0902-646](https://doi.org/10.1038/nsb0902-646)
2. Hollingsworth, S. A., & Dror, R. O. (2018). Molecular Dynamics Simulation for All. *Neuron*, 99(6), 1129–1143. [doi:10.1016/j.neuron.2018.08.011](https://doi.org/10.1016/j.neuron.2018.08.011)
3. Eastman, P., et al. (2017). OpenMM 7: Rapid development of high performance algorithms for molecular dynamics. *PLOS Computational Biology*, 13(7), e1005659. [doi:10.1371/journal.pcbi.1005659](https://doi.org/10.1371/journal.pcbi.1005659)
4. Jorgensen, W. L., Chandrasekhar, J., Madura, J. D., Impey, R. W., & Klein, M. L. (1983). Comparison of simple potential functions for simulating liquid water. *Journal of Chemical Physics*, 79(2), 926–935. [doi:10.1063/1.445869](https://doi.org/10.1063/1.445869)
5. Berendsen, H. J. C., Postma, J. P. M., van Gunsteren, W. F., DiNola, A., & Haak, J. R. (1984). Molecular dynamics with coupling to an external bath. *Journal of Chemical Physics*, 81(8), 3684–3690. [doi:10.1063/1.448118](https://doi.org/10.1063/1.448118)
6. van der Spoel, D., et al. (2005). GROMACS: Fast, flexible, and free. *Journal of Computational Chemistry*, 26(16), 1701–1718. [doi:10.1002/jcc.20291](https://doi.org/10.1002/jcc.20291)