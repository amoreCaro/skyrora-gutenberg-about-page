(function(){

    var $body = $('body');

    $body
        .on('click', '.js-popup-btn', function(event){
            var th = $(this),
                thAttr = "#" + th.attr("data-popup-name"),
                th_collapse = th.closest($body).find(thAttr);
            if (th_collapse.hasClass('js-popup_opened')) {
                th_collapse.stop(true,true).slideUp();
            } else {
                th_collapse.addClass("js-popup_opened");
                th_collapse.stop(true,true).slideDown('300');



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
                    });
                    $('.js-popup-content').css({
                        'right': scrollWidth
                    })
                }
            }
        })
        .on('click', '.js-popup-close', function(event){
            var th = $(this);
            th.closest(".js-popup-content").slideUp();
            if (th.closest(".js-popup-content").hasClass('js-popup_opened')) {
                th.closest(".js-popup-content").removeClass('js-popup_opened');
            }


            document.body.style.overflow = '';
            document.body.style.padding = '';
            $('.header').css({
                'right': 0
            });
            $('.js-popup-content').css({
                'right': 0
            })
        });




})();