(function() {
  'use strict';

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);

  // Hide/show header
  var header = document.getElementsByClassName('navbar')[0];
  var headroom = new Headroom(header, { "tolerance": 10 });
  headroom.init();

  // Scroll reveal
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

// Open Menu
function openMenu() {
  document.getElementsByClassName('navbar__menu-hamburger')[0].style.opacity = '0';
  document.getElementsByClassName('menu')[0].style.height = '100%';
}

// Close Menu
function closeMenu() {
  document.getElementsByClassName('menu')[0].style.height = '0';
  setTimeout(function () {
    document.getElementsByClassName('navbar__menu-hamburger')[0].style.opacity = '1';
  }, 255);
}