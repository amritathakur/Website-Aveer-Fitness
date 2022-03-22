;
(function($) {
    "use strict";

    $(document).ready(function() {

        /**-----------------------------
         *  Popup
         * ---------------------------*/
        $(".floating-icon-info").on("click", function() {
            $(".info-popup").toggleClass("active");
            $(".location-popup").removeClass("active");
            $(".message-popup").removeClass("active");
        });
        $(".info-popup-content_close").on("click", function() {
            $(this)
                .parent()
                .parent()
                .removeClass("active");
        });

        $(".floating-icon-location").on("click", function() {
            $(".location-popup").toggleClass("active");
            $(".message-popup").removeClass("active");
            $(".info-popup").removeClass("active");
        });
        $(".location-popup-content_close").on("click", function() {
            $(this)
                .parent()
                .parent()
                .removeClass("active");
        });

        $(".floating-icon-message").on("click", function() {
            $(".message-popup").toggleClass("active");
            $(".info-popup").removeClass("active");
            $(".location-popup").removeClass("active");
        });
        $(".message-popup-content_close").on("click", function() {
            $(this)
                .parent()
                .parent()
                .removeClass("active");
        });

        /*--------------------
           Nice select
        ---------------------*/
        if ($('.country_select').length != 0) {
            $('.country_select').niceSelect();
        }


        if ($(window).width() > 767) {
            if ($('.footer-parallax')) {
                var height = $('.footer-parallax').height();
                $(".wrapper").css("margin-bottom", height + 30 + 'px');
            }
        }

        /*-------------------------------------
            slick sliders
        -------------------------------------*/

        var bannerslider1 = $('.banner-slide1');
        // banner slider one
        bannerslider1.slick({
            dots: false,
            arrows: false,
            asNavFor: '.small-slider',
            fade: true,
            // autoplay: true
        });

        bannerslider1.slickAnimation();

        var smallslider = $('.small-slider');

        smallslider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.banner-slide1',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            centerPadding: 0,
            // autoplay: true
        });

        smallslider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var totalSlide = slick.slideCount;
            var currentSlideindex = ++slick.currentSlide;
            $('.controler-wrapper .total-controler').text(check_number(totalSlide));
            $('.controler-wrapper .active-controler').text(check_number(currentSlideindex));

        });

        /*-------------------------------------
            owl-carousel
        -------------------------------------*/

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },

                1300: {
                    items: 2
                },
                1600: {
                    items: 3,
                    stagePadding: 250
                }
            }
        })

        //Scroll Down
        $('.scroll a').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
        });

        // check_number function
        function check_number(num) {
            var IsInteger = /^[0-9]+$/.test(num);
            return IsInteger ? "0" + num : null;
        }

        /* pricing Active */
        var singlepricing = $('.pricing-area .single-pricing-style-01')

        singlepricing.mouseover(function() {
            singlepricing.removeClass('active');
            $(this).addClass('active');
        });

        $(window).on("resize", function(e) {
            e.preventDefault();
            //floatingIcon
            if ($(window).width() < 768) {
                hideFloatingIcon();
            } else {
                showFloatingIcon();
            }
        });

    })
})(jQuery);