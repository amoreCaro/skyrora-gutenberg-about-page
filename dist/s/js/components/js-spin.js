(function(){


    var myProduct = $(".js-product");
    var amimationStatus = false;

    $(document).ready(function(){
        $(myProduct).each(function (e) {
            var th = $(this);
            var source  = th.find('.spritespin').attr('data-imgSrc');
            var spinAmount = th.find('.spritespin').attr('data-spinAmount');

            th.find(".spritespin").spritespin({
                // path to the source images.
                source: SpriteSpin.sourceArray(source, {
                    // this ramge of numbers is interpolated into the {frame} placeholder
                    frame: [1,spinAmount],
                    // the frame placeholder will be padded with leading '0' up to the number of 'digits'
                    digits: 1
                }),
                onLoad: function name(params) {
                    th.addClass("product--spin-ready") 
                },
                animate: false,
                width   : 160,
                height  : 820
            });
            var api = $(".spritespin").spritespin("api");
        });
    });



    $(".js-product").on('mouseover', function () {
        var th = $(this);
        if(!amimationStatus) {
            th.find('.spritespin').spritespin('api').toggleAnimation();
        }
        amimationStatus = true;
    });
    $(".js-product").on('mouseleave', function () {
        var th = $(this);
        if(amimationStatus) {
            th.find('.spritespin').spritespin('api').toggleAnimation();
        }
        amimationStatus = false;
    });

})();