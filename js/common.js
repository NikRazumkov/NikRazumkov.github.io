$(function() {

	$('.till-item-2').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>от KorolMebel</small>';
			}
		}
	});




	$(".mobile-mnu").click(function(){
		$(this).toggleClass("on");
		$(".sf-menu").slideToggle();
	})

		//top-menu
	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass:'no-class',
		delay: 200
	});

	// mobile-menu

	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu", "");
	$("#my-menu").mmenu({
		extension : [ 'widescreen', 'theme-white', 'efect-menu-slide', 'pagim-black'],
		navbar: {
			title : "Меню"
		}
	});


	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function (){
		$(".toggle-mnu").removeClass("on");	
	});

	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data("mmenu");
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;	
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".succes").addClass(".visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".succes").addClass(".visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});



});
