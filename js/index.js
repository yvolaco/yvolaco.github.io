$(document).ready(function() {
  $("#bio").click(function() {
    $(".bio").toggleClass("selected");
  });

  $("#portfolio").click(function() {
    $(".portfolio").toggleClass("selected");
  });

  $("#resume").click(function() {
    $(".resume").toggleClass("selected");
  });

  $("#upcoming").click(function() {
    $(".upcoming").toggleClass("selected");
  });

  $("#contact").click(function() {
    $(".contact").toggleClass("selected");
  });

  $(".close").click(function() {
    $(".selected").removeClass("selected");
  });


  $("#performancelink").click(function(){
    $(".choreography").hide();
    $(".performance").fadeIn(500);
});

$("#choreolink").click(function(){
  $(".performance").hide();
  $(".choreography").fadeIn(500);
});



  $(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      $(".selected").removeClass("selected");
    }
  });



    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });



  $("#performance").unitegallery({
    tile_enable_image_effect: true,
    tile_enable_overlay: false,
    tile_enable_icons: false,
    tiles_type: "justified",
    tiles_justified_row_height: 210,
    tiles_justified_space_between: 10,
    lightbox_type: "compact",
    tile_enable_textpanel: true,
    tile_textpanel_title_text_align: "right",
    tile_textpanel_source: "desc",
    lightbox_slider_image_border_width: 0,
    lightbox_slider_image_shadow: false,
  });

  $("#choreography").unitegallery({
    tile_enable_image_effect: true,
    tile_enable_overlay: false,
    tile_enable_icons: false,
    tiles_type: "justified",
    tiles_justified_row_height: 210,
    tiles_justified_space_between: 10,
    lightbox_type: "compact",
    tile_enable_textpanel: true,
    tile_textpanel_title_text_align: "right",
    tile_textpanel_source: "desc",
    lightbox_slider_image_border_width: 0,
    lightbox_slider_image_shadow: false,
  });

});
