(function() {
  'use strict';

  /**
   * Squarespace Responsive ImageLoader
   */
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  document.addEventListener('DOMContentLoaded', loadAllImages);
  window.addEventListener('resize', loadAllImages);

  
  /**
   * Initiate Headroom to hide and show header on scroll
   */
  var header = document.getElementsByClassName('navbar')[0];
  var headroom = new Headroom(header, { "tolerance": 10 });
  headroom.init();

  
  /**
   * Configure ScrollReveal and target classes
   */
  window.sr = ScrollReveal();
  var srConfig = {
    scale: 1,
    origin: 'bottom',
    distance: '10px',
    reset: false,
    duration: 800,
    delay: 0
  }

  sr.reveal('.scroll-reveal', srConfig);
  sr.reveal('.sqs-block', srConfig);

}());


/**
 * Functions to control opening and closing the overlay menu
 */

function openMenu() {
  document.getElementsByClassName('navbar__menu-hamburger')[0].style.opacity = '0';
  document.getElementsByClassName('menu')[0].style.height = '100%';
}

function closeMenu() {
  document.getElementsByClassName('menu')[0].style.height = '0';
  setTimeout(function () {
    document.getElementsByClassName('navbar__menu-hamburger')[0].style.opacity = '1';
  }, 255);
}