$(document).ready(function(){
  
  $('dt').click(function(){
    var $dt = $(this),
        $dd = $dt.next('dd');
    
    
    $dd.slideToggle(200, function() {
     //   var topPos = $dt.offset().top - $(window).scrollTop();
     //   window.scrollBy(0, topPos);
      }).toggleClass('opened');
  });
  
  
  $('.show-all').click(function(){
    $('dd').not('.opened').slideDown(200);
    return false;
  });
  

  
});