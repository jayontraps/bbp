
$(".category-nav > li > a").on('click', function(e) {

	e.preventDefault();

	var $this = $(this),
		galleryList = $("ul.gallery-list"),
		catselected = $this.attr("href"),
		imgs = galleryList.find(".gallery-thumbnail");

	if ($this.hasClass("on")) {return false;}


	$(".category-nav > li > a").removeClass("on");
	$this.addClass("on");


	galleryList.find("li").hide();


	// color borders
	var removeBorder = function(){
		imgs.removeClass("cat1 cat2 cat3 cat4 cat5");		
	};

	var addBorder = function() {

		switch ( catselected ) {
				
			case "cat1":
				removeBorder();
				imgs.addClass(catselected);				
				break;

			case "cat2":
				removeBorder();
				imgs.addClass(catselected);				
				break;

			case "cat3":
				removeBorder();
				imgs.addClass(catselected);				
				break;	


			case "cat4":
				removeBorder();
				imgs.addClass(catselected);				
				break;

			case "cat5":
				removeBorder();
		     	imgs.addClass(catselected);		     	
				break;				
			}
	};

	addBorder();




	var upDatedList = galleryList.find('.' + catselected);

	upDatedList.fadeIn();



	// get the first thumb in the list and load data-lg into frame 
	var firstImg = upDatedList.find('img').first(),

		firstImgAttr = firstImg.attr("data-lg"),
	
	 	wrap = $('div.image-outer-wrap');


 	upDatedList.find('img').removeClass('active');
 	firstImg.addClass('active');


	// clear previous .loader divs
	var emptyLoader = function() {
		$(".loading").remove();
	};	
	emptyLoader();

	// create loading div
	var loader = $('<div class="loading"></div>');

	//load in div.loading
	$(loader).prependTo( wrap ).fadeIn("fast");
	
	//hide existing image
	var imgWrap = wrap.find(".imgWrap");

	imgWrap.hide();



	// load new image into frame
	$targetSrc = $(".frame");

	var img = $targetSrc.attr('src', firstImgAttr ).load( function() {

		imgWrap.append(img).fadeIn("fast", function() {
			$(loader).fadeOut("fast");
		});
		
	});


	if ($("body").hasClass("lg-screen")) {
		//load infoBox
		var metaData = firstImg.next(".gallery-item-info");
		metaData = metaData.clone();
		var destination = $(".infoBox");
		destination.empty();
		metaData.appendTo(destination);
	}
	
});











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
$(document).ready(function() {	


	var wrap = $('div.wrap'),
		loader = $('<div class="loading"></div>');


	$('.lg-screen .gallery-thumbnail').on('click', function() {

		var $this = $(this),
		 	largeImgSrc = $this.attr('data-lg'),
			imgWrap = wrap.find(".imgWrap");

		if ($this.hasClass("active")) { return false; }	

		imgWrap.hide();

		$(loader).prependTo( wrap ).fadeIn("fast");			

		$(".lg-screen .gallery-thumbnail").removeClass("active");

		$this.addClass("active");

		$targetSrc = $(".frame");
		
		var img = $targetSrc
					.attr('src', largeImgSrc )
						.load(function() {
							imgWrap.append(img)
								.fadeIn("fast", function() {
									$(loader).fadeOut("fast");
								});
						});


		//load infoBox
		var metaData = $this.next(".gallery-item-info");
		metaData = metaData.clone();

		var destination = $(".infoBox");
		destination.empty();
		metaData.appendTo(destination);

	});


});

/* requires:
checkConditions.js
thumbclick.js
catclick.js
*/

(function($) {		

	$( document ).ready(function() {

		var bodyTag = $("body"),
			myImages = $(".gallery-thumbnail"),
			homeImg = $("img.homeImg");



	    var media_query = window.matchMedia("(min-width: 800px)");
	    media_query.addListener(loadThumbSrc);
	    loadThumbSrc(media_query);

	    function loadThumbSrc(media_query) {

			if (media_query.matches) {

				$.each(myImages, function(argument) {
					$(this).attr("src", $(this).data('thumb'));
				});

			} else {

				$.each(myImages, function(argument) {
					$(this).attr("src", $(this).data('original'));
				});

				// // Lazyload images
				// myImages.lazyload({
				// 	skip_invisible : false,
				// 	threshold : 200 ,
				// 	effect : "fadeIn"
				// });	

				// //  loading images below-the-fold after five seconds
				// $(function() {          
				//     $("img:below-the-fold").lazyload({
				//         event : "sporty"
				//     });
				// });

				// $(window).bind("load", function() { 
				//     var timeout = setTimeout(function() {$("img.lazy").trigger("sporty");}, 5000);
				// }); 
			}
		}    






		if ( bodyTag.hasClass("lg-screen") ) {

			var firstgalleryitem = function() {

			var metaData = $("div.gallery-item-info").first(),
				destination = $(".infoBox");
				metaData = metaData.clone();		
				destination.empty();
				metaData.appendTo(destination);
			};

			$(window).on('load', firstgalleryitem);

		}

	 	




	 	// toggle details on mobile
		$(".details-btn").on('click', function(e) {
			e.preventDefault();
			$(this).prev().toggleClass("on");
		});


		

	

	});

})(jQuery);

