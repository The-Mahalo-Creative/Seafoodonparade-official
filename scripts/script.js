//wait until document is ready/loaded to run jquery- safety net for best practice
$(document).ready(function() {
    //mobile menu
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle()
    });
  
});