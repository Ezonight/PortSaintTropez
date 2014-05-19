
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

$(window).load(function(){

    if($("#Content.home").length>0){
        var height1=0;
        var height2=0;
        $("#Content.home>.row").each(function(){

            $(this).find('section').each(function(){
                height1 = $(this).outerHeight();
                if(height1>=height2)height2=height1;
                console.log(height2);
            });
            $(this).find('section').css('height',height2);
            height1=0;
            height2=0;
            console.log("--");
        });
    }
});

$(document).ready(function(){

    $("#Agenda .slider").owlCarousel({
        items : 2, //2 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
        pagination: false,
        navigation:true

    });

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

    setTimeout(function(){

    },1000);
});





