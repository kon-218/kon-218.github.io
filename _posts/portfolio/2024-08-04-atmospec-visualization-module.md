---
layout: page
sidebar: right
sidebar_content: "_sidebar_atmospec.html"
subheadline: Data Visualization
title:  "Atmospec Visualization Module"
teaser: "An interactive data visualization module, allowing for the exploration of photolysis properties in Atmospec. The photolysis rate constant was calculated using dynamic inputs from the user, and the graph is updated in real-time, allowing for researchers to interact with their results, and explore changes in data."
breadcrumb: true
tags:
    - Atmospec
    - iPyWidgets
    - Data Visualization
    - Docker 
    - Git
    - Python
categories:
    - projects
image:
    thumb: atmospecvis.png
    title: atmospecvis.png
    caption: AtmoSpec application
permalink: /portfolio/atmospec-data-visualization-module/
header: no
---

<h3>Project Objectives</h3>

The primary aim of this project was to design and integrate a module for the visualization of photolysis rate data, obtained through the AtmoSpec application. This module would allow the user to dynamically visualize additional results from their Quantum Chemistry calculations. The Atmospec application was distributed using a docker container, and presented as a jupyter web application. The module was directly integrated into the results page.

<h3>Background</h3>

<h5>Atmospec:</h5>
Atmospec is an application developed for atmospheric researchers as a tool for the calculation of photo absorption cross-sections. It provides a simplified, automated workflow;  with an integrated database, a graphical user interface, and the capability to run quantum mechanical calculations. This allows academics with limited computational chemistry knowledge to leverage the most recent advances in the field, with little barrier for entry. While Atmospec showed a calculated photoabsorption cross-section, it gave no information about the photolysis rate, although the data was readily available.

For more information on AtmoSpec, check out this blog post!

<h5>Photolysis rate:</h5>

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <math xmlns="http://www.w3.org/1998/Math/MathML" style="font-size: 1.5em;">

    <mrow>
      <mi>J</mi>
      <mo>=</mo>
      <msubsup>
        <mo style="font-size: 1.5em;">∫</mo>
        <mrow>
          <mi>λ</mi>
          <mo>min</mo>
        </mrow>
        <mrow>
          <mi>λ</mi>
          <mo>max</mo>
        </mrow>
      </msubsup>
      <mrow>
        <mi>F</mi>
        <mo>(</mo>
        <mi>λ</mi>
        <mo>)</mo>
        <mo>&#8290;</mo> <!-- Invisible times -->
        <mi>σ</mi>
        <mo>(</mo>
        <mi>λ</mi>
        <mo>)</mo>
        <mo>&#8290;</mo> <!-- Invisible times -->
        <mi>Φ</mi>
        <mo>(</mo>
        <mi>λ</mi>
        <mo>)</mo>
        <mo>&#8290;</mo> <!-- Invisible times -->
        <mi>d</mi>
        <mi>λ</mi>
      </mrow>
    </mrow>
    
  </math>
</div>

The photolysis rate is an extremely important quantity for atmospheric chemists, as it can help scientists understand and predict the photochemical reactivities and lifetimes of Volatile Organic Compounds (VOCs). The investigation of such properties informs chemical models, such as the Master Chemical Mechanicsm, allowing us to better predict and model the atmospheric composition. The equation above illustrates the calculation of photolysis rate. It is an integral over the product of F (Actinic lux), σ (Photoabsorption cross-section), and Φ (Quantum yield). This can be thought of as the number of photons available at a certain wavelength, multiplied by the likelihood that the molecule absorbs at that wavelength, adjusted for the quantum efficiency of the process.

Since AtmoSpec produced the absorption cross section, our task was to compile the necessary actinic flux and quantum yield data, calculate the photolysis rate, and present this as an integrated module within the AtmoSpec application.

<h3>Results</h3>

Collaborated with a team of four to design and integrate the photolysis rate visualization module into the AtmoSpec application. Key results include:

<ul>
<li>Liased with application users to understand the widget requirements</li>
<li>Developed an interactive data visualization module for a web based jupyter application using Bokeh, iPyWidgets, and numpy</li>
<li>Responsible for the integration of the calculation module, using a Linux environment and Docker.</li>
</ul>

<div class="widget-grid">
  <div class="widget">
    <img src="../../images/report_atmospec.png" alt="Read the Report" class="widget-image" />
    <h3>Read the Report</h3>
    <p>Access the detailed report for insights.</p>
    <a href="atmospec-report" class="call-to-action">Read Report</a>
  </div>

  <div class="widget">
    <a href="https://github.com/ispg-group/aiidalab-ispg/" target="_blank">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style="width:40px; height:40px;">
</a>
    <h3>See the Code</h3>
  </div>
</div>

<h3>Other Projects</h3>
{: .t60 }
{% include list-posts category='projects' %}
