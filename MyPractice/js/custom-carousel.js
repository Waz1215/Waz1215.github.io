function customCarouselPartner(){

	var count = 0;
	var total = $(".partners .custom-carousel .img-block").length;
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


function customCarouselFeature(){

	var count = 0;
	var total = $(".featured-in .custom-carousel .img-block").length;
	var width = Math.ceil($(".featured-in .custom-carousel .img-block").width());
	var pos = 0;
	var loading = false;
	$(".featured-in .custom-carousel .img-block").css("width", width+"px");

	$(".featured-in .carousel-control-next").click(()=>{
		var loading = true;

		$(".featured-in .carousel-control-next").css("pointer-events", "none");
		$(".featured-in .carousel-control-prev").css("pointer-events", "none");

		pos+=width;
		$(".featured-in .custom-carousel").css("transform", "translateX("+(pos*-1)+"px)");

		var last = $(".featured-in .custom-carousel .img-block").eq(0);
		var clone = last.clone();


		$(".featured-in .custom-carousel").append(clone); 

		setTimeout( () => { 
			
			last.detach();
			$(".featured-in .custom-carousel").css("left", pos+"px");
			$(".featured-in .carousel-control-next").css("pointer-events", "initial");
			$(".featured-in .carousel-control-prev").css("pointer-events", "initial");
			
		}, 1000);

	});

	$(".featured-in .carousel-control-prev").click(()=>{
		var loading=true;
		$(".featured-in .carousel-control-next").css("pointer-events", "none");
		$(".featured-in .carousel-control-prev").css("pointer-events", "none");

		pos-=width;
		
		
		$(".featured-in .custom-carousel").css("transform", "translateX("+(pos*-1)+"px)");

		var last = $(".featured-in .custom-carousel .img-block").eq(count-1);
		var clone = last.clone();
		$(".featured-in .custom-carousel").css("left", pos+"px");


		$(".featured-in .custom-carousel").prepend(clone); 

		setTimeout( () => { 
			
			last.detach();
			$(".featured-in .carousel-control-next").css("pointer-events", "initial");
			$(".featured-in .carousel-control-prev").css("pointer-events", "initial");
			
			
		}, 1000);
		
	});

}

/*
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
*/

    //Keep Track of Next Video to be Played so it can be Negated
    var cur = null;
    var duration = null;
  	var videos = [...document.getElementsByClassName("feature-section")];
  	var videoMobile = [...document.getElementsByClassName("feature-section-mobile")];
    var titles = ["Scripts.mp4",  "Referrals.mp4", "Bookings.mp4", "News.mp4" ];
    var sources = [];
    var index = 0;

    //Play Video on Click
  	videos.forEach((x,i) =>{
  		x.onclick = function(){
        index = i;
        $('#key-features-carousel').carousel(i);
  		if (cur) clearTimeout(cur);
  		reset(changeVid.bind(null,i));
  		}
  	});
  	

    //Reset Progress Bars back to 0%
  	function reset(f){
	  	videos.forEach(x =>{
	  		$(x).removeClass("active");
	  		$(x).addClass("inactive");
	  		var curVid = x.getElementsByClassName("progress-bar")[0];
	  		curVid.style.width = "0%";
  			curVid.style.transitionDuration = "0s";
	  	});
	  	videoMobile.forEach(x =>{
	  		$(x).removeClass("active");
	  		$(x).addClass("inactive");
	  		var curVid = x.getElementsByClassName("progress-bar")[0];
	  		curVid.style.width = "0%";
  			curVid.style.transitionDuration = "0s";
	  	});
      //Small Delay to Avoid Batching CSS Changes
      if (f) setTimeout(f,1);
  	}

     //Change Video
    function changeVid(i){
      //Swap Video Source
      var vid = document.getElementById("iPhoneDemo");
      vid.querySelectorAll('*').forEach(n => n.remove());
      vid.appendChild(sources[index]);

      //Load VIdeo
      vid.load();

      vid.ondurationchange = function() {
        duration = vid.duration;     
        playVid(i);   
      };
      vid.oncanplay = function() {

      }
    }

    //Play Video and Load Progress Bar
  	function playVid(i){

  	  //Toggle Active or Inactive
  	  $(videos[i]).addClass("active");
	  $(videos[i]).removeClass("inactive");
      //Begin Progress Bar
      var x = videos[i].getElementsByClassName("progress-bar")[0];
      var y = videoMobile[i].getElementsByClassName("progress-bar")[0];
      if (duration){
        x.style.width = "100%";
        x.style.transitionDuration = `${duration}s`;
        y.style.width = "100%";
        y.style.transitionDuration = `${duration}s`;
      } 

  		
      //Reference to Function to Switch to Next Video
  		cur = setTimeout(function(){
        reset(null);
        index = index == 3 ? 0 : index + 1;
        videos[index].click();
        if ($('#key-features-carousel').css("display") != "none") $('#key-features-carousel').carousel('next');
  		}, (duration || 2) * 1000);
  	}

    window.onload = function(){
      [...document.getElementsByClassName("feature-section")][0].click();
      titles.forEach(x =>{
        var s = document.createElement('source');
        s.src = `img/videos/${x}`;
        sources.push(s);
      });
    }
	
	//Carousel Version for Mobile View
	$('#key-features-carousel').on('slid.bs.carousel', function () {
		var ci = $('div.carousel-item.active').index();
		if ($('#key-features-carousel').css("display") != "none") videos[ci].click();
	});




$(document).ready(function(){
	customCarouselPartner();
	customCarouselFeature();
	// cycleVideos();
});

// window.addEventListener("resize", function(){
// 	console.log("RESIZE");
// 	customCarouselPartner();
// 	customCarouselFeature();
// });