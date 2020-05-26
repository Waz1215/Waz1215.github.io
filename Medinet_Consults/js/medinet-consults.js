$( document ).ready(function() {
	//Scroll to Active Element
	$("#main-nav .nav-link.scroll").click(function(event) {
    	event.preventDefault();
    	$(".navbar-toggler").click();
    	var el = $(this).data("destination");
    	$('html, body').animate({
        	scrollTop: $(el).offset().top-110
    	}, 500, "swing");
	});


	//Flip Arrow Button for Collapsible FAQs
	$(".question-col a").click(function(event) {
    	if ($(this).hasClass("unclicked")){
    		$(this).removeClass("unclicked");
    		$(this).addClass("clicked");
    	}
    	else{
    		$(this).removeClass("clicked");
    		$(this).addClass("unclicked");
    	}
	});


	//Slide Nav Toggle
	$("#slide-nav-toggler").click(function(event) {
    	if ($("#navbarNavAltMarkup").hasClass("slide-out")){
    		$("#navbarNavAltMarkup").removeClass("slide-out");
    		$("#navbarNavAltMarkup").addClass("slide-in");
    		
    	}
    	else{
    		$("#navbarNavAltMarkup").removeClass("slide-in");
    		$("#navbarNavAltMarkup").addClass("slide-out");
    		// $("body").css("overflow-y", "auto");
    	}
	});

	//Adjust for Linking to Features and How it Works from other pages
	if (window.location.hash){
		if (window.location.hash=="#Features"){
			$('html, body').animate({
        		scrollTop: $("#Why-Choose-Medinet-Consults").offset().top-110
    		}, 500, "swing");
		}
		if (window.location.hash=="#How-it-Works"){
			$('html, body').animate({
        		scrollTop: $("#How-does-it-Work").offset().top-110
    		}, 500, "swing");
		}
	}
});