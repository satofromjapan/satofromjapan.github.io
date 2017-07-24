$(document).ready(function(){
  $('.parallax').parallax();
  $('.materialboxed').materialbox();
  $("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
});
