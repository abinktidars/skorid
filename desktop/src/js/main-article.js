$(document).ready(function() {

    // sticky terpopuler
    $(".js-tower-sticky").stick_in_parent({
        parent: ".js-tower-sticky-parent",
        inner_scrolling: false,
        spacer: false,
//        offset_top: 60,
        offset_top:108,
    }).on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function(e) {
    });

    // sticky sidebar
    $(".js-sidebar-sticky").stick_in_parent({
        parent: ".js-giant-wp-sticky-parent",
        inner_scrolling: false,
        spacer: false,
        offset_top: 60,
    }).on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function(e) {
    });

    // sticky live
    $(".js-live-keynote").stick_in_parent({
        parent: ".js-giant-live-sticky-parent",
        inner_scrolling: false,
        spacer: false,
        offset_top: 60,
    }).on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function(e) {
    });
    // sticky button live
    $(".js-live-notif").stick_in_parent({
        parent: ".js-giant-live-sticky-parent",
        inner_scrolling: false,
        spacer: false,
        offset_top: 60,
    }).on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function(e) {
    });

    $(window).scroll(function () {
        if($(".js-live-notif").hasClass('is_stuck')) {
            $('.js-live-notif-wrap').css({
                'padding-top': '50px',
            });
        } else {
            $('.js-live-notif-wrap').removeAttr('style');
        }  
    });

    // override style asset article (photo/video)
    if($('.photo').length>0 || $('.video').length>0 || $('.photo-infographic').length>0){

		// setiap foto dicek
        $( ".photo, .js-read-article .video, .photo-infographic" ).each(function( index ) {
			
			////////////////////////////////////////////////////////////////////////////////////////////////////////////
			//
			// fungsi ini adalah untuk membentuk struktur tag html baru dari struktur yang lama (yang ada di xml)
			// struktur yang dari xml adalah sebagai berikut :
			//
			// .photo
			// 		img
			//  	.pb_10.author
			//  		'text author'
			// 		'text caption'
			//
			// struktur baru yang diinginkan adalah sebagai berikut :
			// 
			// .photo
			//  	.photo__wrap
			// 			img
			// 		.photo__caption
			// 			'text caption'
			//			span.photo__author
			// 				'text author'
			// 
			////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			// cari elemen image
            var im =$(this).find('img');

			// cari elemen div.author, 
			// ambil value textnya, 
			// masukin ke var tt, 
			// jangan lupa tambahin dalam kurung
            var tt = $(this).find('.author').text();
            if(tt.length>0)
                tt = '('+tt+')';

            // elemen image yang tadi dimasukin ke class photo__wrap
            var iw = im.wrap('<div class="photo__wrap"></div>');
			
			// kalau fotonya termasuk kategori infografis, ditambahkan icon zoon di pojok kanan atas
            if($(this).is(".photo-infographic")) {
                $(this).attr('data-mfp-src', im.data('link'));
                $(this).find( ".photo__wrap" ).append('<div class="photo__icon photo__icon__expand"><svg class="icon icon-expand"><use xlink:href="#icon-expand"/></svg></div>');
            } 

			// hapus div.author 
            $(this).find( ".author" ).remove();
			
			// kemudian text caption dimasukin ke var ss
            var ss = $(this).text();

			// cari ada karakter aneh2 misalnya strong, HAPUS AJAAA 
			var st = $(this).find('strong');
			if(st.length) {
				var sem = st.find('.photo__wrap').clone().children();
				var dem = st.remove();
				$(this).prepend(sem);
			}

			// setelah bersih, div.photo__wrap hanya akan berisikan image dan caption
			// kemudian caption dihapus tahunya dari mana dia caption adalah nodeType === 3, maka itu adalah tipe text
            $(this).contents().filter(function () {
                return this.nodeType===3;
            }).remove();
			
			// bungkus deh
			// masukin ke dalam struktur yang baru
            $('<div class="photo__caption"></div>').appendTo(this).append(''+ss+'<span class="photo__author author">'+tt+'</span>');
        });

	}
    else {
        pswp();
    }

    // gallery
    if($('.gallery__item').length>0) {
        $('.gallery__item').each(function( index ) {
            $(this).find( ".gallery__photo__asset" ).append('<div class="photo__icon photo__icon__expand"><svg class="icon icon-expand"><use xlink:href="#icon-expand"/></svg></div>');
        });
    }

 
    // datepicker indeks
    $('#datepicker .form__input').datepicker({
        maxDate: new Date(),
        format: "dd M yyyy",
        leftArrow: '<<',
        rightArrow: '>>',
        endDate: '+dd',
        container: '#datepicker',
        todayHighlight: true,
        "autoclose": true
    }).on('changeDate', function(e){ 

        var chosenDate = e.format('yyyy-mm-dd');
        var path = $('#pathurl').val();

        window.location = path+"/"+chosenDate;
    });

    var base_url = $('#baseurl').data('baseurl');
    var date     = $('#date_value').data('value');
    $(".dropdown_site").change(function(e){
        site = base_url + $(this).val();
        $('#pathurl').val(site);
        window.location = site + '/' + date;
    });

    $(".dropdown_sort").change(function(e){
      link = $(this).val();
      window.location = link;
    });

    // zoom infographic
    $('.js-read-article').magnificPopup({
        delegate: '.photo-infographic',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        overflowY:true,
        image: {
            verticalFit: false,
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }        
    });

    // zoom gallery 
    function pswp() {
        var $pswp = $('.pswp')[0];
        $('.js-gallery').each( function() {
            var $pic     = $(this),
                getItems = function() {
                    var items = [];
                    $pic.find('.js-gallery-item').each(function() {
                        if ($(this).hasClass('photo-infographic')) {
                            var im = $(this).find('img');
                            var ii = $(this).find('.author').text();
                        } else {
                            var im = $(this).find('.gallery__img');
                            var ii = im.data('author');
                        }
                        var sd = '';
                        if(ii.length>0) {
                            console.log(ii);
                            sd = ' ('+ii+')';
                        }
                        var $href   = im.data('link'),
                            $title  = im.data('title') + sd,
                            $size   = im.data('size').split('x'),
                            $width  = $size[0],
                            $height = $size[1];
         
                        var item = {
                            src : $href,
                            w   : $width,
                            h   : $height,
                            title: $title
                        }
         
                        items.push(item);
                    });
                    return items;
                }
         
            var items = getItems();
            console.log(items);
            $pic.on('click', '.js-gallery-asset', function(event) {
                // event.preventDefault();
                var $index = $(this).index();
                var idx = $(this).closest('.js-gallery').find('.js-gallery-asset').index(this);
                console.log(idx);
                var options = {
                    index: idx,
                    bgOpacity: 0.9,
                    captionEl: true,
                    showHideOpacity: true,
                    counterEl: true,
                    zoomEl: false,
                    indexIndicatorSep: ' dari ',
                    arrowEl: true,
                    fullscreenEl: false,
                    closeOnScroll: false, 
                    shareButtons: [
                        {id:'facebook', label:'Facebook', url:'https://www.facebook.com/dialog/share?app_id=175782456137534&amp;href={{url}}&amp;picture={{raw_image_url}}'},
                        {id:'twitter', label:'Twitter', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
                        {id:'google', label:'Google+', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
                    ],
                    getThumbBoundsFn: function(index) {

                        // find thumbnail element
                        var thumbnail = document.querySelectorAll('.js-gallery-item .js-gallery-asset')[index];

                        // get window scroll Y
                        var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
                        // optionally get horizontal scroll

                        // get position of element relative to viewport
                        var rect = thumbnail.getBoundingClientRect(); 

                        // w = width
                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};


                        // Good guide on how to get element coordinates:
                        // http://javascript.info/tutorial/coordinates
                    }
                }
                 
                // Initialize PhotoSwipe
                var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
                // lightBox.zoomTo(2, {x:pswp.viewportSize.x/2,y:pswp.viewportSize.y/2}, 2000, false, function(now) {
                     
                // });

            });
        });
    }
    // otomotif
    $('.js-manufaktur-gallery').slick({
        autoplay: true,
        autoplaySpeed: 9000,
        slidesToShow: 1,
        dots: false,
        // arrows: false,
        pauseOnFocus: true,
        prevArrow: "<a href='#' class='icon-photo-slider icon-photo-left'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>",
        nextArrow: "<a href='#' class='icon-photo-slider icon-photo-right'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>"
    });
});
