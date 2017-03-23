

	$(".sf-menu").superfish({
		cssArrows: false,
		hoverClass:'no-class',
		delay: 200
	});

	$(".eqlh").equalHeights();
	$(".rerere").equalHeights();


	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});



	$(".burger-menu").click(function () {
		$(this).toggleClass("menu-on");
	});

	$(".burger-menu").click(function() {
		if ($(".top_menu_hide").is(":visible")) {
			$(".top_menu_hide").fadeOut(600);

			
		}
		else {
			$(".top_menu_hide").fadeIn(600);


		}
	});

	$(".menu_item").click(function () {
		$(".top_menu_hide").fadeOut(600);
		$(".burger-menu").removeClass("menu-on");

	});


	$(".by_click").click(function () {
	$(".modal-content").removeClass("hidden");
	
	$(".modal-content").removeClass("flipOutY animated");
	$(".modal-content").addClass("flipInY animated");
	});

	$(".close").click(function () {
		$(".modal-content").removeClass("flipInY animated");	
		
		$(".modal-content").addClass("hidden");

		
	});