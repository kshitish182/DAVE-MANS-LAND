let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = '1000';
canvas.height = '500';
canvas.style.border ='1px solid black';
canvas.style.position = 'absolute';
canvas.style.margin = 'auto';
canvas.style.left = '0';
canvas.style.right = '0';

class Game{
	constructor(canvasWidth, canvasHeight){
		this.canvas = getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.canvas.width = canvasWidth;
		this.canvas.height = canvasHeight;

		//styling and positioning canvas
		this.canvas.style.position = 'absolute';
		this.canvas.style.margin = 'auto';
		this.canvas.style.left = '0';
		this.canas.style.right = '0';
		this.canvas.style.border = '1px solid black';	
	}
}
let sprite = new Image();
sprite.src = 'assets/images/red-brick.png';

let blank = new Image();
blank.src = 'assets/images/empty-space.png';

let spriteHeight = 64;
let spriteWidth = 72;
let imageCounter = 0;
let clipImageX = 0;
let clipImageY = 0;

let map = [
					1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
					1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
					1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
					1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,
					1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
					1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,
					1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
					1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,
					1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
					1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

// document.addEventListener('keydown', event =>{
// 	if(event.code === 'ArrowRight'){
// 		console.log('here');
// 		ctx.drawImage(sprite,clipImageX ,clipImageY,72,64, 100 , 100, 72,64);  //, 72, 64, 100, 100, 72 , 64);
//  	}
//  	clipImageX += 60;
//  	imageCounter++;
// });

function animate(){
	drawMap();
	window.requestAnimationFrame(animate);
}

let count = 0;
	let startPosX = 0;
  let startPosY = 0;

function drawMap(){
	for(let i = 0 ; i < 10 ; i++){
		for(let j = 0 ; j< 20 ; j++){
			if(map[((i*20) + j)] === 1){
				ctx.drawImage(sprite , j*50 , i*50 , 50,50 );
			}else if(map[((i*20) + j)] === 0){
				ctx.drawImage(blank , j*50 , i*50 , 50, 50);
			}
		}
	}
}


animate();