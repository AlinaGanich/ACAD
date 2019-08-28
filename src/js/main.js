$(document).ready(function() {
    //Slider
    $('.slider').slick({
        infinity: true,
        slidesToShow: 4,
        slidesToScroll: 4

    });

    var header = $('#header'),
        bannerHeight = $('#banner').innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed header
    checkScroll(scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
        console.log(checkScroll);
    })


    function checkScroll(scrollOffset) {
        if (scrollOffset >= bannerHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }


});