
  //[leftArrow upArrow rightArrow]

// let spriteInitialPosX = 0;
// let spriteInitialPosY = 0;
let spriteHeroInitialX = 0;
let spriteHeroInitialY = 0;
let countSpriteImage = 0;
let countSpriteImageHero = 0;
let heroPositionX = 100;
let heroPositionY = 400;
// let directionX = 5;
// let directionY = 5;
 // let controller = {
	// 		upArrow : false,
	// 		leftArrow : false,
	// 		rightArrow : false
	// 	}

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
		
		this.frameCount =0;
		this.gameLevel = 1;
		

		//tracking the number of times the control button is pressed
		this.eventCounter = 0; 

		//creating objects
		this.mapLevels = new Map(this.tileMap.level1 , 20, 10 , this.ctx);
		this.hero = new Hero(heroPositionX , heroPositionY , this.ctx);
		this.trollELmObj  = new TrollElements(this.ctx , this.hero);

	}

	getMap(){
		switch(this.gameLevel){
			case 1:
			this.mapLevels.mapLevel = this.tileMap.level1;
			break;

			case 2:
			this.mapLevel = new Map(this.tileMap.level2 , this.ctx);
			this.mapLevel.tileWidth = 60;
		}
	}

	// levelController(){
	// 	let mapLevel1 = new Map(this.tileMap.level1);
	// }

animate(){
	this.getMap();
	this.mapLevel.drawMap();
	this.trollELmObj.renderTrollElements();
	this.hero.moveHero(this.buttonPress);
	this.hero.getElementsPosition(this.mapLevel) // scanning the tile map to check for collision
	// this.eventController();
	// console.log(controller);
	window.requestAnimationFrame(() => this.animate());
}

// hero(){
// 	this.moveHero();
// 	this.renderHero();
// }

// renderHero(){
// 	this.ctx.fillStyle = "#FF0000";
// 	this.ctx.fillRect(heroPositionX , heroPositionY , 50 , 50);
// }

// moveHero(){
// 	// console.log('x', heroPositionX , 'y' , heroPositionY);
// 	if(controller[0]  && controller[1]){
// 		heroPositionX -= directionX;
// 		heroPositionY -= directionY;
// 	}
// 	else if(controller[1] && controller[2]){
// 		heroPositionY -= directionY;
// 		heroPositionX += directionX;
// 	}
// 	else if(controller[0]){
// 		heroPositionX -= directionX; 
// 	}
// 	else if(controller[1]){
// 		heroPositionY -= directionY;
// 	}
// 	else if(controller[2]){
// 		heroPositionX += directionX;
// 	}else{
// 		heroPositionY += directionX/4;
// 	}
// }
		

	// eventController(){
	// 		document.addEventListener('keydown', event => {
	// 				this.hero.gravity = 'off';
	// 					if(i >= 2){
	// 						i=0;
	// 					}
	// 					if(event.keyCode === 39){    //right-arrow
	// 						controller[2] = true;
	// 						this.buttonPress = true;
	// 						this.hero.charRightFaced = true;
	// 						controllerLog[i]= event.keyCode;
	// 						i++;
	// 					}
	// 					if(event.keyCode === 37){   //left-arrow
	// 						controller[0] = true;
	// 						this.buttonPress = true;
	// 						this.hero.charRightFaced = false;
	// 						controllerLog[i]= event.keyCode;
	// 						i++;
	// 					}
	// 					if(event.keyCode === 38  && !this.hero.jump){   //up-arrow
	// 							// console.log(event);
	// 							controller[1] = true;
	// 							this.buttonPress = true;
	// 							this.eventCounter = 0;
	// 							controllerLog[i]= event.keyCode;
	// 							i++;
	// 					}
	// 					if(!this.buttonPress){
	// 						this.hero.gravity = 'on';
	// 					}
	// 		});

	// 	document.addEventListener('keyup', event =>{
	// 			this.buttonPress = false;
	// 			this.hero.gravity = 'on';
	// 			// controller = [false , false , false];
	// 			controller[0] = false; //left-arrow
	// 			controller[2] = false; //right-arrow
	// 	});
	// }
}

let game = new Game(1000 , 500 , mapLayouts);

game.hero.eventController();
game.animate();




