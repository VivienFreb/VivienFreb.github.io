  $(".view-1").on({
    mouseenter: function() {
      $('.view-2, .view-3, .view-4').addClass('view-small');
      $('.view-1').addClass('view-large');
    },
    mouseleave: function() {
      $('.view-2, .view-3, .view-4').removeClass('view-small');
      $('.view-1').removeClass('view-large');
    }
  });

  $(".view-2").on({
    mouseenter: function() {
      $('.view-1, .view-3, .view-4').addClass('view-small');
      $('.view-2').addClass('view-large');
    },
    mouseleave: function() {
      $('.view-1, .view-3, .view-4').removeClass('view-small');
      $('.view-2').removeClass('view-large');
    }
  });

  $(".view-3").on({
    mouseenter: function() {
      $('.view-1, .view-2, .view-4').addClass('view-small');
      $('.view-3').addClass('view-large');
    },
    mouseleave: function() {
      $('.view-1, .view-2, .view-4').removeClass('view-small');
      $('.view-3').removeClass('view-large');
    }
  });

    $(".view-4").on({
    mouseenter: function() {
      $('.view-1, .view-2, .view-3').addClass('view-small');
      $('.view-4').addClass('view-large');
    },
    mouseleave: function() {
      $('.view-1, .view-2, .view-3').removeClass('view-small');
      $('.view-4').removeClass('view-large');
    }
  });
