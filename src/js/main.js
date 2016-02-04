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

