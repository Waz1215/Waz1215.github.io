var W = window.innerWidth;
var H = window.innerHeight;

var mX=0; 
var mY=0;
var maxDistance=0;

$(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
}).mouseover(); 



$(document).ready(function(){
});

function makeSVG(tag, attrs) {
	var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
	for (var k in attrs)
		el.setAttribute(k, attrs[k]);
	return el;
}

var Blobs1 = [];
var Blobs2 = [];
var Blobs3 = [];

var BlobGroup = [
	Blobs1,
	Blobs2,
	Blobs3
];

var MODE = "normal";
var cur = 1;

var isChanging = false;

var num = 12;

var initPositions=[];


function changeAnim(n){
	$('#svg'+n).css('animation','fadeOut 1s ease-in-out 2s 1 forwards');
	setTimeout(function(){
		BlobGroup[cur-1].forEach(function(b){
			b.reset();
	 	});
	 	BlobGroup[cur-1].isChanging=false;
	 	// $('#svg'+n).css('opacity','1');
	 	$('#svg'+n).css('animation','');
	 	if (cur==1){
	 		$('#svg1').css('z-index','-3');
	 		$('#svg2').css('z-index','-1');
	 		$('#svg3').css('z-index','-2');
	 	}
	 	if (cur==2){
	 		$('#svg1').css('z-index','-2');
	 		$('#svg2').css('z-index','-3');
	 		$('#svg3').css('z-index','-1');
	 	}
	 	if (cur==3){
	 		$('#svg1').css('z-index','-1');
	 		$('#svg2').css('z-index','-2');
	 		$('#svg3').css('z-index','-3');
	 	}
		cur++;
		if (cur>3){cur=1;}
	},4000);
}

var Blob = function(group,n){
	this.n = n;
	this.group = group;
	this.id = "b"+n+"_"+group;
	
	this.posX = initPositions[n].x;
	this.posY = initPositions[n].y;
	this.size = initPositions[n].size;
	this.xoff = initPositions[n].xoff;
	this.yoff = initPositions[n].yoff;

	this.angle = 0;
	this.speed = 15;
	this.mode = 'idle';

	this.active=true;
	

	this.init = function(index){
		var circle= makeSVG('circle', {id:this.id, cx: this.posX, cy: this.posY, r:this.size, stroke: 'black', 'stroke-width': 0, fill: 'white'});
    	document.getElementById("masking"+index).append(circle);

	}

	this.draw=function(){
		var distance = int(dist(this.posX,this.posY,mX,mY));

		if ( cur==this.group && (distance<this.size + 10 || BlobGroup[cur-1].mode=='avoid')){
			BlobGroup[cur-1].mode='avoid'
			MODE='avoid';
			this.speed = map(distance,0,W/2,15,0.1);
			this.angle = atan2(this.posY-mY,this.posX-mX);
			this.posX+=cos(this.angle)*this.speed;
			this.posY+=sin(this.angle)*this.speed;

			if (!BlobGroup[cur-1].isChanging){
				BlobGroup[cur-1].isChanging=true;
				changeAnim(this.group);
			}


		}

		else{
			this.posX=initPositions[this.n].x;
			this.posY=initPositions[this.n].y;
			this.speed=15;
		}
			
		this.speed=constrain(this.speed-3,0.1,20);
		// constrain(this.speed,0,20);
		this.xoff+=1;
		this.yoff+=1;

		$('#'+this.id).attr('cx',this.posX);
		$('#'+this.id).attr('cy',this.posY);
	}

	this.reset = function(){
		this.posX = initPositions[n].x;
		this.posY = initPositions[n].y;
		this.size = initPositions[n].size;
		this.xoff = initPositions[n].xoff;
		this.yoff = initPositions[n].yoff;

		this.angle = 0;
		this.speed = 15;
		this.mode = 'idle';

		this.active=false;
		console.log("RESET");
	}

}


function setup(){
	angleMode(DEGREES);
	maxDistance= dist(0,0,W,H);
	setFrameRate(60);

	for (var i = 0; i < num; i++){
		initPositions[i]={
			x:random(W*2/3,W-100),
			y:random(H/3,H*2/3),
			size:random(100,150),
			xoff:random(0,360),
			yoff:random(0,360)
		}
	}

	Blobs1.mode='idle';
	Blobs2.mode='idle';
	Blobs3.mode='idle';

	Blobs1.isChanging=false;
	Blobs2.isChanging=false;
	Blobs3.isChanging=false;
	
	for (var i = 0; i < num; i++){
		Blobs1.push(new Blob(1,i));
		Blobs1[i].init(1);
	}
	for (var i = 0; i < num; i++){
		Blobs2.push(new Blob(2,i));
		Blobs2[i].init(2);
	}
	for (var i = 0; i < num; i++){
		Blobs3.push(new Blob(3,i));
		Blobs3[i].init(3);
	}
}

function draw() {

	for (var i = 0; i < num; i++){
		initPositions[i].xoff+=1;
		initPositions[i].yoff+=1;
		initPositions[i].x+=cos(initPositions[i].xoff)/5;
		initPositions[i].y+=sin(initPositions[i].yoff)/5;

	}

		
	Blobs1.forEach(function(b){
		b.draw();
	});
	Blobs2.forEach(function(b){
		b.draw();
	});
	Blobs3.forEach(function(b){
		b.draw();
	});

	// if (BlobGroup[cur-1].mode=='avoid'){
	// 	changeAnim(cur);
	// 	cur++;
	// 	BlobGroup[cur-1].mode=='idle';
	// 	setTimeout(function(){
	// 		BlobGroup[cur-1].forEach(function(b){
	// 			//b.reset();
	// 		});
	// 		// cur++;
	// 		// if (cur>3){cur=1;}
	// 		console.log(cur);
	// 		MODE='normal';
	// 	},4000);
	// }
	// MODE = 'normal';
}