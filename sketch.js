var points = [];
var numPoints = 200;

function setup() {
	createCanvas(window.innerWidth,window.innerHeight);
	for(var i = 0; i < numPoints; i++)
		points.push(new PagePoint(Math.random()*width, Math.random()*height, randomCons(numPoints)));
	//points.push(new PagePoint(Math.random()*width, Math.random()*height, [0,1,2,3,4,5,6,7]));
	background(0);
	showCons();
}

function randomCons(num){
	var a = [];
	var randNum = Math.floor(Math.random()*(num-1)/10);
	for(var i = 0; i<randNum; i++)
		a.push(Math.floor(Math.random()*(num-1)));
	return a;
}

function draw() {
	//background(0);
	//showPoints();
	// showCons();
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
		this.size = Math.random()*20;
		this.connections = cons;
		this.cord = [xPos, yPos];
	}
	
	// var cord = [xPos,yPos];
	// var connections = cons;
	// var size = Math.random()*40;

	drawMe(){
		fill(255, 200);
		ellipse(this.cord[0],this.cord[1],this.size,this.size);
	}

	drawConnections(){
		for(i in connections){
			console.log(connections[i]);
		}
	}
}