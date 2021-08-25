
$(document).ready(function () {

    $(".slider-container").slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        // arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1824,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $(".sponsers-block").slick({
        slidesToShow: 6.5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoPlaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $(".nav-item").hover(function () {
        $(this).children(".navigation-submenu").css({"display":"block"});
    }, function () {
        $(this).children(".navigation-submenu").css({ "display": "none" });
    });

   
    $(".icon-menu").on("click", function () {
        $(".navigation-block").toggle();
        $(".icon-menu").toggleClass("icon-x");
    });

})

    
