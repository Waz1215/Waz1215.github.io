$(document).ready(function(){



	//Appointments Graphic
	var interval1 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#appointments_row").offset().top-200 ) {
			$(".appointments_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".appointments_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval1);
    	}
	}, 250);

	//Consult Graphic
	var interval2 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#consult_row").offset().top-200 ) {
			$(".consult_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".consult_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval2);
    	}
	}, 250);

	//Check-In Graphic
	var interval3 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#check-in_row").offset().top-200) {
			$(".check-in_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".check-in_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval3);
    	}
	}, 250);

	//Documents Graphic
	var interval4 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#documents_row").offset().top-200) {
			$(".documents_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".documents_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval4);
    	}
	}, 250);


	//Pathology Graphic
	var interval5 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#pathology_row").offset().top-200) {
			$(".pathology_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".pathology_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval5);
    	}
	}, 250);


	//Medication Graphic
	var interval6 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#medication_row").offset().top-200) {
			$(".medication_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".medication_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval6);
    	}
	}, 250);

	//Buttons to Scroll to Downloads and Examples Sections
	$('#cta-btn').click(function(){
		$('html, body').animate({ scrollTop: ($("#downloads").offset().top)} , 1000, "swing");
		return false;
	});

	$('.read-more').click(function(){
		$('html, body').animate({ scrollTop: ($("#examples").offset().top)} , 1000, "swing");
		return false;
	});


	//Examples Animations
	$(".flip-card-inner").click(function(){
		if ($(this).data("state")=="front"){
			$(this).css({'transform' : 'rotateY(-180deg)'});
			$(this).data("state", "back");
		}
		else{
			$(this).css({'transform' : 'rotateY(0deg)'});
			$(this).data("state", "front");
		}
		
	})


	
})