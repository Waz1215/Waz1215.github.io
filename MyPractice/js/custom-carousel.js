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
  		reset(changeVid.bind(null,i));
  		}
  	});
  	

    //Reset Progress Bars back to 0%
  	function reset(f){
	  	videos.forEach(x =>{
	  		$(x).removeClass("active");
	  		$(x).addClass("inactive");
	  		var curVid = x.getElementsByClassName("progress-bar")[0];
	  		curVid.style.animation = "none";
	  	});
	  	videoMobile.forEach(x =>{
	  		$(x).removeClass("active");
	  		$(x).addClass("inactive");
	  		var curVid = x.getElementsByClassName("progress-bar")[0];
	  		curVid.style.animation = "none";
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

      //Update Duration
      vid.ondurationchange = function() {
        duration = vid.duration;     
       
      };

      //Begin Progress Bar Animation
      vid.oncanplay = function() {
         playVid(i);   
      }

      var x = videos[i];
      var y = videoMobile[i]
      //If Paused, Halt Progress Bar
      vid.onpause = function(){
        x.getElementsByClassName("progress-bar")[0].style.animationPlayState="paused";
        y.getElementsByClassName("progress-bar")[0].style.animationPlayState="paused";
      }
	  vid.onsuspend = function() {
      	// x.getElementsByClassName("progress-bar")[0].style.animationPlayState="paused";
       //  y.getElementsByClassName("progress-bar")[0].style.animationPlayState="paused";
	  };

      //Resume Progress Bar on Play
      vid.onplay = function(){
        x.getElementsByClassName("progress-bar")[0].style.animationPlayState="running";
        y.getElementsByClassName("progress-bar")[0].style.animationPlayState="running";
      }

      vid.onplaying = function() {
        x.getElementsByClassName("progress-bar")[0].style.animationPlayState="running";
        y.getElementsByClassName("progress-bar")[0].style.animationPlayState="running";
	  };	

      //Video is over, reset progress bar and play next
      vid.onended = function() {
        reset(null);
        index = index == 3 ? 0 : index + 1;
        videos[index].click();
      };
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
        x.style.animation = `grow ${duration}s 1`;  
        y.style.animation = `grow ${duration}s 1`;     
      } 

  	}

    window.onload = function(){
      [...document.getElementsByClassName("feature-section")][0].click();
      titles.forEach(x =>{
        var s = document.createElement('source');
        s.src = `img/videos/${x}`;
        sources.push(s);
      });
    }

    $('body').on('touchstart', function () {
            const videoElement = document.getElementById("iPhoneDemo");
            if (videoElement.playing) {
                // video is already playing so do nothing
            }
            else {
                // video is not playing
                // so play video now
                videoElement.play();
            }
    });
	
	//Carousel Version for Mobile View
	$('#key-features-carousel').on('slid.bs.carousel', function () {
		var ci = $('div.carousel-item.active').index();
		if ($('#key-features-carousel').css("display") != "none") videos[ci].click();
	});


function scrollTo(){
	$('.hero-btn').click(function(){
		
		$('html,body').animate({
	        scrollTop: $(".key-features").offset().top - 100
	    }, 500);
	});
}

function resizeHeader(){
	
	setInterval(function(){ 
		if (window.scrollY > 60){
			$(".header").addClass("shrink");
		}
		else{
			$(".header").removeClass("shrink");
		}
	}, 100);
}



$(document).ready(function(){
	customCarouselPartner();
	customCarouselFeature();
	scrollTo();
	resizeHeader();
	history.scrollRestoration = "manual"
});

