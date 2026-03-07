---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage 
header:
    title: Konstantin Nomerotski
    subtitle: Chemistry and Computing
    image_fullwidth: unsplash_brooklyn-bridge_header.jpg
    caption: Brooklyn Bridge
    caption_url: https://unsplash.com/
widget3:
  title: "Blog"
  url: '/blog/'
  image: header_unsplash_8.jpg
  text: 'My thoughts and ideas, often inspired by reading. Sometimes about Chemistry, sometimes about Computing, possibly not at all.'
widget2:
  title: "CV"
  url: '/cv/'
  image: widget-1-302x182.jpg
  text: 'Showcasing my academic background, technical skills, and professional experiences in Chemistry and Computing.'
widget1:
  title: "Portfolio"
  url: '/portfolio/'
  image: header_typewriter.jpg
  text: 'A summary of my ongoing and recent projects, incuding Software Engineering, and Data Science projects covering various topics from both Chemistry and Physics.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
callforaction:
  url: https://paypal.me/konnnn?country.x=GB&locale.x=en_GB
  text: Buy me a coffee ›
  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
