$(function() {
    console.log( "ready!" );
    $('.jslick-slider').slick({
        // normal options...
        infinite: true,
        slidesToShow: 4,
        slidesToScroll : 1,
        nextArrow : '<button type="button" class="slick-arrows slick-next-arrow"></button>',
        prevArrow : '<button type="button" class="slick-arrows slick-prev-arrow">Next</button>',
        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

            },{

            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

            }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                infinite: true,
            }

            }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

            }]
    })
});