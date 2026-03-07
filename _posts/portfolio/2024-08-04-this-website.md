---
layout: page
sidebar: right
sidebar_content: "_sidebar_website.html"
subheadline: Web development
title:  "This Website"
permalink: /portfolio/this-website/
teaser: "This website is an ongoing project, developing my abities in HTML and CSS. It aims to showcase my work, and help me track my development as a programmer and a chemist."
breadcrumb: true
tags:
    - HTML
    - CSS
    - Jekyll
    - Markdown
categories:
    - projects
image:
    thumb: website.png
    title: website.png
    caption: Homepage
    caption_url: https:/kon-218.github.io
header: no
---

<h3>Project Overview</h3>

<p>The website is primarily a portfolio site, designed to showcase my personal projects and provide information about my academic background. The goal was to create a responsive, visually appealing website that could serve as an online CV and portfolio. The development process has given me the opportunity to deepen my understanding of web development while also exploring the advantages of automating parts of the workflow using CI/CD pipelines.</p>

<p>The key technologies used in the project include:</p>

<ul>
  <li><strong>Jekyll</strong>: A static site generator that simplifies the process of building static websites by allowing content to be stored in Markdown and using layouts to render HTML pages.</li>
  <li><strong>HTML</strong>: The structure and backbone of the website, ensuring that the content is accessible and properly organized.</li>
  <li><strong>SCSS</strong>: A CSS preprocessor that enables more efficient and organized styling through variables, nesting, and other features not natively supported by CSS.</li>
  <li><strong>JavaScript</strong>: Although sparingly used, it plays a role in adding interactivity to certain elements on the site.</li>
  <li><strong>GitHub & CI/CD</strong>: The code for the website is hosted on GitHub, and CI/CD pipelines are set up to automate testing and deployment, ensuring a streamlined process for continuous improvement.</li>
</ul>

<h3>Key Learnings</h3>

<h5>Jekyll</h5>

<p>Jekyll was entirely new to me at the start of this project. As a static site generator, Jekyll allows for efficient management of content, especially when working with multiple pages or blog-style content like portfolio items. I found it particularly useful because of its built-in support for layouts and Markdown, allowing me to easily maintain consistent formatting across the website while also focusing on content creation.</p>

<h5>HTML & SCSS</h5>

<p>Having worked with HTML before, I was familiar with its basic structure and functionality. However, this project required me to think more critically about how HTML interacts with the other technologies in use, particularly SCSS. Structuring the HTML in a semantic and accessible manner was a key consideration throughout the development process.</p>

<p>SCSS’s features like variables, nesting, and mixins helped me streamline the styling process and make it more manageable. By organizing the styles in a more modular way, I could keep track of changes easily and maintain a clean codebase. I also learned how to structure my styles to improve responsiveness, ensuring the website is visually appealing on all screen sizes.</p>

<h5>Version Control with Git & Hosting on GitHub</h5>

<p>Using Git for version control was another crucial learning experience. This project introduced me to best practices for managing code through branches, commits, and pull requests. Understanding how to use Git efficiently has been invaluable, especially as the project evolved and required modifications.</p>

<p>Hosting the website on GitHub was straightforward, thanks to GitHub Pages. This allows me to host my static website directly from the repository without the need for additional server setup. The integration between Jekyll and GitHub Pages further simplifies the deployment process.</p>

<h5>Continuous Integration and Continuous Deployment (CI/CD)</h5>

<p>One of the most significant learning experiences during this project has been setting up CI/CD pipelines. This automated workflow ensures that every change I push to the repository is thoroughly tested and deployed, significantly reducing the risk of errors in production. Initially, setting up the pipeline was challenging, particularly configuring the automated tests and ensuring that the deployment process ran smoothly. However, after some trial and error, I successfully implemented a system that tests each commit and deploys the website once the tests pass.</p>

<h5>Challenges Faced</h5>

<p>One of the main challenges was learning how to use the various tools and technologies together. Jekyll’s structure took some time to fully understand, particularly the way layouts, includes, and posts are organized. Additionally, learning SCSS and integrating it with the HTML structure required me to reconsider how I approached styling in the past.</p>

<p>Setting up the CI/CD pipeline was also initially difficult, as I had to learn how to configure YAML files and troubleshoot errors in the automation process. However, overcoming these challenges has greatly expanded my skill set and provided me with a deeper understanding of modern web development practices.</p>

<h3>Future Plans</h3>

<p>Looking ahead, I have several plans for enhancing the website:</p>

<ul>
  <li><strong>Improved Interactivity</strong>: I plan to introduce more JavaScript-driven interactivity, such as animated transitions and enhanced user interactions with forms and buttons.</li>
  <li><strong>Advanced Styling</strong>: I will continue refining the SCSS to make the website even more responsive and visually dynamic.</li>
  <li><strong>Content Expansion</strong>: As I complete more projects, I will regularly update the portfolio section and expand the blog to include more in-depth discussions on my learning experiences.</li>
</ul>



## Other Projects
{: .t60 }
{% include list-posts category='projects' %}
