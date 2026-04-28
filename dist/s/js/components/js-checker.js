$('.js-viewport-checker').viewportChecker({
    classToAdd: 'checker-visible',
    classToAddForFullView: 'full-visible',
    classToRemove: 'invisible',
    removeClassAfterAnimation: false,
    offset: '8%',
    invertBottomOffset: true,
    repeat: false,
    callbackFunction: function(elem, action){
        // $(elem).find("h1, h2").attr("data-splitting", "");
        // Splitting();
    },
    scrollHorizontal: false
});



$('h1, h2, h3').viewportChecker({
    classToAdd: 'title-visible',
    classToAddForFullView: 'title-full-visible',
    classToRemove: 'invisible',
    removeClassAfterAnimation: false,
    offset: '0%',
    invertBottomOffset: true,
    repeat: false,
    callbackFunction: function(elem, action){
        // $(elem).find("h1, h2").attr("data-splitting", "");
        // Splitting();
    },
    scrollHorizontal: false
});

$('.js-counter-checker').viewportChecker({
    classToAdd: 'title-visible',
    classToAddForFullView: 'title-full-visible',
    classToRemove: 'invisible',
    removeClassAfterAnimation: false,
    offset: '0%',
    invertBottomOffset: true,
    repeat: false,
    callbackFunction: function(elem, action){
        setTimeout(function(){
            animateValue($numberValue, startValue, endValue);
        }, 0);
        setTimeout(function(){
            animateNumber($number, startNumber, endNumber);
        }, 0);

    },
    scrollHorizontal: false
});



$(document).ready(function(){
    setTimeout(function(){
        $("h1").addClass('main-title-visible')
    }, 600);
    setTimeout(function(){
        $("h1 + p").addClass('main-title-visible')
    }, 1600);
});