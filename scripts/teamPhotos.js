(function() {
  'use strict';

  (function() {
  var teamPhotos = document.querySelector('.team-photos');
  var hiddenImages = document.querySelector('.hidden-images');

  var request = new XMLHttpRequest();
  request.open('GET', '/team-photos?format=json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      var images = _.shuffle(data.items);

      var initialImages = images.slice(0,8);
      var initialElements = '';

      var hiddenImages = images.slice(8);
      var hiddenElements = '';

      initialImages.forEach(function(item, index) {
        var image = '<div class="tile"><img src="' + item.assetUrl + '"><img class="hidden"></div>'
        initialElements = initialElements + image;
      });

      hiddenImages.forEach(function(item, index) {
        var image = '<img data-src="' + item.assetUrl + '">'
        hiddenElements = hiddenElements + image;
      });

      teamPhotos.innerHTML = initialElements;
      hiddenImages.innerHTML = hiddenElements;

    } else {
      // We reached our target server, but it returned an error
    }
  };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  })();

}());