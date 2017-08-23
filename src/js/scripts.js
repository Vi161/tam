$(document).ready(function(){
    var mibile_width = 767;
    $(window).resize(function(){
        if($(window).width() > mibile_width) {
            $('#header-nav__list').removeClass('active');
//            $('#header-nav__list').css("display","flex")
        }else{
//            $('#header-nav__list').addClass('active');
//            $('#header-nav__list').css("display","none")
        };
    });
    $('.slicknav-menu__but').click(function(){
        $(  "#header-nav__list").slideToggle("slow");
    });



//     Load more

    $(function () {
        $(".gallery__item").slice(0, 3).show();
        $("#loadMore1").on('click', function (e) {
            e.preventDefault();
            $(".gallery__item:hidden").slice(0, 3).slideDown();
            if ($(".gallery__item:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });
    $(function () {
        $(".gallery__item2").slice(0, 3).show();
        $("#loadMore2").on('click', function (e) {
            e.preventDefault();
            $(".gallery__item2:hidden").slice(0, 3).slideDown();
            if ($(".gallery__item2:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });
    $(function () {
        $(".gallery__item3").slice(0, 3).show();
        $("#loadMore3").on('click', function (e) {
            e.preventDefault();
            $(".gallery__item3:hidden").slice(0, 3).slideDown();
            if ($(".gallery__item3:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });
//      Fancybox
        jQuery("a.popupbox-video").fancybox({
            allowfullscreen: 'true',
            afterShow: function() {
                // After the show-slide-animation has ended - play the vide in the current slide
                this.content.find('video').trigger('play')

                // Attach the ended callback to trigger the fancybox.next() once the video has ended.
                this.content.find('video').on('ended', function() {
                    $.fancybox.next();
                });
            }
        });
//      Slick
    jQuery('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: "unslick"

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});