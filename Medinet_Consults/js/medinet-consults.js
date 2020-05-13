$( document ).ready(function() {

	//Scroll to Active Element
	$("#main-nav .nav-link.scroll").click(function(event) {
    	event.preventDefault();
    	$(".navbar-toggler").click();
    	var pos = $(this)[0].hash;
    	$('html, body').animate({
        	scrollTop: $(pos).offset().top-50
    	}, 500, "swing");
	});
});