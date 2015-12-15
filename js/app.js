(function() {
  $(function() {
    $('.navbar a, .sidebar-nav a').smoothScroll();
    // $('#main-logo').waypoint('sticky');
    // return $(window).scroll(function() {
    //   var pos;
    //   pos = $(window).scrollTop();
    //   if (pos > 526) {
    //     return $('#main-nav').addClass("stuck-top");
    //   } else {
    //     return $('#main-nav').removeClass("stuck-top");
    //   }
    // });
  });

}).call(this);
