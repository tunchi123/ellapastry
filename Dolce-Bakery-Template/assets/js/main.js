(function($) {
    "use strict"
    jQuery(document).ready(function($) {
        // sticky-menu-activation
        $(".header-menu").sticky({
            topSpacing: 0
        });
        // smooth-scroll
        $(".main-menu ul li a").on('click', function(event) {
            var linkHref = $(this).attr("href");
            var headerHeight = $(".header-menu").outerHeight();
            $("html, body").animate({
                scrollTop: $(linkHref).offset().top - headerHeight
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
        // active-link-switching
        var scrollLink = $('.scroll-link');

        $(window).on('scroll', function() {
            var scrollBarLocation = $(this).scrollTop();
            var headerMenuHeight = $('.header-area').outerHeight();
            scrollLink.each(function() {
                var sectionOffset = $(this.hash).offset().top - headerMenuHeight
                if (sectionOffset <= scrollBarLocation) {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            });
        });
        // cart-box-activation
        $('.main-menu ul li i').on('click', function() {
            $('.cart-box').toggleClass('active');
            $(this).toggleClass('active');
        });
        // mobile-menu
        $('.custom-navbar').on('click', function() {
            $('.main-menu ul').slideToggle(600);
        });
        $(window).on('resize', function() {
            if ($(window).width() > 991) {
                $('.main-menu ul').removeAttr('style');
            }
        });
        // hero-slider
        $('.slider-area').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: false,
            dots: true,
            animateOut: 'fadeOut',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        });
        // countdown-activation
        $('.countdown').downCount({
                date: '10/14/2018 12:00:00',
                offset: +10
            },
            function() {
                alert('Countdown Done !!');
            });
        // testimonial-slider
        $('.testimonials').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        });
        // parallax-scrollr
        var s = skrollr.init();
    });

    jQuery(window).on('load', function() {
        // animation
        new WOW().init();
        // preloader
        $('.dolce-preloader').fadeOut(500);
    });
})(jQuery);
