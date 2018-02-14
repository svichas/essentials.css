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
    
    /**
    * Copy cdn option
    */
    $("#copy-cdn-html").click(function(e) {


        var copied = $(this).parent().find(".copied");
        //copyText = document.getElementById("cdn-html");
        //copyText.select();
        copied.fadeIn(300, function() {
            setTimeout(function() {
                copied.fadeOut(300);
            },200);
        });
        selectText("cdn-html");
        document.execCommand("Copy");
        //alert("Copied the text: " + copyText.value);

    });
    

    /**
    * Documentation navigations sections
    */ 
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



function selectText(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
    return false;
}