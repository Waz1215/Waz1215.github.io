var W = window.innerWidth;
var H = window.innerHeight;
var cam;
var State;
var Scene1;



	
var images = function(){
	
}

function preload() {
	
}

var initPositions=[];
var len = 15;


var particle = function(P,color,i){
	this.i = i;
	this.posX = initPositions[i].posX;
	this.posY = initPositions[i].posY;
	this.xOff = initPositions[i].xOff;
	this.yOff = initPositions[i].yOff;
	this.size = initPositions[i].size;
	this.dir = initPositions[i].dir;
	this.Xspeed = initPositions[i].speed;
	this.Yspeed = initPositions[i].speed;
	this.opacity = P.random(1,1);
	this.fadeVal = P.random(0.004,0.008)*-1;
	this.color = "blue";
	this.mode ="normal";

	
	this.draw = function(index,group){
		if (this.opacity>0){
			P.noStroke();
			if (this.color=="blue"){
				P.fill(0,0,0);
			}
			if (this.color=="red"){
				P.fill(255,0,0);
			}
			if (this.color=="green"){
				P.fill(0,255,0);
			}
			if (P.int(P.dist(this.posX,this.posY,P.mouseX,P.mouseY))<20+this.size && canMove){
				this.dir = P.atan2(this.posY-P.mouseY,this.posX-P.mouseX);
				this.dir = P.atan2(this.posY-P.mouseY,this.posX-P.mouseX);
				this.Xspeed = P.map(P.abs(P.mouseX-this.posX),0,20+this.size,20,2);
				this.Yspeed = P.map(P.abs(P.mouseY-this.posY),0,20+this.size,20,2);
				this.mode="avoid";	
				
				this.posX+=P.cos(this.dir)*this.Xspeed;
				this.posY+=P.sin(this.dir)*this.Yspeed;
				if (!isChanging){
					console.log("CHANGING");
					setTimeout(function(){changeAnim(index);},3000);
					setTimeout(function(){resetAnim(index);},6000);
					setTimeout(function(){setCur(index);},4000);
					setTimeout(function(){canMove=true;},6500);
					setTimeout(()=>{
						for (var i = 0; i < len; i++){
							group[i].reset();
						}
						canMove=false;
					},4000);
					isChanging=true;
				}
				
			}
			else{
				if (this.mode!="avoid" ){
					this.posX=initPositions[this.i].posX;
					this.posY=initPositions[this.i].posY;
				}
				else{
					this.Xspeed=P.constrain(this.Xspeed-0.05,1,20);
					this.Yspeed=P.constrain(this.Yspeed-0.05,1,20);
					this.posX+=P.cos(this.dir)*this.Xspeed;
					this.posY+=P.sin(this.dir)*this.Yspeed;
				}
			}
			P.circle(this.posX,this.posY,this.size);
		}


		if (this.opacity<-0.5){
			this.reset();
		}
		if (this.opacity>0.8){
			this.fadeVal=-this.fadeVal;
		}
	}
	this.reset = function(){
		this.posX = initPositions[this.i].posX;
		this.posY = initPositions[this.i].posY;
		this.xOff = initPositions[this.i].xOff;
		this.yOff = initPositions[this.i].yOff;
		this.size = initPositions[this.i].size;
		this.dir = initPositions[this.i].dir;
		this.Xspeed= initPositions[this.i].speed;
		this.Yspeed= initPositions[this.i].speed;
		this.mode="normal";
	}
}


var cur = 1;
var canMove = true;
var isChanging = false;
var colors = ["blue","red","green"];


function changeAnim(n){
	$("#interactiveCover").css('animation',"");
	$("#interactiveCover").css('animation',"fadeIn 1s linear 0s 1 forwards, fadeOut 1s linear 2s 1 forwards");
}

function resetAnim(){
	$("#interactiveCover").css('animation',"");
}

function setCur(n){
	cur++;
	if (cur>3){cur=1;}
	isChanging=false;

	// $("#interactive1").attr('src',"img/placeholder"+cur+".jpg");
}

// Canvas 1
var Canvas1 = function( p ) { // p could be any variable name

	p.Particles = [];

	for (var i = 0; i < len; i ++){
		initPositions[i]={
			posX: p.random(W*3/5,W-100),
			posY: p.random(H/3,H*3/4),
			size: p.random(150,300),
			speed: p.random(0.1,1),
			xOff: p.random(0,360),
			yOff: p.random(0,360),
			dir: p.random(0,180)
		}
	}
	p.setup = function() {
    	var c = p.createCanvas(W, H);
    	c.parent('#interactiveContainer');
    	c.id('canvas1');

    	p.angleMode(p.DEGREES);
    	p.ellipseMode(p.CENTER);
		p.imageMode(p.CENTER);

		for (var i = 0; i < len; i++){
	  		p.Particles.push(new particle(p,"blue",i));
	  	}
 	 };

  	p.draw = function() {
  		for (var i = 0; i < len; i ++){
			initPositions[i].xOff++;
			initPositions[i].yOff++;
			initPositions[i].posX+=p.cos(initPositions[i].xOff)/5;
			initPositions[i].posY+=p.sin(initPositions[i].yOff)/5;
		}

		p.background(255);
		p.Particles.forEach(function(particle){
			// if (cur==1){
				particle.draw(1,p.Particles);
			// }
		});
  	};

  	p.windowResized = function() {
  		W = window.innerWidth;
  		H = window.innerHeight;
  		p.resizeCanvas(W, H);
	};

};
var myp5 = new p5(Canvas1, 'c1');



