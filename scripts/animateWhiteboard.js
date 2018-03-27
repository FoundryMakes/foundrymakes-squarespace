var whiteboard = new Vivus('whiteboard', {
  type: 'oneByOne',
  duration: 150,
  onReady: function (myVivus) {
    console.debug('ready to draw whiteboard');
  }
}, function() {
  console.debug('done drawing whiteboard');
});
