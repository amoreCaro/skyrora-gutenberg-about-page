(function(){

    function templateType1 (opt) {
        console.log(opt);
        if (!opt.id) {
            return opt.text.toUpperCase();
        }
        var optValue = $(opt.element).attr('data-type');
        if(!optValue){
            return opt;
        } else {
            var $opt = $(
                '<span class="select-txt__value">' + optValue + '</span>'
            );
            return $opt;
        }
    }

    $('.js-select2').select2({
        minimumResultsForSearch: -1,
        placeholder: "Select a state",
        templateSelection: templateType1
    });

    $('.js-select2').on('select2:open', function (e) {
        if($(this).closest('.select-group--dropRight').length) {
            $('.select2-dropdown').css({
                'right': ($(this).closest('.select-group--dropRight').outerWidth() * -1),
                'left': 'auto'
            })
        }
    });
})();

