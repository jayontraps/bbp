$(document).ready(function() {	


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
		var metaData = $this.next(".itemInfo");
		metaData = metaData.clone();

		var destination = $(".infoBox");
		destination.empty();
		metaData.appendTo(destination);

	});


});
