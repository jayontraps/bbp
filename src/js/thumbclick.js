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
