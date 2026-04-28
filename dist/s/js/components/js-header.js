(function(){

    var $body = $('body');

    $body
        .on('click', '.js-header .js-menu-open', function(event){
            console.log(1);
            var th = $(this),
                th_tags = th.closest('.js-header'),
                th_content = th_tags.find('.js-menu-content');
            th_tags.toggleClass('js-menu_opened');


            if (th_tags.hasClass('js-menu_opened')) {
                th
                    .closest('.js-menu-wrap')
                    .find('.js-menu-content')
                    .not(th_content)
                    .stop(true,true).slideUp('300');
                th_content.stop(true,true).slideDown('300', function(){
                    $('html,body').animate(300, 'swing');
                });



                if((document.body.clientHeight - document.documentElement.clientHeight) != 0) {
                    var div = document.createElement('div');
                    div.style.overflowY = 'scroll';
                    div.style.width = '50px';
                    div.style.height = '50px';
                    document.body.append(div);
                    var scrollWidth = div.offsetWidth - div.clientWidth;
                    div.parentNode.removeChild(div);
                    document.body.style.overflow = 'hidden';
                    document.body.style.paddingRight = scrollWidth + 'px';
                    $('.header').css({
                        'right': scrollWidth
                    })
                }


            } else {
                th
                    .closest('.js-header')
                    .find('.js-menu-content')
                    .stop(true,true).slideUp('300');

                document.body.style.overflow = '';
                document.body.style.padding = '';
                $('.header').css({
                    'right': 0
                })
            }
        });



    //DECOR FIXED HEADER

    var anchorForHeader = $('main').find(".section:first-child").outerHeight();
    console.log(anchorForHeader);


    if($('.js-header:not(.header--white)').length) {
        $(window).on('scroll', function () {
            var testValue = Math.trunc(($(window).scrollTop() / anchorForHeader) * 100);
            // console.log( testValue );
            $('.js-header:not(.header--white)').find(".header--decor-opacity").css({
                filter: "opacity" + "(" + testValue + "%" +")"
            });
            // console.log( testValue );
            // if($('.js-header').offset().top > (anchorForHeader)) {
            //     $('.js-header').addClass('header--fixed')
            // } else {
            //     $('.js-header').removeClass('header--fixed')
            // }
            if($('.js-header').offset().top > 0) {
                $('.js-header').closest(".l-wrapper").find('.js-header-anchor').css({
                    "opacity": "0",
                    "visibility": "hidden"
                })
            } else {
                $('.js-header').closest(".l-wrapper").find('.js-header-anchor').css({
                    "opacity": "1",
                    "visibility": "visible"
                })
            }
        });
    }

    if($('.js-header.header--white').length) {
        $(window).on('scroll', function () {
            if($('.js-header').offset().top > 0) {
                $('.js-header').addClass('header--fixed')
            } else {
                $('.js-header').removeClass('header--fixed')
            }
        });
    }

    //DECOR FIXED HEADER END




    //ANCHOR MAIN

    $(document).on('click', '.js-header-anchor', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top + 85
        }, 1000);

    });

    //ANCHOR MAIN END

    //ANCHOR LANDING

    $(document).on('click', '[data-section-nav]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 120
        }, 1000);

    });

    //ANCHOR LANDING END

})();