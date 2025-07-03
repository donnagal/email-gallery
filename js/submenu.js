$(function() { 
  $('#submenu').on('click','button', function ( e ) {
      e.preventDefault();
      $(this).parents('#submenu').find('.line-active').removeClass('line-active').end().end().addClass('line-active');
      $(activeTab).show();
  });
});