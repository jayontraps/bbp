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



		function upDateTheList (e) {

			e.preventDefault();

			var $this = $(this),
				catselected = $this.attr("href");
				
			if ($this.hasClass("on")) {return false;}

			$(".category-nav > li > a").removeClass("on");
			$this.addClass("on");

			galleryList.find("li").hide();
			
			// addBorder(catselected);

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

