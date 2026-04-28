(function(){

    var src = $('#bannerVideoId').attr('data-src');
    var srcFallback = $('#bannerVideoId').attr('data-srcFallback');

    var backgroundVideo = new BackgroundVideo('.bv-video', {
        src: [
            src
        ],
        autoplayFallback: srcFallback,
        onBeforeReady: function () {

          },
        onReady: function () {
            $('#bannerVideoId').find("video").attr("data-prevent-transform", "false"); 
          },
        "parallax.effect": "2"
    });

})();