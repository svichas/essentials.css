$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop()+60,
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};


$(function() {


    $(window).scroll(function() {

        var section_links = $(".doc-navigation").find("a");
        section_links.removeClass("focused");

        section_links.each(function() {
          
            let element_attribute = $(this).attr("href");
            element = $(element_attribute);

            if (element.isOnScreen()) {
                $(this).addClass("focused");
                return false;
            }

        });

    });

    $(".page-content").find("section").each(function() {

        var nav_link = $("<li/>",{                  
        });

        nav_link.append($("<a/>", {
            "html": $(this).find(".section-title").html(),
            "href": "#" + $(this).attr("id")
        }));


        $(".doc-navigation").append(nav_link);


    });



    tippy('.code-icon', {
        placement: 'bottom',
        animation: 'scale',
        duration: 150,
        arrow: true
    })


});