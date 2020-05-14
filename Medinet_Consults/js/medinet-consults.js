$( document ).ready(function() {

	//Scroll to Active Element
	$("#main-nav .nav-link.scroll").click(function(event) {
    	event.preventDefault();
    	$(".navbar-toggler").click();
    	var el = $(this).data("destination");
    	$('html, body').animate({
        	scrollTop: $(el).offset().top-50
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
});