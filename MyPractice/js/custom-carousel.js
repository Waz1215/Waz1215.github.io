function customCarouselPartner(){

	var count = 0;
	var total = $(".partners .custom-carousel .img-block").length;
	console.log(total);
	var width = Math.ceil($(".partners .custom-carousel .img-block").width());
	var pos = 0;
	var loading = false;
	$(".partners .custom-carousel .img-block").css("width", width+"px");

	$(".partners .carousel-control-next").click(()=>{
		var loading = true;

		$(".partners .carousel-control-next").css("pointer-events", "none");
		$(".partners .carousel-control-prev").css("pointer-events", "none");

		pos+=width;
		$(".partners .custom-carousel").css("transform", "translateX("+(pos*-1)+"px)");

		var last = $(".partners .custom-carousel .img-block").eq(0);
		var clone = last.clone();


		$(".partners .custom-carousel").append(clone); 

		setTimeout( () => { 
			
			last.detach();
			$(".partners .custom-carousel").css("left", pos+"px");
			$(".partners .carousel-control-next").css("pointer-events", "initial");
			$(".partners .carousel-control-prev").css("pointer-events", "initial");
			
		}, 1000);

	});

	$(".partners .carousel-control-prev").click(()=>{
		var loading=true;
		$(".partners .carousel-control-next").css("pointer-events", "none");
		$(".partners .carousel-control-prev").css("pointer-events", "none");

		pos-=width;
		
		
		$(".partners .custom-carousel").css("transform", "translateX("+(pos*-1)+"px)");

		var last = $(".partners .custom-carousel .img-block").eq(count-1);
		var clone = last.clone();
		$(".partners .custom-carousel").css("left", pos+"px");


		$(".partners .custom-carousel").prepend(clone); 

		setTimeout( () => { 
			
			last.detach();
			$(".partners .carousel-control-next").css("pointer-events", "initial");
			$(".partners .carousel-control-prev").css("pointer-events", "initial");
			
			
		}, 1000);
		
	});
}

var videoIndex = 3;
function cycleVideos(){
	var override = false;

	$(".feature-section").click(function(){ 
		override = true;
		ids[videoIndex].css("transition-duration",  0 + "s");
		sections[videoIndex].removeClass("active");
    	sections[videoIndex].addClass("inactive");
    	ids[videoIndex].css("width",  "0%");
		videoIndex = $(this).data('index');
		video.children[0].src = `img/videos/${sources[videoIndex]}.mp4`;
    	video.load();
	});

	var sources = ["Scripts",  "Referrals", "Bookings", "News" ];
	var ids = [$("#access .progress-bar"), $("#referrals .progress-bar"), $("#bookings .progress-bar"), $("#news .progress-bar") ];
	var sections = [$("#access"), $("#referrals"), $("#bookings"), $("#news") ];
	var video = $("#iPhoneDemo")[0];
	var length = 12;

	video.load();
	video.onloadedmetadata = function() {

	  //override = false;
	  length = video.duration;
	  video.play();
	  sections[videoIndex].removeClass("inactive");
	  sections[videoIndex].addClass("active");
	  ids[videoIndex].css("transition-duration",  length + "s");
	  ids[videoIndex].css("width",  "100%");
	  timeout(length);
	};

	var timeout = function(l){
		
	    	setTimeout(function () {
	    		if (override) {
	    			override = false;
	    			return;
	    		}
	    		console.log("OVERRIDE ", override);
	    		ids[videoIndex].css("transition-duration",  0 + "s");
	    		sections[videoIndex].removeClass("active");
	    		sections[videoIndex].addClass("inactive");
	    		ids[videoIndex].css("width",  "0%");
	    		videoIndex = videoIndex == 3 ? 0 : videoIndex + 1;
	    		video.children[0].src = `img/videos/${sources[videoIndex]}.mp4`;
	    		video.load();
	    	}, l * 1000);			
	}
	timeout();

}
	
	// setTimeout(function(){console.log("DONE")}, video[0].duration * 1000);




$(document).ready(function(){
	customCarouselPartner();
	cycleVideos();
});