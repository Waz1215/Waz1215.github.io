	var W = window.innerWidth;
	var H = $("nav").height()+$("#home").height();
	var cam;
	var State;
	var Scene1;
	var Particles = [];

	
	var images = function(){
		this.logo;
	}

	 function preload() {
	  	images.hexagon = loadImage("../img/hexagon.png");
	}

	var particle = function(color){
		this.posX = random(W/3,W);
		this.posY = random(-100,H+100);
		this.size = random(10,60);
		this.dir = random(0,180);
		this.Xspeed= random(0.1,1);
		this.Yspeed= random(0.1,1);
		this.opacity = random(1,1);
		this.fadeVal = random(0.004,0.008)*-1;
		this.color=color;
		this.mode="normal";

		this.draw = function(){
			if (this.opacity>0){
			noStroke();
			if (this.color=="blue"){
				fill("rgba(0,118,190,"+this.opacity+")");
			}
			if (this.color=="lightBlue"){
				fill("rgba(0,168,250,"+this.opacity+")");
			}
			if (this.color=="gray"){
				fill("rgba(0,50,100,"+this.opacity+")");
			}
			if (int(dist(this.posX,this.posY,mouseX,mouseY))<100+this.size){
				// this.dir = atan2(this.posY-mouseY,this.posX-mouseX);
				this.dir = atan2(this.posY-mouseY,this.posX-mouseX);
				this.Xspeed = map(abs(mouseX-this.posX),0,100+this.size,8,2);
				this.Yspeed = map(abs(mouseY-this.posY),0,100+this.size,8,2);
				this.mode="avoid";
				
			}
			else{
				if (this.mode=="avoid" ){
					this.Xspeed= random(0.1,1);
					this.Yspeed= random(0.1,1);
					this.mode="normal";
				}
				
			}
			circle(this.posX,this.posY,this.size);
			this.posX+=cos(this.dir)*this.Xspeed;
			this.posY+=sin(this.dir)*this.Yspeed;

			}

			// this.opacity-=this.fadeVal;
			
			if (this.opacity<-0.5){
				this.reset();
			}
			if (this.opacity>0.8){
				this.fadeVal=-this.fadeVal;
			}
		}
		this.reset = function(){
			this.posX = random(W/3,W);
			this.posY = random(-100,H+100);
			this.size = random(10,60);
			this.dir = random(0,180);
			this.Xspeed= random(0.1,0.5);
			this.Yspeed= random(0.1,0.5);
			this.fadeVal = -this.fadeVal;
		}
	}

	var hexagon = function(){
		this.size = random(0.2,0.8);
		this.speed = random(-0.5,0.5);
		this.angle = random(0,360);
		this.posX = random(W/3,W);
		this.posY = random(-100,H);
		this.dir = random(0,180);
		this.Xspeed= random(0.1,0.5);
		this.Yspeed= random(0.1,0.5);
		this.opacity = random(-0.5,0.9);
		this.fadeVal = random(0.004,0.008)*-1;

		this.draw = function(){
			if (this.opacity>0){
			noStroke();
			if (int(dist(this.posX,this.posY,mouseX,mouseY))<200+this.size){
				// this.dir = atan2(this.posY-mouseY,this.posX-mouseX);
				this.dir = atan2(this.posY-mouseY,this.posX-mouseX);
				this.Xspeed = map(abs(mouseX-this.posX),0,200+this.size,8,2);
				this.Yspeed = map(abs(mouseY-this.posY),0,200+this.size,8,2);
				this.mode="avoid";
				
			}
			else{
				if (this.mode=="avoid"){
					this.Xspeed= random(0.1,0.5);
					this.Yspeed= random(0.1,0.5);
					this.mode="normal";
				}
				
			}
			push();
				translate(this.posX,this.posY);
				scale(this.size);
				rotate(this.angle);
				
				image(images.hexagon,0,0);
			pop();
			this.angle+=this.speed;
			this.posX+=cos(this.dir)*this.Xspeed;
			this.posY+=sin(this.dir)*this.Yspeed;

			}

			// this.opacity-=this.fadeVal;
			
			if (this.posX< W/3 || this.posX>W || this.posY< -100 || this.posY>H+400){
				this.reset();
			}
		}
		this.reset = function(){
			this.size = random(0.2,0.8);
			this.speed = random(-0.5,0.5);
			this.posX = random(W/3,W);
			this.posY = random(-100,H);
			this.dir = random(0,180);
			this.Xspeed= random(0.1,0.5);
			this.Yspeed= random(0.1,0.5);
			this.fadeVal = -this.fadeVal;
		}
	}

	function setup() {
		
		angleMode(DEGREES);

	  	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	  	canvas.parent('bgcontainer');
	  
		ellipseMode(CENTER);
		imageMode(CENTER);
	  	strokeWeight(1);
	  	stroke(100);

	  	State="";

	  	for (var i = 0; i < 60; i++){
	  		Particles.push(new particle("blue"));
	  	}
	  	for (var i = 0; i < 40; i++){
	  		Particles.push(new particle("lightBlue"));
	  	}
	  	// for (var i = 0; i < 20; i++){
	  	// 	Particles.push(new particle("gray"));
	  	// }
	  	// for (var i = 0; i < 20; i++){
	  	// 	Particles.push(new hexagon());
	  	// }
	  	
	}


	function draw() {
		background("rgba(255,255,255,1)");
		Particles.forEach(function(p){
			p.draw();
		})
		// image(images.hexagon,mouseX,mouseY);


	}





