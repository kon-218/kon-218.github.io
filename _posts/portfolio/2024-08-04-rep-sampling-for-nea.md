---
layout: page
sidebar: right
sidebar_content: "_sidebar_nea.html"
subheadline: Data Science
title:  "Representative Samping for the Nuclear Ensemble Approach"
teaser: "The Nuclear Ensemble Method allows for exploring UV vis spectroscopy properties of small molecules accurately, however, it suffers from high computational burden due to large ensemble sizes, which become increasingly limiting with larger, more complex organic compounds. As such, methods for reducing intensity of calculations have been proposed. The Representative sampling method, aiming to reduce the subset while maintaining a high quality spectrum, was implemented as an automated workflow using Python."
breadcrumb: true
tags:
    - Python
    - Bash
    - Quantum Chemistry
categories:
    - projects
image:
    thumb: b.png
    title: b.png
    caption: ACS Earth & Space Chemistry
    caption_url: https://pubs.acs.org/toc/aesccq/6/1
permalink: /portfolio/rep-sampling-for-nea/
header: no
---

<img src="../../images/a.png">

Masters thesis project at the University of Bristol <a href="https://in-silico-photochem.com/">InSilicoPhotochemistry</a> group

<h3>Project Objectives</h3>

The primary aim of this thesis was to implement optimal sampling of a representative nuclear ensemble using simulated annealing within the Atmospec workchain. This approach seeks to provide a fast and efficient method for exploring the photoabsorption cross-sections of gas-phase Volatile Organic Compounds.

<h3>Background</h3>

<h5>Photoabsorption Cross-Sections:</h5> 

Photoabsorption cross-sections are fundamental parameters that quantify the likelihood of a photon being absorbed by a molecule. They play a crucial role in atmospheric chemistry and photochemistry. They help us understand how volatile organic compounds (VOCs) interact with light, which is essential for modeling atmospheric processes, predicting the behavior of pollutants, and assessing their impact on climate and air quality.

<h5>Challenges in Calculation:</h5> 

The traditional methods for calculating photoabsorption cross-sections often rely on quantum mechanical approaches, which can be computationally intensive. These methods typically require the evaluation of a large number of nuclear geometries to capture the full range of molecular conformations that contribute to the absorption spectrum. As the complexity of the molecule increases, the number of required calculations can grow exponentially, making it computationally prohibitive to obtain accurate results for larger or more complex VOCs.

The Nuclear Ensemble Approach is a powerful technique that allows for the consideration of multiple nuclear configurations simultaneously. By averaging over a large ensemble of molecular geometries, this method can provide a more accurate representation of the system's behavior. However, the requirement for thousands of nuclear geometries poses significant challenges in terms of computational resources and time, particularly for complex molecules.

<h5>Representative Sampling:</h5>

Representative sampling aims to reduce the number of nuclear geometries needed in an ensemble to reduce the computational burden of photoabsorption cross-section calculations. It runs an initial exploratory calculation using a large ensemble (> 1000), then iteratively reduces the ensemble size using Simulated Annealing and Kullbeck-Leibler divergence algorithms. The overall aim is the minimize the number of geometries while retaining the most information within the ensemble as possible.

<h3>Results</h3>

Representative sampling method within the Nuclear Ensemble Approach was successfully implemented in an automated python workflow. 

<ul>
<li>Significantly reduced computational burden associated with photoabsorption cross-section calculation. This allows for the efficient exploration of larger and more complex molecules.</li>
<li>Spectra calculated using reduced ensemble effectively capture the essential features of the photoabsorption cross-sections.</li>
<li>Demonstrated robustness across multiple Volatile Organic Compounds.</li>
</ul>

Next steps include integrating the sampling method into applications such as Atmospec, to allow more scientists to openly use representative sampling. 
<!--more-->

<br>
<div class="widget-grid">
  <div class="widget">
    <img src="../../images/report_repsample.png" alt="Read my thesis" class="widget-image" />
    <h3>Read my thesis</h3>
    <p>The Efficient Calcultion of Absorption cross-sections for Volatile Organic Compounds.</p>
    <a href="thesis-report" class="call-to-action">Read Report</a>
  </div>

  <div class="widget">
    <a href="https://github.com/kon-218/LaunchNEM" target="_blank">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style="width:40px; height:40px;">
</a>

    <h3>See the Code</h3>
  </div>
</div>

<h3>Other Projects</h3>
{% include list-posts category='projects' %}
