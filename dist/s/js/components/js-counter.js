
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function animateNumber($obj, start, end, duration) {
    numberWithSpaces(start);
    // var range = end - start;
    var current = start;
    var increment = 4;
    // var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        $obj.text(numberWithSpaces(current));
        if (current == end) {
            $obj.text($obj.text());
            clearInterval(timer);
        }
        console.log(end);
    }, 0);
}

function animateValue($obj, start, end, duration) {
    numberWithSpaces(start);
    // var range = end - start;
    var current = start;
    var increment = 1;
    // var stepTime = Math.abs(Math.floor(duration / range));
    $obj.text(numberWithSpaces(current));
    var timer = setInterval(function() {
        current += increment;
        $obj.text(numberWithSpaces(current));
        if (current == end) {
            $obj.text($obj.text());
            clearInterval(timer);
        }
    }, 75  );
}

// function animateValue($obj, start, end, duration) {
//     numberWithSpaces(start);
//     var range = end - start;
//     var current = start;
//     var increment = end > start? 1 : -1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var timer = setInterval(function() {
//         current += increment;
//         $obj.text(numberWithSpaces(current));
//         if (current == end) {
//             $obj.text($obj.text());
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// var $number = $('.count-number'),
//     startNumber = $number.attr('data-start')*1,
//     endNumber = $number.attr('data-end')*1;
//
// var $numberValue = $('.count-value'),
//     startValue = $numberValue.attr('data-start')*1,
//     endValue = $numberValue.attr('data-end')*1;


var $number = $('.count-number'),
    startNumber = 399970,
    endNumber = 401054;

var $numberValue = $('.count-value'),
    startValue = 785,
    endValue = 809;



