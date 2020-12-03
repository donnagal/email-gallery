$(function() { 
  $(".btn-brand").click(function(){
    $(".card-brand").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(".btn-brand .fa-times-circle").toggleClass('hidden');
    $(".btn-brand .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-comms").click(function(){
    $(".card-comms").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(".btn-comms .fa-times-circle").toggleClass('hidden');
    $(".btn-comms .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-member").click(function(){
    $(".card-member").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(".btn-member .fa-times-circle").toggleClass('hidden');
    $(".btn-member .fa-check-circle").toggleClass('hidden');
  });
  $(".btn-webinar").click(function(){
    $(".card-webinar").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(".btn-webinar .fa-times-circle").toggleClass('hidden');
    $(".btn-webinar .fa-check-circle").toggleClass('hidden');
  });
});
