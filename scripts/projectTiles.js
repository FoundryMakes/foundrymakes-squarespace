(function() {
  'use strict';

  var request = new XMLHttpRequest();
  request.open('GET', '/projects?format=json', true);

  var projectTiles = document.querySelectorAll('.projects__tile-home');

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      projectTiles.forEach(function(item, index){
        var link = '<a href="' + data.items[index].clickthroughUrl + '" class="util__background-link"></a>'
        var image = '<div class="projects__tile-image-container"><img src="'+ data.items[index].assetUrl +'" alt="'+ data.items[index].title +'" class="projects__tile-image"/></div>'
        var overlay = '<div class="projects__tile-overlay"><div class="projects__tile-overlay-inner"><p class="projects__tile-overlay-client">'+ data.items[index].title +'</p><div class="projects__tile-overlay-title">'+ data.items[index].body +'</div></div></div>'

        projectTiles[index].innerHTML = link + image + overlay;
        projectTiles[index].style.backgroundColor = data.items[index].tags[0]
      })
    } else {
      // We reached our target server, but it returned an error
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();

}());