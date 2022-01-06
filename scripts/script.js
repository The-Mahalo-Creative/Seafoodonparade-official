//wait until document is ready/loaded to run jquery- safety net for best practice
$(document).ready(function() {
    //mobile menu
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass('active');
    });
  
});