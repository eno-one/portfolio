$(document).ready(function(){
  
  $('dt').click(function(){
    var $dt = $(this),
        $dd = $dt.next('dd');
    
    $dd.slideToggle(200).toggleClass('opened');
  });
  
  $('.show-all').click(function(){
    $('dd').not('.opened').slideDown(200);
    return false;
  });
});