$(document).ready(function() {

    var prevarrow = "<a href='#' class='icon-photo-slider icon-photo-left'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>";
    var nextarrow = "<a href='#' class='icon-photo-slider icon-photo-right'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>"

    // headline
    $('.js-hl-big').slick({
        autoplay: false,
        slidesToShow: 1,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        fade: true,
        arrows: false,
        cssEase: 'ease',
        asNavFor: '.js-hl-thumb'
    });
    $('.js-hl-thumb').slick({
        asNavFor: '.js-hl-big',
        slidesToShow: 4,
        focusOnSelect: true,
    });
    $('.js-photo-wp').slick({
        autoplay: true,
        autoplaySpeed: 9000,
        slidesToShow: 1,
        dots: true,
        // arrows: false,
        pauseOnFocus: true,
        prevArrow: prevarrow,
        nextArrow: nextarrow
    });
    // scroll
    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var hblock = $('.header').outerHeight();
        var navsticky = $('.nav').outerHeight();

        // scroll header
        if(scrollpos > hblock + 20) {
            $('.header').addClass('header--sticky');
            $('.nav').addClass('nav--sticky');
            $('.js-nav-offset').css({
                'padding-top': navsticky,
            });
            $('.js-kcm-stick').addClass('ads__stick--sticky')
        } else {
            $('.header').removeClass('header--sticky');            
            $('.nav').removeClass('nav--sticky');
            $('.js-nav-offset').removeAttr('style');
            $('.js-kcm-stick').removeClass('ads__stick--sticky')
        }

        // banner sticky
        if($('#js-banner-sticky').length>0) {
            var bnsticky = $("#js-banner-sticky").offset().top - 143;
            if(scrollpos > bnsticky) {
                $('#js-banner-sticky').addClass("banner--sticky");
            } else {
                $('#js-banner-sticky').removeClass("banner--sticky");
            }
        }
        // console.log(scrollpos);0
        // console.log(hblock);
    });

    // sticky terpopuler
    $(".js-giant-wp-sticky").stick_in_parent({
        parent: ".js-giant-wp-sticky-parent",
        inner_scrolling: false,
        spacer: false,
        offset_top: 60,
    }).on('sticky_kit:bottom', function(e) {
        // console.log('stuck');
        $(this).parent().parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function(e) {
        // console.log('unstuck');
        $(this).parent().parent().removeAttr('style');
        // $(this).parent().css('position', 'relative');
    });

    // breaking news
    $('.js-breaking').marquee({
        pauseOnHover: true,
        allowCss3Support: false,
        // delayBeforeStart: 2000,
        duration: 8000,
        gap: 100,
        duplicated: true
    }); 

    // close kcm horizontal
    $('.js-kcm-horizontal').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('.ads__horizontal').hide();
    });

    // video click
    $('.video__playlist__link').click(function(){
        $('.video__playlist__link').removeClass('video__playlist__link--active');
        $(this).addClass('video__playlist__link--active');
        $('#video-play').attr('src',$(this).attr('data-video'));        
    });


	// tooltips
	$('[data-type="tooltips"]').each(function() {
		var sf = $(this).data('text');
		var sg = $(this).data('placement');
		$(this).append('<div class="tooltips tooltips--' + sg + '"><span>' + sf + '</span></div>');
		$(this).on('mouseover', function(e) {
			e.preventDefault();
			$(this).find('.tooltips').toggleClass('tooltips--show');
		});
		$(this).on('mouseout', function(e) {
			e.preventDefault();
			$(this).find('.tooltips').toggleClass('tooltips--show');
		});
	});

    // awards
    if($('.logo__awards').length>0) {
        $('.logo__awards').slick({
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 5000,
            pauseOnFocus: true,
            fade: true,
            arrows: false,
            cssEase: 'ease',
        });
    }

    // ultah
    if($('.logo__ultah').length>0) {
		$('.logo__ultah').slick({
			autoplay: true,
			slidesToShow: 1,
			autoplaySpeed: 2000,
			pauseOnFocus: true,
			fade: true,
			arrows: false,
			cssEase: 'ease',
		});
    }

    // Load More
    $('#btn-load-more').click(function(){
        var element = this;
        $(this).hide();
        $(this).parent().append('<div id="load-more-loading" style="text-align:center;"><img src="https://asset.kompas.com/data/2017/wp/images/loading.gif"></div>');
        $.ajax({
            url:$(this).attr('data-url')+'/'+$(this).attr('data-page'),
            type:'post',
            dataType:'json',
            success:function(str){
                $($(element).attr('data-append')).append(str['result']);
                if (str['status']) {
                    $(element).attr('data-page',str['page']);
                    $(element).show();
                }
                $('#load-more-loading').remove();
            }
        });        
    });    
        
    // option
    $('.option__menu').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('.option__wrap').removeClass('active');
        $(this).parent().find('.option__wrap').addClass('active');
    });
    $(document).click(function(e){
        $('.option__wrap').removeClass('active');
    });

});
