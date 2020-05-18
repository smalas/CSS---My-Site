var stickyNavLen;
var controller = new ScrollMagic.Controller();

$(document).ready(function() {
  applyNavigation();
  scroll();
});

function applyNavigation() {
  applyStickyNav();
}

function applyStickyNav() {
  stickyNavLen = $('.scroll-down').offset().top + 20;

  $(window).on('scroll', function() {
    stickyNav();
  })
}

function stickyNav() {
  if ($(window).scrollTop() > stickyNavLen) {
    $('body').addClass('fixed');
  } else {
    $('body').removeClass('fixed');
  }
}
