(function() {
  'use strict';

  (function() {
    var teamPhotos = document.querySelector('.team-photos');
    var request = new XMLHttpRequest();
    request.open('GET', '/team-photos?format=json', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        var images = shuffle(data.items).slice(0, 8);

        images.forEach(function(item) {
          var imageContainer = document.createElement('div');
          imageContainer.className = 'tile';

          var image = document.createElement('img');
          image.setAttribute('data-src', item.assetUrl);

          imageContainer.appendChild(image);
          teamPhotos.appendChild(imageContainer);

          ImageLoader.load(image, { load: true });
        });
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  })();
})();

/**
 * Shuffles an array.
 * @param {Array} array An array containing the items.
 */
function shuffle(array) {
  var counter = array.length;
  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter--;

    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
