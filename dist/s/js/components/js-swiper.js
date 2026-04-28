(function(){

    if(document.querySelectorAll('.js-swiper-pictures').length > 0) {
        var mySwiper = new Swiper(".swiper-container.swiper-container--pictures", {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            },
            grabCursor: true,
            speed: 1400,
            loop: true,
            parallax: true,
            paginationClickable: true,
            autoplay: true,
            effect: "slide",
            mousewheelControl: 1
        });
    }

})();