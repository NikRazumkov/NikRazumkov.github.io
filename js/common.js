



$(document).ready(function () {




	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};

	$(".loaderInner").fadeOut('slow'); 
	$(".loader").delay(400).fadeOut();

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	})

	$('.resume_item').equalHeights();




	$(".top_text").click(function() {
		$("html, body").animate({
			scrollTop : $("#about").offset().top
		}, 1200);
	});

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function () {
		$(".s_portfolio ul li").removeClass("active");
		$(this).addClass("active");
	});


	$(".top_text a h1").addClass("fadeInLeft animated");
	$(".top_text a p").addClass("fadeInRight animated");
	

	


	$('.main_head').parallax({imageSrc: 'img/background.jpg' });

	$(".loaderInner").fadeOut('slow'); 
	$(".loader").delay(400).fadeOut();


	$(".burger-menu").click(function () {
		$(this).toggleClass("menu-on");
	});

	$(".burger-menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_text").removeClass("low_opasity")
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("rollIn animated")
			$(".top_menu li a").addClass("rollOut animated")
			
		}
		else {
			$(".top_text").addClass("low_opasity")
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").removeClass("rollOut animated")
			$(".top_menu li a").addClass("rollIn animated")

		}
	});

	$(".menu_item").click(function () {
		$(".top_menu").fadeOut(600);
		$(".burger-menu").removeClass("menu-on");
		$(".top_text").removeClass("low_opasity")

	});

	$('.popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	

	//E-mail Ajax Send
	
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".modal-content").addClass("hidden");

			}, 2000);
		});
		return false;
	});

});

// Modal window

$(".btn").click(function () {
	$(".modal-content").removeClass("hidden");
	
	$(".modal-content").removeClass("flipOutY animated");
	$(".modal-content").addClass("flipInY animated");
});

$(".close").click(function () {
	$(".modal-content").removeClass("flipInY animated");	
	
	$(".modal-content").addClass("hidden");

	
});


//end modal window






