
let controller = [false, false, false];   //[leftArrow upArrow rightArrow]

// let spriteInitialX = 0;
// let spriteInitialY = 0;
let spriteHeroInitialX = 0;
let spriteHeroInitialY = 0;
let countSpriteImage = 0;
let countSpriteImageHero = 0;
let heroPositionX = 100;
let heroPositionY = 400;
let directionX = 5;
let directionY = 5;

class Game{
	constructor(canvasWidth, canvasHeight , tileMap){
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.canvas.width = canvasWidth;
		this.canvas.height = canvasHeight;

		//styling and positioning canvas
		this.canvas.style.position = 'absolute';
		this.canvas.style.margin = 'auto';
		this.canvas.style.left = '0';
		this.canvas.style.right = '0';
		this.canvas.style.border = '1px solid black';	

		this.tileMap = tileMap;

		this.mapLevel1 = new Map(this.tileMap.level1);

	}

	// levelController(){
	// 	let mapLevel1 = new Map(this.tileMap.level1);
	// }

animate(){
	this.mapLevel1.drawMap(this.ctx);
	this.hero();
	// this.eventController();
	window.requestAnimationFrame(() => this.animate());
}

hero(){
	this.moveHero();
	this.renderHero();
}

renderHero(){
	this.ctx.fillStyle = "#FF0000";
	this.ctx.fillRect(heroPositionX , heroPositionY , 50 , 50);
}

moveHero(){
	// console.log('x', heroPositionX , 'y' , heroPositionY);
	if(controller[0]  && controller[1]){
		heroPositionX -= directionX;
		heroPositionY -= directionY;
	}
	else if(controller[1] && controller[2]){
		heroPositionY -= directionY;
		heroPositionX += directionX;
	}
	else if(controller[0]){
		heroPositionX -= directionX; 
	}
	else if(controller[1]){
		heroPositionY -= directionY;
	}
	else if(controller[2]){
		heroPositionX += directionX;
	}else{
		heroPositionY += directionX/4;
	}
}

	eventController(){
		document.addEventListener('keydown', event => {
			if(event.code === 'ArrowRight'){
				controller[2] = true;
			}
			if(event.code === 'ArrowLeft'){
				controller[0] = true;
			}
			if(event.code === 'ArrowUp'){
				controller[1] = true;
			}
			console.log(controller);
		});

		document.addEventListener('keyup', event =>{
				controller = [false , false , false];
			
		});
	}
}

let game = new Game(1000 , 500 , mapLayouts);

game.eventController();
game.animate();




