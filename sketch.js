var points = [];
var numPoints = 200;

function setup() {
	createCanvas(window.innerWidth,window.innerHeight);
	makeName();
	// for(var i = 0; i < numPoints; i++)
	// 	points.push(new PagePoint(Math.random()*width, Math.random()*height, randomCons(numPoints)));
	background(0);
	showCons();
	// showPoints();
}

function draw() {
	background(0);
	// showPoints();
	showCons();
	updatePoints();

}

function updatePoints(){
	for(i in points){
		points[i].moveToCenter();

		// Scary Mouse
		var distance = dist(mouseX, mouseY, points[i].cord[0], points[i].cord[1]);
		if (distance < height/4){
			var angle = Math.atan2(points[i].cord[1] - mouseY, points[i].cord[0] - mouseX);
			points[i].cord[0] = points[i].cord[0] + Math.cos(angle) * 20;
			points[i].cord[1] = points[i].cord[1] + Math.sin(angle) * 20;
		}
	}
}


function thickLine(num){
	var a = [];
	var thickness = 10;
	for(var i = 0; i < thickness; i++){
		a.push(num);
	}
	return a;
}

function randomCons(num){
	var a = [];
	var randNum = Math.floor(Math.random()*(num-1)/10);
	for(var i = 0; i<randNum; i++)
		a.push(Math.floor(Math.random()*(num-1)));
	return a;
}


function showPoints() {
	for(i in points){
		points[i].drawMe();
		//console.log(points[i]);
	}
}

function showCons(){
	stroke(255, 20);
	for(i in points){
		for(j in points[i].connections){
			line(points[i].cord[0], points[i].cord[1], points[points[i].connections[j]].cord[0], points[points[i].connections[j]].cord[1]);
		}
	}
}

class PagePoint{
	constructor(xPos, yPos, cons){
		this.size = 8;
		this.connections = cons;
		this.cord = [xPos, yPos];
		this.origin = [xPos,yPos];
	}
	
	// var cord = [xPos,yPos];
	// var connections = cons;
	// var size = Math.random()*40;

	drawMe(){
		fill(255, 200);
		ellipse(this.cord[0],this.cord[1],this.size,this.size);
	}

	moveToCenter(){
		if(this.cord != this.origin){
			var distance = dist(this.origin[0], this.origin[1], this.cord[0], this.cord[1]);
			var angle = Math.atan2(this.origin[1] - this.cord[1], this.origin[0] - this.cord[0]);
			this.cord[0] = this.cord[0] + Math.cos(angle) * distance/2;
			this.cord[1] = this.cord[1] + Math.sin(angle) * distance/2;
		}
	}
}


