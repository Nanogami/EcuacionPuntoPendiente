function setup()
 {
	createCanvas(windowWidth, windowHeight);
	p1A = {x: 0, y : 0}
	p1B = {x: windowWidth, y : windowHeight}
	p2A = { x:0,y:windowHeight }
	p2B = { x:windowWidth , y:0 }
	p3A = {x: floor(windowWidth/2), y: 0}
	p3B = {x:floor(windowWidth/2), y : windowHeight}
	p4A = {x:0, y: floor(windowHeight/2)}
	p4B = {x:windowWidth, y: floor(windowHeight/2)}
}

function draw(){
	epp(p1A,p1B)
	epp(p2A,p2B)
	epp(p3A,p3B)
	epp(p4A,p4B)
}

function epp(p1,p2){
	const dx = p2.x - p1.x
	const dy = p2.y - p1.y
	const m = dy / dx
	const b = p1.y - m * p1.x
	point(p1.x , p1.y)
	
	if(p1.x===p2.x){
		let y = p1.y + 1
		while(y!=p2.y)
		{
			point(p1.x,y)
			y++
		}
	}
	else{
		let x = p1.x + 1
		let y
		while(x != p2.x){
			y = m * x + b
			point(x, y)
			x++
		}
	}
}