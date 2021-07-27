$(function() { 
  $(".btn-brand").click(function(){
    $(".card-brand").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-brand .fa-times-circle").toggleClass('hidden');
    $(".btn-brand .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-comms").click(function(){
    $(".card-comms").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-comms .fa-times-circle").toggleClass('hidden');
    $(".btn-comms .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-employer").click(function(){
    $(".card-employer").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-employer .fa-times-circle").toggleClass('hidden');
    $(".btn-employer .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-member").click(function(){
    $(".card-member").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-member .fa-times-circle").toggleClass('hidden');
    $(".btn-member .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-notification").click(function(){
    $(".card-notification").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-notification .fa-times-circle").toggleClass('hidden');
    $(".btn-notification .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-webinar").click(function(){
    $(".card-webinar").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-webinar .fa-times-circle").toggleClass('hidden');
    $(".btn-webinar .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-gle").click(function(){
    $(".card-gle").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-gle .fa-times-circle").toggleClass('hidden');
    $(".btn-gle .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-template").click(function(){
    $(".card-template").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-template .fa-times-circle").toggleClass('hidden');
    $(".btn-template .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-inspo").click(function(){
    $(".card-inspo").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-inspo .fa-times-circle").toggleClass('hidden');
    $(".btn-inspo .fa-check-circle").toggleClass('hidden');
  });
  

  $(".dropdown-menu").hide();

  $(".dropdown").click(function(){
    $(".dropdown-menu").toggle();
    $(".dropdown-menu-date").hide();
  });

  //submenu date
  $(".dropdown-date").hide();
  $(".order a").click(function(){
    $(".date-disbaled").toggle();
    $(".dropdown-date").toggle();
  });

  $(".dropdown-menu-date").hide();

  $(".dropdown-date").click(function(){
    $(".dropdown-menu-date").toggle();
    $(".dropdown-menu").hide();
  });

  $('#submenu').on('click','button', function ( e ) {
    e.preventDefault();
    $(this).parents('#submenu').find('.line-active').removeClass('line-active').end().end().addClass('line-active');
    $(activeTab).show();
});

    $(".bnt-all").click(function(){
      $(".card").show();
    });
    $(".bnt-oct").click(function(){
      $(".card").hide();
      $(".Oct-20").show();
    });
    $(".bnt-nov").click(function(){
      $(".card").hide();
      $(".Nov-20").show();
    });
    $(".bnt-dec").click(function(){
      $(".card").hide();
      $(".Dec-20").show();
    });
    $(".bnt-21-jan").click(function(){
      $(".card").hide();
      $(".Jan-21").show();
    });
    $(".bnt-21-feb").click(function(){
      $(".card").hide();
      $(".Feb-21").show();
    });
    $(".bnt-21-mar").click(function(){
      $(".card").hide();
      $(".Mar-21").show();
    });
    $(".bnt-21-apr").click(function(){
      $(".card").hide();
      $(".Apr-21").show();
    });
    $(".bnt-21-may").click(function(){
      $(".card").hide();
      $(".May-21").show();
    });
    $(".bnt-21-jun").click(function(){
      $(".card").hide();
      $(".Jun-21").show();
    });
    $(".bnt-21-aug").click(function(){
      $(".card").hide();
      $(".Aug-21").show();
    });
    $(".bnt-21-sep").click(function(){
      $(".card").hide();
      $(".Sep-21").show();
    });
    $(".bnt-21-oct").click(function(){
      $(".card").hide();
      $(".Oct-21").show();
    });
    $(".bnt-21-nov").click(function(){
      $(".card").hide();
      $(".Nov-21").show();
    });
    $(".bnt-21-dec").click(function(){
      $(".card").hide();
      $(".Dec-21").show();
    });

});
