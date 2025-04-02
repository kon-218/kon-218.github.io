---
layout: page
sidebar: none
subheadline: Atmospheric Chemistry 
title:  "AtmoSpec: A Revolutionary Tool for Atmospheric Chemists"
teaser: "AtmoSpec is an innovative UV/Vis spectroscopy tool designed to streamline the calculation of photoabsorption cross-sections for volatile organic compounds (VOCs). Developed by the InSilico Photochemistry group at the University of Bristol, AtmoSpec enables users to input a molecule's SMILES code, select a theoretical framework, and perform quantum chemistry calculations using ORCA."
breadcrumb: true
tags:
    - Atmospec
    - Atmospheric Chemistry
    - Quantum Chemistry
    - Open source
    - Software
    - Python
categories:
    - blog
image:
    thumb: atmosepc.jpeg
    title: atmosepc.jpeg
    caption: Atmospec logo
    caption_url: https://pubs.acs.org/doi/10.1021/acs.jpca.4c05174
permalink: /blog/what-is-atmospec
header: no
---

In the realm of atmospheric chemistry, **Volatile Organic Compounds (VOCs)** are extremely important, as they can significantly influence air quality and climate, yet their photochemical reactivities and lifetimes are often poorly understood. This lack of knowledge is primarily due to the challenges associated with isolating and measuring these transient VOCs, which stands in the way of conventional laboratory methods. 
Understanding how VOCs interact with sunlight is essential for developing accurate atmospheric chemistry models. **Photoabsorption cross-sections** are key parameters that describe how much light a molecule can absorb at different wavelengths. This information is crucial for predicting the photolysis processes that VOCs undergo, which in turn affects their reactivity and lifetime in the atmosphere. Unfortunately, obtaining these cross-sections experimentally can be difficult, often unfeasable due to their instability. Recent advances in computational photochemistry allow for the calculation of these photoabsorption cross-sections, but this can be inaccessible to those less computationally savvy.

### AtmoSpec: An Automated Workflow Using NEA

To address these challenges, the InSilico Photochemistry group at the University of Bristol have developed an interactive computational tool, AtmoSpec, that automates the calculation of photoabsorption cross-sections for VOCs using the **Nuclear Ensemble Approach (NEA)**. This automated workflow simplifies the process, allowing users to input a molecule's structure via a simple SMILES code and select a theoretical framework. AtmoSpec then performs the necessary quantum chemistry calculations using ORCA, and provides users with the photoabsorption cross-section for the molecule's low-energy conformers, along with estimates of photolysis rate coefficients for various actinic fluxes. This abstraction of a complex computational process makes advances in computational chemistry accessible to researchers less familiar with such methods, giving them access to quantum mechanical tools in their respective areas of research

AtmoSpec is built on the Aiidalab ecosystem, with an integrated database and workflow manager for seamless execution of calculations and storage of results. Moreover, Quantum Chemistry calculations can be configured for local execution or on the cloud, allowing for greater flexibility. Similarly, the web application delivery allows for remote access from anywhere in the world, and the containerization via Docker ensures robust deployment in any environment. The open source nature encourages contributions and collaborations.

### Future Improvements

Looking ahead, the InSilicoPhotochemistry group are committed to continuous improvement of the tool. Future enhancements will focus on implementing a improvements in the Nuclear Ensemble Approach, such as <a href="/portfolio/rep-sampling-for-nea/" title="Learn about representative sampling techniques">Representative Sampling Techniques</a> to improve the efficiency of the algorithm, thereby making it more applicable to larger, more complex molecules. Additionally, interfacing the application with the GPU accellerated package TeraChem will provide appreciable speed up in the quantum chemistry calculations.

### Conclusion

AtmoSpec is poised to revolutionize the study of VOCs in atmospheric chemistry by providing an accessible and automated method for calculating photoabsorption cross-sections. It empowers researchers to gain deeper insights into the impact of these compounds on our environment without the need for costly laboratory experiments, and in a timely fashion. Whether you are a seasoned scientist or a newcomer to the field, AtmoSpec is a valuable resource that can enhance your understanding of a molecule's photochemical properties. Additionally, with the planned improvements, its efficiency is set to increase dramatically resulting in wider applicability to more complex molecules.

For more information and to access AtmoSpec, visit the [ATMOSPEC GitHub repository](https://github.com/ispg-group/aiidalab-ispg).

<h3>Other Blog posts</h3>
{: .t60 }
{% include list-posts category='blog' %}
