var stickyNavLen;

$(document).ready(function()
{
  applyNavigation();
});

function applyNavigation(){
  applyStickyNav();
}

function applyStickyNav(){
  stickyNavLen = $('.scroll-down').offset().top + 20;

  $(window).on('scroll', function(){
    stickyNav();
  })
}

function stickyNav(){
  if($(window).scrollTop() > stickyNavLen){
    $('body').addClass('fixed');
  }
  else{
    $('body').removeClass('fixed');
  }
}
