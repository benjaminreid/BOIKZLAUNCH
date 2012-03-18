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
    mouseX = e.pageX, mouseY = e.pageY;
  });

  function updateScreen() {
    screenW = $(window).width();
    return screenW;
  }

  function updateParallaxLayer()
  {
    setInterval(function() {
      // calculate the offset from the centre
      xFromCentre = mouseX - screenW/2,
      // calculate the percentage from the centre
      percentFromCentre = (xFromCentre / ((screenW/2) / 100)),
      // calculate the pixels to move
      pxToMove = (amountToMove/100 * percentFromCentre),
      // inverse the movement
      pxToMove = pxToMove - (pxToMove*2);

      layer.css({
        left: pxToMove
      });
    }, 1000/60);
  }

  


  var container   = $('.container'),
      containerW  = $('.container').width(),
      containerWP = containerW/100,
      scalers     = $('.fscale'), 
      scale       = 0.1;

  function setFontSizes() {
    containerW  = container.width(),
    containerWP = containerW/100;
    $.each(scalers, function(i,el) {
      var jEl     = $(el),
          // get the element scale factor
          fscale  = jEl.data('scale'),
          // the fontsize it's own scale, times the base scale * the 1% width of the container so the size is relative
          fontSize = (fscale * scale) * containerWP;
      jEl.css({
        'font-size': fontSize,
        'line-height': fontSize+'px'
      });
    });
  }

  $(window).on('resize', function() {
    setFontSizes();
    updateScreen();  
  });

  function init() {
    updateScreen();
    updateParallaxLayer();
    setFontSizes();
  }
  init();

}); })(jQuery);