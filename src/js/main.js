/* requires:
checkConditions.js
thumbclick.js
catclick.js
*/
(function($) {		

	$( document ).ready(function() {

		var bodyTag = $("body"),
			myImages = $("img.pics"),
			homeImg = $("img.homeImg"),

			respondImg = function () {

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










		// on gallery page load position first .itemInfo
		if ( bodyTag.hasClass("lg-screen") ) {

			var firstItemInfo = function() {

			var metaData = $("div.itemInfo").first(),
				destination = $(".infoBox");
				metaData = metaData.clone();		
				destination.empty();
				metaData.appendTo(destination);
			};

			$(window).on('load', firstItemInfo);

		}

	 	






		
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

		}







	 	// toggle details on mobile
		$(".sm-screen a.detailsLink").on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.prev().toggleClass("true");
		});

	

	});/*=========== end $( document ).ready() ================ */

})(jQuery);

