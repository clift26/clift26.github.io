$( '.services > div' ).hover(function() {
  $('.active').removeClass('active');
  $(this).addClass('active');
});
$( '.services > div' ).mouseleave(function() {
  $(this).removeClass('active');
});
$( 'nav > button' ).hover(function() {
  $('.active').removeClass('pressed');
  $(this).addClass('pressed');
});
$( 'nav > button' ).mouseleave(function() {
  $(this).removeClass('pressed');
});