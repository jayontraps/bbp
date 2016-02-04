(function() {		

	$(document).ready(function() {

		var galleryList = $("ul.gallery-list"),			
			imgs = galleryList.find(".gallery-thumbnail"),
			wrap = $('div.image-outer-wrap'),
			$targetSrc = $(".frame");

		var loader = $('<div class="loading"></div>');

		var emptyLoader = function() {
			$(".loading").remove();
		};

		// color borders
		var removeBorder = function(){
			imgs.removeClass("cat1 cat2 cat3 cat4 cat5");		
		};

		var addBorder = function(catselected) {

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



		function upDateTheList (e) {

			e.preventDefault();

			var $this = $(this),
				catselected = $this.attr("href");
				
			if ($this.hasClass("on")) {return false;}

			$(".category-nav > li > a").removeClass("on");
			$this.addClass("on");

			galleryList.find("li").hide();
			
			addBorder(catselected);

			var upDatedList = galleryList.find('.' + catselected);

			upDatedList.fadeIn();

			


		 	if ($('body').hasClass('lg-screen')) {

				// get the first thumb in the list and load data-lg into frame 
				var firstImg = upDatedList.find('img').first(),
					firstImgAttr = firstImg.attr("data-lg");

				upDatedList.find('img').removeClass('active');
		 		firstImg.addClass('active');

				// // LOADER DIV
				emptyLoader();
				var loader = $('<div class="loading"></div>');
				$(loader).prependTo( wrap ).fadeIn("fast");

		

				// //hide existing image
				var imgWrap = wrap.find(".imgWrap");
				imgWrap.hide();


				// load new image into frame					
				var img = $targetSrc.attr('src', firstImgAttr ).load( function() {

					imgWrap.append(img).fadeIn("fast", function() {
						$(loader).fadeOut("fast");
					});
					
				});

				// 	//load infoBox
				var metaData = firstImg.next(".gallery-item-info");
				metaData = metaData.clone();
				var destination = $(".infoBox");
				destination.empty();
				metaData.appendTo(destination);

			}

		}



		$(".category-nav > li > a").on('click', upDateTheList);


	});


})();



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


	var wrap = $('.image-outer-wrap'),
		loader = $('<div class="loading"></div>'),
		thumbnails = $('.gallery-thumbnail');

    var media_query = window.matchMedia("(min-width: 800px)");
    media_query.addListener(thumbClick);
    thumbClick(media_query);

    function thumbClick(media_query) {
      if (media_query.matches) {
        $( thumbnails ).on( "click", loadMainImg );
      } else {
         $( thumbnails ).off( "click", loadMainImg );      
      }
    }  


    function loadMainImg (argument) {

		var $this = $(this),
		 	largeImgSrc = $this.attr('data-lg'),
			imgWrap = wrap.find(".imgWrap");

		if ($this.hasClass("active")) { return false; }	

		imgWrap.hide();

		$(loader).prependTo( wrap ).fadeIn("fast");			

		thumbnails.removeClass("active");

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

      	
  }  


	


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

			var metaData = $(".gallery-item-info").first(),
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
			$(this)
				.toggleClass('clicked')
					.prev()
						.find('.gallery-item-info')
							.toggleClass("on");
		});


		

	

	});

})(jQuery);

