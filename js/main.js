
WebFontConfig = {
    google: { families: [ 'Quicksand:300,400,700:latin','Muli:300,400:latin' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();



$(document).ready(function(){

    //DatePicker
    $('.datepicker').datepicker({
        language: 'fr'
    });


    $(".fancybox-thumb").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'inside'
            },
            thumbs	: {
                position:top,
                width	: 50,
                height	: 50
            }
        }
    });

    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });

});





