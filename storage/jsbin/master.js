$.fn.isOnScreen = function(){

    var win = $(window);

   	if (win.scrollTop() < 199) return false;

    var viewport = {
        top : win.scrollTop()+60,
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
$(function() {


	$(window).scroll(function() {


		$(".nav-bar").find("a").each(function() {
			
			element = $($(this).attr("href"));
			$(".nav-bar").find("a").removeClass("focused");

			if (element.isOnScreen()) {
				$(this).addClass("focused");
				return false;
			}

		});




	});


});
hljs.initHighlightingOnLoad();