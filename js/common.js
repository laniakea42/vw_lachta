$(function() {
    new WOW().init();
});

jQuery(document).ready((function() {

    $("#slider-range").slider({
            range: !0,
            min: 1e6,
            max: 3e6,
            values: [128e4, 24e5],
            slide: function(e, a) {
                $("#amount").val(a.values[0] + " - " + a.values[1])
            }
        }),

        $("#amount").val($("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1)), $(window).width() < 992 && $(".nav a").on("click", (function() {
            $(".nav").slideToggle(), $(".ham").removeClass("active")
        })),

        $(".nav--btn").on("click", (function() {
            $(".nav").slideToggle()
        })),

        $("#tab1").on("click", (function() {
            $(".tab__head").removeClass("active"), 
            $(this).addClass("active"), 
            $(".tab__body").removeClass("active"), 
            $("#tab1body").addClass("active")
        })),

        $("#tab2").on("click", (function() {
            $(".tab__head").removeClass("active"), 
            $(this).addClass("active"), 
            $(".tab__body").removeClass("active"), 
            $("#tab2body").addClass("active")
        })),

        $("#tab3").on("click", (function() {
            $(".tab__head").removeClass("active"), 
            $(this).addClass("active"), 
            $(".tab__body").removeClass("active"), 
            $("#tab3body").addClass("active")
        })),

        $(".select2").select2(),
        $(".select3").select2(),
        $(".select4").select2(),
        $(".select5").select2(),

        new Swiper(".main__slider", {
            slidesPerView: 1,
            autoplay: true,
            speed: 500
        }),

        new Swiper(".newautocard__swiper", {
            slidesPerView: 2,
            autoplay: true,
            speed: 500,
            breakpoints: {
                // when window width is >= 320px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
            }
        }),

        new Swiper(".hits__slider", {
            slidesPerView: 1,
            autoplay: true,
            speed: 800,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }),


        new Swiper(".banks__slider", {
            loop: !0,
            speed: 500,
            slidesPerView: 2,
            autoplay: !0,
            breakpoints: {
                530: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                690: {
                    slidesPerView: 4,
                    spaceBetween: 15
                }
            }
        })

    $('.tab__cartype').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.tab__opens').hide();
            $(this).removeClass('active');
        } else {
            $('.tab__cartype').removeClass('active');
            $('.tab__newprice').removeClass('active');
            ($(this).addClass('active'));
            $('.tab__opens').hide();
            $(this).parent().parent().next().show();
        }
    })

    $('.tab__newprice').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.tab__opens').hide();
            $(this).removeClass('active');
        } else {
            $('.tab__cartype').removeClass('active');
            $('.tab__newprice').removeClass('active');
            ($(this).addClass('active'));
            $('.tab__opens').hide();
            $(this).parent().next().next().show();
        }
    })


    window.addEventListener('scroll', throttle(parallax, 14));

    function throttle(fn, wait) {
        var time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        }
    };

    // function parallax() {
    //     var scrolled = window.pageYOffset;
    //     var parallax = document.querySelector('.parallax');
    //     // You can adjust the 0.4 to change the speed
    //     var coords = (scrolled * -0.8) + 'px'
    //     parallax.style.transform = 'translateY(' + coords + ')';
    // };

    // function parallax() {
    //     var scrolled = window.pageYOffset;
    //     var parallax = document.querySelector('.parallax3');
    //     // You can adjust the 0.4 to change the speed
    //     var coords = (scrolled * 0.4) + 'px'
    //     parallax.style.transform = 'translateY(' + coords + ')';
    // };

    $("#vznos").ionRangeSlider({
        min: 0,
        max: 90,
        from: 20,
        postfix: "%",
        step: 10

    });

    $("#time").ionRangeSlider({
        min: 12,
        max: 84,
        from: 48,
        step: 12
    });


}));