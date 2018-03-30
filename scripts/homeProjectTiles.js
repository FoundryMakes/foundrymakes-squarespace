(function() {
  'use strict';

  var request = new XMLHttpRequest();
  request.open('GET', '/work?format=json', true);

  var projectTiles = document.querySelector('.projects');

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      
      var image1 = '<a class="projects__tile" data-item-id="' + data.collection.collections[0].id + '" href="'+ data.collection.collections[0].fullUrl +'"><img src="'+ data.collection.collections[0].mainImage.assetUrl +'" alt="'+ data.collection.collections[0].navigationTitle +'" />';
      var description1 = '<div class="projects__tile-text"><h3><strong data-content-field="title">'+ data.collection.collections[0].navigationTitle +'</strong> &mdash; ' + data.collection.collections[0].description + '</h3><span>View Project</span></div></a>';

      var image2 = '<a class="projects__tile" data-item-id="' + data.collection.collections[1].id + '" href="'+ data.collection.collections[1].fullUrl +'"><img src="'+ data.collection.collections[1].mainImage.assetUrl +'" alt="'+ data.collection.collections[1].navigationTitle +'" />';
      var description2 = '<div class="projects__tile-text"><h3><strong data-content-field="title">'+ data.collection.collections[1].navigationTitle +'</strong> &mdash; ' + data.collection.collections[1].description + '</h3><span>View Project</span></div></a>';

      var image3 = '<a class="projects__tile" data-item-id="' + data.collection.collections[2].id + '" href="'+ data.collection.collections[2].fullUrl +'"><img src="'+ data.collection.collections[2].mainImage.assetUrl +'" alt="'+ data.collection.collections[2].navigationTitle +'" />';
      var description3 = '<div class="projects__tile-text"><h3><strong data-content-field="title">'+ data.collection.collections[2].navigationTitle +'</strong> &mdash; ' + data.collection.collections[2].description + '</h3><span>View Project</span></div></a>';

      projectTiles.innerHTML = image1 + description1 + image2 + description2 + image3 + description3;
    } else {
      // We reached our target server, but it returned an error
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
})();