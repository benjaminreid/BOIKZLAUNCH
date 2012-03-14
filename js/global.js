(function($) { $(document).ready(function() {
  
  var layer = $('#parallax-layer'),
      mouseX, mouseY,
      screenW = updateScreen(),
      xFromCentre,
      percentFromCentre,
      pxToMove,
      amountToMove = 20;

  $(window).on('mousemove', function(e) {
    // store the mouse x and y
    mouseX = e.pageX, mouseY = e.pageY,
    // calculate the offset from the centre
    xFromCentre = mouseX - screenW/2,
    // calculate the percentage from the centre
    percentFromCentre = (xFromCentre / ((screenW/2) / 100)),
    // calculate the pixels to move
    pxToMove = Math.round((amountToMove/100 * percentFromCentre)),
    // inverse the movement
    pxToMove = pxToMove - (pxToMove*2);

    layer.css({
      left: pxToMove
    });
  });

  $(window).on('resize', function() {
    updateScreen();  
  });

  function updateScreen() {
    screenW = $(window).width();
    return screenW;
  }

  function init() {
    updateScreen();
  }
  init();

}); })(jQuery);