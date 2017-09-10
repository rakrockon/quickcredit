$(function() {
    console.log( "ready!" );
    moment().format();
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
    $('.ranger').rangeslider({
        polyfill: false,
    });
     $('.money_value').text(Number(10000).toLocaleString('hi'));
    $('#date_value').text(moment().add(10, 'days').format('L'));
    $('#money_range').on('input', function() {
        var money = this.value;
        $('.money_value').text(Number(money).toLocaleString('hi'));
    });
    $('#date_range').on('input', function() {
        $('#days_value').text(this.value);
        $('#date_value').text(moment().add(this.value, 'days').format('L'));
    });
    $('.ranger-range-btn').click(function(){
        var ele = $(this);
        if(ele.hasClass('money-btn')){
            var current_money = $('#money_range').val();
            if(ele.hasClass('plus')){
                $('#money_range').val(parseInt(current_money)+500).change(); 
            } else{
                $('#money_range').val(parseInt(current_money)-500).change(); 
            }
        } else {
            var current_days = $('#date_range').val();
            if(ele.hasClass('plus')){
                $('#date_range').val(parseInt(current_days)+1).change(); 
            } else{
                $('#date_range').val(parseInt(current_days)-1).change(); 
            }
        }
    })/*
    $document.on('click', '#js-example-change-value button', function(e) {
         var $inputRange = $('[data-rangeslider]', e.target.parentNode);
          var value = $('input[type="number"]', e.target.parentNode)[0].value;
           $inputRange.val(value).change(); 
        });*/
});