$("document").ready(function() {
	
	$("#logo").animate({opacity: 1}, 1000, function () {
		$("#kingCap").animate({opacity: 1}, 1000, function () {
			$("#lifestyle").animate({opacity: 1}, 2000, function () {
				$("#scrollDown").animate({opacity: 1}, 1000)
			});
		});
	});

	$(".galeryImg").click(function () {
		var thisId = $(this).attr('id');
		$("body").css({"overflow": "hidden"})
		$("body").scrollTop($("#cart" + thisId).offset().top);	
		$("#cart" + thisId).animate({"width": "100%", "height": "100%"}, 500, function () {
			$("#header").animate({"opacity": 0, "z-index": "100"}, 500, function () {
				$("#slide").css({"top": + $("#cart" + thisId).offset().top +"px"});
			});
		});
	});

	$("#upBtn").click(function () {
		$(".cart").css({"width": "95%", "height": "95%"});
		$("body").css({"overflow": "visible"});
		$("#slide").css({"top": "-150%"});
		$("#header").animate({"opacity": 1}, 500);
	});

	var bigNamber = 1;
	var $window = $(window),
    lastScrollTop = 0;

 	var counter = $(window).scrollTop() / 10 % Math.PI;
 	var fff = 1;

	$(window).scroll(function() {
		if ($("body").scrollTop() >= ($("body").height() - ($("body").height() / 4))) {
			$("#textFooterShell").animate({opacity: 1}, 1500);
		 }
		var div = $("div");
		var offset = div.offset();
		if ($("body").scrollTop() > 500) {
			$("#cartOne").animate({"opacity": "1"}, 1000);
		}
		if ($("body").scrollTop() > 1100) {
			$("#cartTwo").animate({"opacity": "1"}, 1000);
		}
		if ($("body").scrollTop() > 1700) {
			$("#cartThree").animate({"opacity": "1"}, 1000);
		}

	});

}); 

$(window).scroll(function() {
		var cartOne = 0.3;
		var cartTwo = 0.6;
		var cartThree = 0.9;
		var theta = $(window).scrollTop() / 2445 / 1;
if ($(window).scrollTop() > 100) {

		console.log(theta);
	if ((cartOne - theta) < 0.1) {
		$('#cartOne').css({ transform: 'rotate(0rad)' });
	} else {
		$('#cartOne').css({ transform: 'rotate(-' + (cartOne - theta) + 'rad)' });
		$('#cartOne').css({ transform: 'rotate(' + (cartOne - theta) + 'rad)' });
	}
}

	// alert("uhh");
	if ((cartTwo - theta) < 0.1) {
		$('#cartTwo').css({ transform: 'rotate(0rad)' });
	} else {
		$('#cartTwo').css({ transform: 'rotate(-' + (cartTwo - theta) + 'rad)' });
		$('#cartTwo').css({ transform: 'rotate(-' + (cartTwo - theta) + 'rad)' });
	}

	if ((cartThree - theta) < 0.1) {
		$('#cartThree').css({ transform: 'rotate(0rad)' });
	} else {
		$('#cartThree').css({ transform: 'rotate(-' + (cartThree - theta) + 'rad)' });
		$('#cartThree').css({ transform: 'rotate(' + (cartThree - theta) + 'rad)' });
	}

});