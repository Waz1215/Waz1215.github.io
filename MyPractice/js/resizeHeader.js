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
	resizeHeader();
	history.scrollRestoration = "manual"
});

