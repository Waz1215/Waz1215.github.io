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


$(document).ready(function(){
	customCarouselPartner();
});