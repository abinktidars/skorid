$(document).ready(function() {

    var prevarrow = "<a href='#' class='icon-photo-slider icon-photo-left'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>";
    var nextarrow = "<a href='#' class='icon-photo-slider icon-photo-right'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>"

    // headline lensa
    $('.js-lensa-hl').slick({
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 7000,
        pauseOnFocus: true,
        fade: true,
        // arrows: false,
        cssEase: 'ease',
        prevArrow: prevarrow,
        nextArrow: nextarrow
    });
    $('.js-lensa-channel').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        // fade: true,
        // arrows: false,
        cssEase: 'ease',
        prevArrow: prevarrow,
        nextArrow: nextarrow
    });
    $('.js-photo-lensa').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        fade: true,
        dots: false,
        // arrows: false,
        pauseOnFocus: true,
        prevArrow: prevarrow,
        nextArrow: nextarrow
    });
    var sd = 0;
    var ss= 0;
    $(".js-button-toggle").click(function(e) {
        $(".js-read-lensa > div").each(function() {
            // $(this).outerHeight();
            sd = $(this).outerHeight();
            ss += sd;
            console.log(ss);
        });
        var te = $('.read__article').outerHeight();
        var as = $(this).data('toggle');
        e.preventDefault();
        console.log('ss');
        $(".js-read-lensa").animate({
            height: te == 150 ? ss : '150px',
        }, 500, 'linear');
        // $(this).hide();
        $(this).text(function(i, text) {
            return text === as ? $(this).data('toggled') : as;
        });
        $(this).toggleClass('button--toggled');
    });

});