function makeName(){
	var lastOffset = .1;
	var firstOffset = .1;

	// L
	points.push(new PagePoint(width*(firstOffset + .1), height*.3, thickLine(1)));
	points.push(new PagePoint(width*(firstOffset + .1), height*.6, thickLine(2)));
	points.push(new PagePoint(width*(firstOffset + .15), height*.6, []));

	// O
	points.push(new PagePoint(width*(firstOffset + .175), height*.5, thickLine(4)));
	points.push(new PagePoint(width*(firstOffset + .2), height*.5, thickLine(5)));
	points.push(new PagePoint(width*(firstOffset + .2), height*.6, thickLine(6)));
	points.push(new PagePoint(width*(firstOffset + .175), height*.6, thickLine(3)));

	// G
	points.push(new PagePoint(width*(firstOffset + .225), height*.5, thickLine(8)));
	points.push(new PagePoint(width*(firstOffset + .25), height*.5, thickLine(9)));
	points.push(new PagePoint(width*(firstOffset + .25), height*.6, thickLine(10)));
	points.push(new PagePoint(width*(firstOffset + .225), height*.6, thickLine(7)));

	// A
	points.push(new PagePoint(width*(firstOffset + .275), height*.5, thickLine(12)));
	points.push(new PagePoint(width*(firstOffset + .3), height*.5, thickLine(13)));
	points.push(new PagePoint(width*(firstOffset + .3), height*.6, thickLine(14)));
	points.push(new PagePoint(width*(firstOffset + .275), height*.6, thickLine(11)));

	// N
	points.push(new PagePoint(width*(firstOffset + .325), height*.5, thickLine(16)));
	points.push(new PagePoint(width*(firstOffset + .35), height*.5, thickLine(17)));
	points.push(new PagePoint(width*(firstOffset + .35), height*.6, []));
	points.push(new PagePoint(width*(firstOffset + .325), height*.6, thickLine(15)));
	
	// G and A bits
	points.push(new PagePoint(width*(firstOffset + .3), height*.6125, thickLine(13))); // a-line
	points.push(new PagePoint(width*(firstOffset + .25), height*.7, thickLine(9)));
	points.push(new PagePoint(width*(firstOffset + .225), height*.7, thickLine(20))); //21

	// M
	points.push(new PagePoint(width*(lastOffset + .4), height*.6, thickLine(23)));
	points.push(new PagePoint(width*(lastOffset + .4), height*.3, thickLine(24)));
	points.push(new PagePoint(width*(lastOffset + .425), height*.45, thickLine(25)));
	points.push(new PagePoint(width*(lastOffset + .45), height*.3, thickLine(26)));
	points.push(new PagePoint(width*(lastOffset + .45), height*.6, []));

	// C
	points.push(new PagePoint(width*(lastOffset + .475), height*.5, thickLine(29)));
	points.push(new PagePoint(width*(lastOffset + .5), height*.5, thickLine(27)));
	points.push(new PagePoint(width*(lastOffset + .475), height*.6, thickLine(30)));
	points.push(new PagePoint(width*(lastOffset + .5), height*.6, []));

	// G
	points.push(new PagePoint(width*(lastOffset + .575), height*.3, thickLine(32))); //31
	points.push(new PagePoint(width*(lastOffset + .525), height*.3, thickLine(33)));
	points.push(new PagePoint(width*(lastOffset + .525), height*.6, thickLine(34)));
	points.push(new PagePoint(width*(lastOffset + .575), height*.6, thickLine(35)));
	points.push(new PagePoint(width*(lastOffset + .575), height*.5, thickLine(36)));
	points.push(new PagePoint(width*(lastOffset + .55), height*.5, []));

	// H
	points.push(new PagePoint(width*(lastOffset + .6), height*.3, thickLine(38)));
	points.push(new PagePoint(width*(lastOffset + .6), height*.6, []));
	points.push(new PagePoint(width*(lastOffset + .6), height*.5, thickLine(40)));
	points.push(new PagePoint(width*(lastOffset + .625), height*.5, thickLine(41)));
	points.push(new PagePoint(width*(lastOffset + .625), height*.6, []));

	// E
	points.push(new PagePoint(width*(lastOffset + .65), height*.55, thickLine(43)));
	points.push(new PagePoint(width*(lastOffset + .675), height*.55, thickLine(44)));
	points.push(new PagePoint(width*(lastOffset + .675), height*.5, thickLine(45)));
	points.push(new PagePoint(width*(lastOffset + .65), height*.5, thickLine(46)));
	points.push(new PagePoint(width*(lastOffset + .65), height*.6, thickLine(47)));
	points.push(new PagePoint(width*(lastOffset + .675), height*.6, []));

	// E
	points.push(new PagePoint(width*(lastOffset + .7), height*.55, thickLine(49)));
	points.push(new PagePoint(width*(lastOffset + .725), height*.55, thickLine(50)));
	points.push(new PagePoint(width*(lastOffset + .725), height*.5, thickLine(51)));
	points.push(new PagePoint(width*(lastOffset + .7), height*.5, thickLine(52)));
	points.push(new PagePoint(width*(lastOffset + .7), height*.6, thickLine(53)));
	points.push(new PagePoint(width*(lastOffset + .725), height*.6, []));

}