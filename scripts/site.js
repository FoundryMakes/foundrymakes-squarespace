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

// Contact form
function sayHello(e) {
  e.preventDefault();
  var form = document.getElementById('hello');
  if (form.checkValidity()) {
    var formData = new FormData(form);
    var request = new XMLHttpRequest();
    request.open('POST', '/hello');
    request.send(formData);
    document.getElementsByClassName('submitted')[0].style.opacity = '1';
    form.getElementsByTagName('button')[0].style.display = 'none';
  }
}

// Schedule Workshop form
function scheduleWorkshop(e) {
  e.preventDefault();

  var form = document.getElementById('workshop');
  var errorMessage = form.getElementsByClassName('error-message')[0];

  // Inputs:
  var name = form.elements['name'];
  var email = form.elements['email'];
  var message = form.elements['message'];

  // Clear errors:
  errorMessage.style.opacity = '0';
  name.classList.remove('error');
  email.classList.remove('error');
  message.classList.remove('error');

  if (form.checkValidity()) {
    var formData = new FormData(form);
    var request = new XMLHttpRequest();
    request.open('POST', '/workshop');
    request.send(formData);

    // Show Thank You message:
    form.getElementsByClassName('submitted')[0].style.opacity = '1';
    form.getElementsByTagName('button')[0].style.display = 'none';
  } else {
    // Show errors:
    errorMessage.style.opacity = '1';

    if (!name.checkValidity()) {
      name.classList.add('error');
    }

    if (!email.checkValidity()) {
      email.classList.add('error');
    }

    if (!message.checkValidity()) {
      message.classList.add('error');
    }
  }
}

