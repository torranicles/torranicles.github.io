$(document).ready(function() {
    $(window).scroll(function() {
        $(".project-tile").each(function() {
            let bottomWindow = $(window).scrollTop() + $(window).innerHeight();
            let bottomObj = $(this).offset().top;
            if (bottomObj < bottomWindow) { 
                if ($(this).css("opacity")==0) {
                    $(this).css('animation', 'SlideUp 1.5s ease');
                    $(this).fadeTo(1000,1);
                }
            } 
        });
    })
});

$(document).ready(function() {
    $(window).scroll(function() {
        $(".other").each(function() {
            let bottomWindow = $(window).scrollTop() + $(window).innerHeight();
            let bottomObj = $(this).offset().top;
            if (bottomObj < bottomWindow) { 
                if ($(this).css("opacity")==0) {
                    $(this).css('animation', 'SlideUp 1.5s ease');
                    $(this).fadeTo(1000,1);
                }
            } 
        });
    })
});