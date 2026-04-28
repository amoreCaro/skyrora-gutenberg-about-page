(function () {

    var $body = $('body');


    //TYPICAL COLLAPSE
    $body
        .on('click', '.js-collapse .js-collapse-btn', function(event){
            var th = $(this),
                th_collapse = th.closest('.js-collapse'),
                th_content = th_collapse.find('.js-collapse-content');
            th_collapse.toggleClass('js-collapse_opened');
            if (th_collapse.hasClass('js-collapse_opened')) {
                th
                    .closest('.js-collapse-wrap')
                    .find('.js-collapse-content')
                    .not(th_content)
                    .stop(true,true).slideUp();
                th_content.stop(true,true).slideDown('300', function(){
                    $('html,body').animate(300, 'swing');
                });
            } else {
                th
                    .closest('.js-collapse')
                    .find('.js-collapse-content')
                    .stop(true,true).slideUp('300');
            }
        });

    //TYPICAL COLLAPSE END




    if ($('.about__article-link-mobile').length) {
        var productBoxMain = $('.about__article-link .button'),
            productBoxMainWrap = $('.about__article-link'),
            productBoxSmWrap = $('.about__article-link-mobile');


        function replaceBoxContent(){
            if ((productBoxSmWrap.html().length === 0)){
                productBoxSmWrap.append(productBoxMain);
            }
        }

        function resetBoxContent(){
            if (!(productBoxSmWrap.html().length === 0)){
                productBoxMainWrap.append(productBoxMain);
            }
        }

        function updateBoxContent(){
            if (breakPoint == 'sm' || breakPoint == 'md' || breakPoint == 'lg') {
                resetBoxContent();
            } else {
                replaceBoxContent();
            }
        }

        $('body').on('resize_xx_once resize_xs_once resize_sm_once resize_md_once resize_lg_once', updateBoxContent);
        updateBoxContent();
    }








    //TAGS

    $body
        .on('click', '.js-tags .js-tags-open', function(event){
            var th = $(this),
                th_tags = th.closest('.js-tags'),
                th_content = th_tags.find('.js-tags-content');
            th_tags.toggleClass('js-tags_opened');
            if (th_tags.hasClass('js-tags_opened')) {
                th
                    .closest('.js-tags-wrap')
                    .find('.js-tags-content')
                    .not(th_content)
                    .stop(true,true).slideUp('300');
                th_content.stop(true,true).slideDown('300', function(){
                    $('html,body').animate(300, 'swing');
                });
            } else {
                th
                    .closest('.js-tags')
                    .find('.js-tags-content')
                    .stop(true,true).slideUp('300');
            }


            if (th_tags.hasClass('js-category_opened')) {
                th_tags.removeClass('js-category_opened');
                th_tags.find('.js-category-content').stop(true,true).slideUp('300', function(){
                    $('html,body').animate(300, 'swing');
                });
            }
        });


    //TAGS END

    //CATEGORY

    $body
        .on('click', '.js-category .js-category-open', function(event){
            var th = $(this),
                th_category = th.closest('.js-category'),
                th_content = th_category.find('.js-category-content');
            th_category.toggleClass('js-category_opened');
            if (th_category.hasClass('js-category_opened')) {
                th
                    .closest('.l-wrapper')
                    .find('.js-category-content')
                    .not(th_content)
                    .stop(true,true).slideUp('300');
                th_content.stop(true,true).slideDown('300', function(){
                    $('html,body').animate(300, 'swing');
                });
            } else {
                th
                    .closest('.js-category')
                    .find('.js-category-content')
                    .stop(true,true).slideUp('300');
            }


            if (th_category.hasClass('js-tags_opened')) {
                th_category.removeClass('js-tags_opened');
                th_category.find('.js-tags-content').stop(true,true).slideUp('300', function(){
                    $('html,body').animate(300, 'swing');
                });
            }
        });


    //CATEGORY END


    // CATEGORY MOBILE


    if ($('.media-menu__content-category-mobile').length) {
        var tagsContainer = $('.js-tags');
        tagsContainer.each(function () {

            var categoryMain =  $(this).find('.media-menu__categories-content').find('ul'),
                categoryMainWrap = $(this).find('.media-menu__categories-content'),
                categorySmWrap = $(this).find('.media-menu__content-category-mobile');

            function replaceCategoryContent(){
                if ((categorySmWrap.html().length === 0)){
                    categorySmWrap.append(categoryMain);
                }
            }

            function resetCategoryContent(){
                if (!(categorySmWrap.html().length === 0)){
                    categoryMainWrap.append(categoryMain);
                }
            }

            function updateCategoryContent(){
                if (breakPoint == 'md' || breakPoint == 'lg') {
                    resetCategoryContent();
                } else {
                    replaceCategoryContent();
                }
            }

            $('body').on('resize_xx_once resize_xs_once resize_sm_once resize_md_once resize_lg_once', updateCategoryContent);
            updateCategoryContent();
        });

    }



    // CATEGORY MOBILE END



})();