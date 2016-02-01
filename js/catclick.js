
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


	// if ($("body").hasClass("sm-screen")) {

	// 	imgs.lazyload({
	// 		skip_invisible : false,
	// 		threshold : 200 ,
	// 		effect : "fadeIn"
	// 	});	
		
	// };


	

});