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

  $(document).on('click', '.nav-li', function(event) { 
    event.preventDefault(); 
    $(".slide-toggle").click(); 
    
});