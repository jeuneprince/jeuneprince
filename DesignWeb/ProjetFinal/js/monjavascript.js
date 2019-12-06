
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
$(document).ready(function() {
    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: $(".down").offset().top
        }, 1000);
    });
});