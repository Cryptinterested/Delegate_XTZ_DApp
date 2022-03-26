/*$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    center: true,
    nav: true,
    dots: false,
    loop: true,
  });
});*/

import WOW from 'wow.js'
const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    live: true
});

wow.init();