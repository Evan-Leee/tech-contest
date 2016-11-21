$(document).ready(function(){
    $(this).scrollTop(0);

    $(window).scroll( function() {
        if ( $(this).scrollTop() > 70 )
            $(".header-logo").addClass("small");
        else
            $(".header-logo").removeClass("small");
    });

});

