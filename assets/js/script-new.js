/*-----------------------------------------------------------------------------------
    Template Name: Telco - Creative Agency HTML Template
    Template URI: https://webtend.net/demo/html/telco/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    01. Header
    02. Dropdown menu
    03. Submenu Dropdown
    04. OnePage Nav
    05. Search Box
    06. Scroll to Top
    07. Portfolio Slider
    08. Testimonial Slider
    09. Team Slider
    10. Blog Slider
    11. Video Popup
    12. Gallery Widget
    13. Fact Counter
    14. Skill Bar
    15. WOW Animation
    16. Preloader
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // 01. Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // 02. Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // 03. Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-plus"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
         
        
        // 04. OnePage Nav Scroll
        $(".onepage a").on('click', function(e){
            e.preventDefault();
            var hash = this.hash;
            var position = $(hash).offset().top - 50;
            $("html").animate({
                scrollTop : position
            },1000);
        });
        
        
        // 05. Search Box
        $(".nav-search button").on('click', function() {
            $(".nav-search").find("input").focus().toggleClass('show');
        });
        
        
        // 06. Scroll To Top
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr("data-target");
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
        
        
        // 07. Portfolio Slider
        if($('.portfolio-wrap').length) {
            $('.portfolio-wrap').slick({
                dots: false,
                infinite: true,
                speed: 700,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button type="button" class="portfolio-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
                nextArrow: '<button type="button" class="portfolio-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        
        // 08. Testimonial Slider
        if($('.testimonial-wrap').length) {
            $('.testimonial-wrap').slick({
                dots: false,
                infinite: true,
                speed: 700,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button type="button" class="testimonial-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
                nextArrow: '<button type="button" class="testimonial-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
            });
        }
        
        
        // 09. Team Slider
        if($('.team-wrap').length) {
            $('.team-wrap').slick({
                dots: false,
                infinite: true,
                speed: 700,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button type="button" class="team-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
                nextArrow: '<button type="button" class="team-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        
        // 10. Blog Slider
        if($('.blog-wrap').length) {
            $('.blog-wrap').slick({
                dots: false,
                infinite: true,
                speed: 700,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button type="button" class="blog-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
                nextArrow: '<button type="button" class="blog-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        
        // 11. Video Popup
        $('[data-fancybox]').fancybox({
            buttons: ['close'],
            transitionDuration: 500,
        });
        
        // 12. Gallery
        $('[data-fancybox="gallery"]').fancybox({
            buttons: ['close'],
            transitionDuration: 500,
        });
        
        
        // 13. Fact Counter
        function counter() {
            var oTop;
            if ($('.count-text').length) {
                oTop = $('.count-text').offset().top - window.innerHeight;
                $(window).scroll(function () {
                    var iScroll = $(window).scrollTop();
                    if (iScroll > oTop) {
                        $('.count-text').each(function () {
                            var iCount = $(this).attr('data-stop');
                            var iSpeed = $(this).attr('data-speed');
                            if (!$(this).hasClass('counted')) {
                                $(this).addClass('counted');
                                $(this).countTo({
                                    from: 0,
                                    to: iCount,
                                    speed: iSpeed,
                                    refreshInterval: 50,
                                });
                            }
                        });
                    }
                });
            }
        }
        counter();
        
        
        // 14. Skill Bar
        function skillBar() {
            if ($('.skillbar').length) {
                $(document).on('appear', '.skillbar', function () {
                    $(this).find('.skillbar-bar').animate({
                        width: $(this).attr('data-percent')
                    }, 1200);
                });
            }
        }
        skillBar();
        
        
        // 15. WOW Animation
        function wowAnimation() {
            if ($('.wow').length) {
                var wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: false,
                    live: true
                });
                wow.init();
            }
        }
        wowAnimation();

    });


       /*========================================================================== 
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        // 16. Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();

        // 17. TikTok Trending Badge
        function initTrendingBadges() {
            const tiktokItems = document.querySelectorAll('[data-tiktok-url]');
            
            tiktokItems.forEach(item => {
                const badge = item.querySelector('.tiktok-views-badge .view-count');
                if (badge) {
                    badge.textContent = 'Trending';
                }
            });
        }
        
        initTrendingBadges();
        
    });

})(window.jQuery);
