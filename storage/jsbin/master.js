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


		//var installisation_section = document.getElementById("installisation");
		//var documentation_section = document.getElementById("documentation");
		var installisation_section = $("#installisation");
		var documentation_section = $("#documentation");

		$(".nav-bar").find("a").removeClass("focused");

		if (installisation_section.isOnScreen()) {
			$("a[href='#installisation']").addClass("focused");
		} else if (documentation_section.isOnScreen()) {
			$("a[href='#documentation']").addClass("focused");
		}



	});


});
hljs.initHighlightingOnLoad();