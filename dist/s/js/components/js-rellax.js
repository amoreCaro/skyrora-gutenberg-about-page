(function(){

    var rellax = new Rellax('.rellax');
    var rellaxVideo = new Rellax('.rellax-video', {
        center: true
    });
    var rellaxVideo = new Rellax('.rellax-picture', {
        center: true,
        breakpoints:[650, 768, 1201]
    });


    if($('.js-categories').length) {
        $(window).on('scroll', function () {
            // console.log($('.js-categories').position().top)
            // console.log($(window).scrollTop())
            if($('.js-categories').position().top < $(window).scrollTop()) {
                console.log("sadsad")
            }
        });
    }
})();