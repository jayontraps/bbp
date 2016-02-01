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








(function() {		

	$( document ).ready(function() {

		var bodyTag = $("body");
		 // Responsive images
		var myImages = $("img.pics");

		var homeImg = $("img.homeImg");

		// define respondImg()
		var respondImg = function () {

			var properAttr;

			if (bodyTag.hasClass("lg-screen")) {

				properAttr = "data-thumb";
			} else {
				properAttr = "src";
			}


			//populate the src attribute with thumbs on desktop
			var populateSrc = function(index) {
				$(this).attr("src", $(this).attr(properAttr));
			};

			myImages.each(populateSrc);
			homeImg.each(populateSrc);

		}; 

		respondImg();
	 	$(window).on('resize', respondImg);





	 	

	 	// //rollover event
	 	// myImages.on('mouseenter', function(){	 		
	 	// 	$this = $(this);
	 	// 	$('<div></div>', { class: 'ghost' } ).insertAfter($this);
	 	// 	//ghost.appendTo($this);
	 	// });

	 	// myImages.on('mouseleave', function(){
	 	// 	$(".ghost").remove();
	 	// });

		// $("a.testa").hover(
		// function () {
		// $(this).find("div.ghost").addClass("true");

		// },
		// function () {
		// 	$(this).find("div.ghost").removeClass("true");
		// }
		// );


		//on gallery page load position first .itemInfo
		if (bodyTag.hasClass("lg-screen")) {

		var firstItemInfo = function() {


			var metaData = $("div.itemInfo").first(),
				destination = $(".infoBox");

				metaData = metaData.clone();		
				destination.empty();
				metaData.appendTo(destination);

			};

			$(window).on('load', firstItemInfo);

		};

	 	


		
		if (bodyTag.hasClass("sm-screen")) {


			// Lazyload images
			myImages.lazyload({
				skip_invisible : false,
				threshold : 200 ,
				effect : "fadeIn"
			});	


			//  loading images below-the-fold after five seconds
			$(function() {          
			    $("img:below-the-fold").lazyload({
			        event : "sporty"
			    });
			});

			$(window).bind("load", function() { 
			    var timeout = setTimeout(function() {$("img.lazy").trigger("sporty")}, 5000);
			}); 



		};



	 	// toggle details on mobile
		$(".sm-screen a.detailsLink").on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.prev().toggleClass("true");
		});

	

	});/*=========== end $( document ).ready() ================ */

})();

