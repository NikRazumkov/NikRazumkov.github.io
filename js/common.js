$(function() {


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
	$("#callback").submit(function() { //Change
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

	$("a[href=#callback]").click(function(){
		$("#callback .formname").val($(this).data("form"))
	})

});
