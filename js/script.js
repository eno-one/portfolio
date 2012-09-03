$(document).ready(function(){
  $('dt').click(function(){
    //$(this).next('dd').slideToggle(200).toggleClass('opened');
    $(this).next('dd').css('display', 'block').toggleClass('opened');
  });
  
  $('.showAll').click(function(){
    $('#op').toggle();
    $('#cl').toggle();
    $('dd').not('.opened').slideDown(200);
    return false;
  });
  
  $('#cl').click(function(){
    $('.opened').slideUp(200);
  })

  
});