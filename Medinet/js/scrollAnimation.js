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
			// $(this).css({'transform' : 'rotateY(-180deg)'});
			$(this).data("state", "back");
		}
		else{
			// $(this).css({'transform' : 'rotateY(0deg)'});
			$(this).data("state", "front");
		}
		
	})


	$('form.contactForm').submit(function() {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;
    else var str = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/contactform/contactform.php",
      data: str,
      success: function(msg) {
        // alert(msg);
        if (msg == 'OK') {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val("");
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(msg);
        }

      }
    });
    return false;
  	});



	
})