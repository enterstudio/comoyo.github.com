---
layout: post
author: ingridod
title: Comoyo Careers page - Mobile first and responsive design
category: Design
---
We here at Comoyo love mobile devices, so when we were going to make a Careers page we decided to create it for mobile first, with a responsive design that adapts to all screen sizes.

##Mobile first##
The idea of “mobile first” has been around since [2010](http://www.avc.com/a_vc/2010/09/mobile-first-web-second.html) and have done good to mankind by making web publishers stop showing mobile users cluttered pages where it’s [impossible to click anything](http://www.netmagazine.com/features/mobile-first). Designing for small screens forces you to focus and only put essential information on the page, and also requires discipline in the content flow and navigation. 

##Responsive design##
As more and more devices with different screen sizes are released, the need for web pages to look good and be readable on any device has become a challenge for web designers. The term “[Responsive design](http://www.alistapart.com/articles/responsive-web-design/)” has emerged and is defined on Wikipedia as: 
“Responsive Web Design (RWD) essentially indicates that a web site is crafted to use Cascading Style Sheets 3 media queries, (...) with fluid proportion-based grids, to adapt the layout to the viewing environment, and probably also use flexible images.”

So, after applying these principles the first version of our Careers site now look like this on three different screens:
<div class="row">
<div class="span4">
<img src="/assets/img/posts/careers/iphone.png" alt="iphone careers page">
Mobile	(iPhone 960x640)
</div>
<div class="span4">
<img src="/assets/img/posts/careers/ipad.png" alt="ipad careers page">
Tablet (iPad 1024x768)
</div>
</div>



![Web Careers page](/assets/img/posts/careers/desktop.png)
Web (1440 by 900)

##Prototyping and technical tools##
To create our responsive design we used Twitter’s Bootstrap, the same framework we used to create this blog. Bootstrap contains a lot of built in options for responsive design, amongst them a mobile, tablet, small desktop and big desktop layouts. Together with [Lorem Pixel](http://www.lorempixel.com) we had a very powerful prototyping tool. 

Bootstrap allowed us to quickly get a basic version of the page up. We used the mobile view to help us structure the information, and could get quick feedback on this through our peers. We quickly found out that if something wasn’t important enough to show on a mobile screen, then it probably wasn’t important enough to include on our desktop version as well. The mobile view was liberating, it enabled us to focus on content only, getting our message across to the user, without thinking about the grid, design elements or other noise that distracts us from the message. 

We could then start applying grid styling to our content. Bootstrap uses a grid-system based on 12 columns. We could move things quickly, tune it, test it, and tune it some more. With built in Javascript plugins and media grid we could also play around with different effects commonly used in web design, such as an image slider. Being able to quickly test these ideas without writing much code enabled blazing fast iteration. When we added elements to fill in the blanks in the layout, we always made sure to avoid distracting the users away from our message. They were simply tools to enhance our message, not distract from it. 

Check out our page and let us know what you think! [https://www.comoyo.com/careers](https://www.comoyo.com/careers)

What are your experiences with responsive design? 
