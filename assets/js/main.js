// navbar color change

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      $("#navbar").css("background", "white");
      $(".nav-link").css("color", "#004080");
      $(".logoblue").css("display", "block");
      $(".logowhite").css("display", "none");
      $(".btn-outline-nodanger").css("color", "#004080");
    } else {
      $("#navbar").css("background", "transparent");
      $(".nav-link").css("color", "white");
      $(".logoblue").css("display", "none");
      $(".logowhite").css("display", "block");
      $(".btn-outline-nodanger").css("color", "#fff");
    }
  });
});
