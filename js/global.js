//nav
  $(document).ready(function(){

    $(".slide-toggle").click(function(){
      $(this).toggleClass('active');
      $(".menu").animate({
        width: "toggle"
      });
      $('nav').toggleClass('open');
      $('.hamburger-menu').toggleClass('animate');
    })
  });

