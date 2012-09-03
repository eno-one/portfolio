$(document).ready(function(){
  $('dt').live('click', function(){
    $(this).next('dd').slideToggle(150);
  })
  
});