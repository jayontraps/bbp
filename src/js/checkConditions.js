
(function($) {
	
	$.fn.checkConditions = function(options) {

	    var settings = $.extend({ 'breakpoint': '800' }, options);

	    var $this = $(this);

	    var resizer = function() {

	        if ($(window).width() < settings.breakpoint) {
	            $("body").removeClass("lg-screen").addClass("sm-screen");
	        }
	        else {
	            $("body").removeClass("sm-screen").addClass("lg-screen");
	        }
	        if ($(window).width() >= settings.breakpoint) {
	            $this.show();
	        }
	    };

	    // Call once to set.
	    resizer();

	    // Function for testing touch screens
	    function is_touch_device() {
	        return !! ('ontouchstart' in window);
	    }

	    // Set class on html element for touch/no-touch
	    if (is_touch_device()) {
	        $('html').addClass('checkConditions-touch');
	    } else {
	        $('html').addClass('checkConditions-no-touch');
	    }


	    // Call on resize.
	    $(window).on('resize', resizer);

	};

})(jQuery);



$(document).checkConditions();  