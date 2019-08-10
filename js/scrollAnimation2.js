$(document).ready(function(){



	//Appointments Graphic
	var interval1 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#appointments_row").offset().top-200 ) {
        	// $("#consult_graphic").attr("data","img/consult_graphic.svg");
        	// $("#appointments_graphic").attr("data","img/appointments_graphic.svg");
			// $("#appointments_graphic").css("animation","fadeIn 0.6s ease-out 0s 1 forwards");
			$(".appointments_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".appointments_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval1);
    	}
	}, 250);

	//Consult Graphic
	var interval2 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#consult_row").offset().top-200 ) {
        	// $("#consult_graphic").attr("data","img/consult_graphic.svg");
        	// $("#consult_graphic").attr("data","img/consult_graphic.svg");
			// $("#consult_graphic").css("animation","fadeIn 0.6s ease-out 0s 1 forwards");
			$(".consult_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".consult_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval2);
    	}
	}, 250);

	//Check-In Graphic
	var interval3 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#check-in_row").offset().top-200) {
        	// $("#check-in_graphic").attr("data","img/check-in_graphic.svg");
			// $("#check-in_graphic").css("animation","fadeIn 0.6s ease-out 0s 1 forwards");
			$(".check-in_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".check-in_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval3);
    	}
	}, 250);

	//Documents Graphic
	var interval4 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#documents_row").offset().top-200) {
        	// $("#documents_graphic").attr("data","img/documents_graphic.svg");
			// $("#documents_graphic").css("animation","fadeIn 0.6s ease-out 0s 1 forwards");
			$(".documents_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".documents_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval4);
    	}
	}, 250);


	//Pathology Graphic
	var interval5 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#pathology_row").offset().top-200) {
        	// $("#pathology_graphic").attr("data","img/pathology_graphic.svg");
			// $("#pathology_graphic").css("animation","fadeIn 0.6s ease-out 0s 1 forwards");
			$(".pathology_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".pathology_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval5);
    	}
	}, 250);


	//Medication Graphic
	var interval6 = setInterval(function() {
    	if ($(window).scrollTop() >= $("#medication_row").offset().top-200) {
        	// $("#medication_graphic").attr("data","img/medication_graphic.svg");
			// $("#medication_graphic").css("animation","fadeIn 0.6s ease-out 0s 1 forwards");
			$(".medication_col h1").css("animation","slideInRight 0.4s ease-out 0s 1 forwards");
			$(".medication_col p").css("animation","slideInRight 0.4s ease-out 0.1s 1 forwards");
        	clearInterval(interval6);
    	}
	}, 250);


	
})