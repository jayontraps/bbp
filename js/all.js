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

		// define respondImg() for gallery images
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

		}; 

		respondImg();
	 	$(window).on('resize', respondImg);




	 	// homepage image
	 	var homePic = function() {

	 		var properAttr;

	 		if (bodyTag.hasClass("lg-screen")) {

	 			properAttr = "data-lg";
	 		} else {
	 			properAttr = "data-sm";
	 		}

			var populateSrc = function(index) {
			$(this).attr("src", $(this).attr(properAttr));
			};

			homeImg.each(populateSrc);

	 	};

	 	homePic();
		$(window).on('resize', homePic);



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


(function() {	


$( document ).ready(function() {	


		var wrap = $('div.wrap'),
			loader = $('<div class="loading"></div>');


	$('.lg-screen img.pics').on('click', function() {

		var $this = $(this),
		 	largeImgSrc = $this.attr('data-lg'),
			imgWrap = wrap.find(".imgWrap");

		if ($this.hasClass("active")) { return false;};			

			imgWrap.hide();
			$(loader).prependTo( wrap ).fadeIn("fast");			


			$(".lg-screen img.pics").removeClass("active");
			$this.addClass("active");


		// second attempt
			$targetSrc = $(".frame");
		

			var img = $targetSrc.attr('src', largeImgSrc )
			.load(function() {

			imgWrap.append(img).fadeIn("fast", function() {
				$(loader).fadeOut("fast");

			});

				
			});


			//load infoBox
			var metaData = $this.next(".itemInfo");
			metaData = metaData.clone();

			var destination = $(".infoBox");
			destination.empty();
			metaData.appendTo(destination);

	});


});


})();


$(".catList > li > a").on('click', function(e) {

	e.preventDefault();



	var $this = $(this),
		galleryList = $("ul.galleryList"),
		catselected = $this.attr("href"),
		imgs = galleryList.find("img.pics");
		//frame = $("img.frame");

	if ($this.hasClass("on")) {return false;};


	$(".catList > li > a").removeClass("on");
	$this.addClass("on");



	galleryList.find("li").hide();




	// color borders
	var removeBorder = function(){

		imgs.removeClass("cat1 cat2 cat3 cat4 cat5");
		//frame.removeClass("cat1 cat2 cat3 cat4 cat5");

	};

	var addBorder = function() {

		switch ( catselected ) {
				


			case "cat1":
				removeBorder();
				imgs.addClass(catselected);
				//frame.addClass(catselected);
				break;

			case "cat2":
				removeBorder();
				imgs.addClass(catselected);
				//frame.addClass(catselected);
				break;

			case "cat3":
				removeBorder();
				imgs.addClass(catselected);
				//frame.addClass(catselected);
				break;	


			case "cat4":
				removeBorder();
				imgs.addClass(catselected);
				//frame.addClass(catselected);
				break;

			case "cat5":
				removeBorder();
		     	imgs.addClass(catselected);
		     	//frame.addClass(catselected);
				break;				
			}


	};

	addBorder();




	var upDatedList = galleryList.find('.' + catselected);

	upDatedList.fadeIn();



	// get the first thumb in the list and load data-lg into frame 
	var firstImg = upDatedList.find('img').first(),

		firstImgAttr = firstImg.attr("data-lg"),
	
	 	wrap = $('div.wrap');


 	// remove and add .active
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


	var img = $targetSrc.attr('src', firstImgAttr )
	.load(function() {

	imgWrap.append(img).fadeIn("fast", function() {
		$(loader).fadeOut("fast");
	});

		

	});


	if ($("body").hasClass("lg-screen")) {

		//load infoBox
		var metaData = firstImg.next(".itemInfo");
		metaData = metaData.clone();
		var destination = $(".infoBox");
		destination.empty();
		metaData.appendTo(destination);

	};


});

