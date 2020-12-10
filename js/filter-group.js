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
  $(".btn-webinar").click(function(){
    $(".card-webinar").toggleClass('hidden');
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-green');
    $(".btn-webinar .fa-times-circle").toggleClass('hidden');
    $(".btn-webinar .fa-check-circle").toggleClass('hidden');
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
});
