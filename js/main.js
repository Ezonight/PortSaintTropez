
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
    defineHeightSectionHome();
});

$(window).resize(function(){
    defineHeightSectionHome();
});
$(document).ready(function(){

    $("#Agenda .slider").owlCarousel({
        items : 2, //2 items above 1000px browser width
        itemsDesktop : [1200,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [992,4], // betweem 900px and 601px
        itemsTablet: [768,3], //2 items between 600 and 0
        itemsMobile : [480,2], // itemsMobile disabled - inherit from itemsTablet option
        pagination: false,
        navigation:true

    });

    $("#Galerie .slider").owlCarousel({
        items : 2, //2 items above 1000px browser width
        itemsDesktop : [1200,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [992,4], // betweem 900px and 601px
        itemsTablet: [768,3], //2 items between 600 and 0
        itemsMobile : [480,2], // itemsMobile disabled - inherit from itemsTablet option
        pagination: false,
        itemsScaleUp:true,
        autoPlay:true,
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

//Definition d'une hauteur de la plus grande hauteur de la section de chaque ligne
//sur la page d'accueil

function defineHeightSectionHome(){
    if($("#Content.home").length>0){
        if($(window).width()>992){

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
        }else{
            $("#Content.home>.row").find('section').css('height','100%');
        }
    }
}


// --------------------------------------------------------------------------------------
var up = "Welcome";
var left = "Agenda";
var right = "Contact";
var down = "Galerie";
var btnB = "Magazine";
var btnA = "ImportantLinks";

if ( window.addEventListener ) {
    var myKey;
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    $(window).click(function(e){
        currentKey = e.target.id;
        console.log(currentKey);
        if(currentKey ==up) myKey = 38;
        if(currentKey ==left) myKey = 37;
        if(currentKey ==down) myKey = 40;
        if(currentKey ==right) myKey = 39;
        if(currentKey ==btnA) myKey = 65;
        if(currentKey ==btnB) myKey = 66;
        console.log(myKey);
        kkeys.push( myKey );
        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
            alert('Konamicode!');
        }
    });
}




