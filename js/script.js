$(document).ready(function(){
  $('dt').click(function(){
    $(this).next('dd').slideToggle(200).toggleClass('opened');
  });
  
  $('.show-all').click(function(){
    $(this).hide();
    $('#cl').show();
    $('dd').not('.opened').slideDown(200);
    return false;
  });

  
});