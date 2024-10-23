---
layout: page
sidebar: right
subheadline: Computational Chemistry
title:  "Predicting molecular properties: Solubility"
teaser: "Save the tedious lab work!"
breadcrumb: true
tags:
    - Solubility
    - Computational Chemistry
    - QSAR
    - Machine Learning
    - Graph Convolutional Networks
    - Python
categories:
    - blog
image:
    thumb: solubility.png
    title: solubility.png
    caption: A Data Science approach
permalink: /blog/predicting-solubility
header: no
---

<p>In the realms of pharmaceuticals and agrochemicals, solubility is a cornerstone of efficacy and safety. It is defined as the amount of a substance that will dissolve in a given volume of solvent. relating to both
the solute and the solvent, as well as the temperature and pressure. Solubility  is commonly expressed in terms
of intrinsic solubility, where the solubility of a buffered solution is taken at a given temperature and
pressure. The intrinsic solubility of a substrate reflects its inherent ability to dissolve in a specific solvent,
acting as a straightforward representation of a molecule's likelihood to dissolve. The intrinsic solubility of
a compound at a given pH level is denoted by logS pH and can be derived from the Henderson-Hasselbalch
equation
</p>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Equation</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
    </script>
</head>
<body>
    <p>
        $$ \log S_{pH} = \log S_{0} + \log \left( 1 + \alpha \right) $$
        $$ \text{where} \ \alpha = \frac{\sum \alpha_{cA_i}}{\sum \alpha_{nA_j}} $$
    </p>
</body>

In this form, $$ \alpha_{cA_i} $$ is the distribution percentage of the i-th charged microspecies while $$ \alpha_{nA_j} $$ is the
distribution percentage of the j-th neutral microspecies at a given pH. This equation can be used to
determine the pH-dependent solubility curves and the intrinsic solubility making it vital for
understanding the behavior of a given compound.

#### Why Solubility Matters

<p>
Solubility is extremely important, for example in the pharmaceutical industry, the aqueous solubility of a
potential drug has a high impact on the progression of a target molecule. High aqueous solubility is
essential to produce drug compounds with the potential to enter the bloodstream circulation so that it
can have an active effect where needed. The aqueous solubility can be a limiting factor in the
progression of a compound, not only due to its impact on the bioavailability, but also due to problems
with the toxicity of poorly soluble molecules, with consequences such as crystallization in the body. In
fact, a lack of efficacy is the major problem encountered with the formulation and development of new
drug compounds, together with pharmacokinetics it accounts for over 50 % of failed development
projects. Similarly, solubility is a vital consideration in the development of agrochemicals, impacting their
environmental and toxicological properties. The accurate prediction of solubility allows for more rapid
development of more robust and effective target compounds. Moreover, it decreases the probability ofan ineffective target making it past the screening stage, thereby allowing for the allocation of more resources to more promising candidates.
</p>

#### Benefits of ML in Solubility Prediction:

The demand for new drug-like compounds is ever-growing, motivated by the exponentially increasing
population size as well as the constant emergence of new diseases and viruses. As such, the empirical
techniques used to predict solubility become less and less suitable for the mammoth task of rapidly
screening lead compounds due to the sheer number that could be considered. New techniques are required for the prediction of solubility, that are
robust and accurate to help minimize the cost of drug development as well as reduce the wastage of
resources. The advent of machine learning, coupled with developments in computational chemistry
provide a natural progression to the in-silico simulation of molecular properties such as solubility. By utilizing models such as Graph Convolutional Networks (GCNs) and Random Forests, researchers can predict solubility based on molecular structure and other relevant features, providing valuable insights early in the development pipeline.

<h3>Other Blog posts</h3>
{: .t60 }
{% include list-posts category='blog' %}
