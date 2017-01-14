$(document).ready(function() {
    $(function() {
        $('#main_images img').addClass('screen');
    });
    $(function() {
        $('#main_images img').mouseenter(function() {
            $(this).removeClass('screen');
        });

        $('#main_images img').mouseleave(function() {
            $(this).addClass('screen');
        });
    });


});
