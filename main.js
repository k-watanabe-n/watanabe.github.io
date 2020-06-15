var navPos = jQuery("#global-nav").offset().top; 
var navHeight = jQuery("#global-nav").outerHeight(); 
jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > navPos) {
    jQuery("body").css("padding-top", navHeight);
    jQuery("#global-nav").addClass("m_fixed");
  } else {
    jQuery("body").css("padding-top", 0);
    jQuery("#global-nav").removeClass("m_fixed");
  }
});

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
