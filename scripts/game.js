
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

		this.initialViewportShiftX = 0;
		this.initialViewportShiftY = 0;
		this.viewportWidth = 1000;
		this.viewportHeight = 500;
		
		this.frameCount =0;
		

		//tracking the number of times the control button is pressed
		this.eventCounter = 0; 

		//creating objects
		this.mapCurrentLevel = new Map(this.tileMap.level1 , 20, 10 , this.ctx);
		this.hero = new Hero(heroPositionX , heroPositionY , this.ctx);
		this.trollELmObj  = new TrollElements(this.ctx , this.hero);
		this.monster = new Monster(this.ctx, 1650 , 250 , this.hero);
		this.daveBullet = new Bullets(this.ctx , this.hero , this.monster);
		this.monsterBullet = new Bullets(this.ctx , this.hero , this.monster);
	}

	getMap(){
		switch(gameLevel){
			case 1:
			this.mapCurrentLevel.mapLevel = this.tileMap.level1;
			break;

			case 2:
			this.mapCurrentLevel.mapLevel = this.tileMap.level2;
			this.mapCurrentLevel.tileWidth = 60;
		}
	}

	canvasInit(){
		context.drawImage(this.canvas , this.initialViewportShiftX , this.initialViewportShiftY , this.canvas.width , this.canvas.height , 0, 0, 4000, 500);
	}


	// levelController(){
	// 	let mapLevel1 = new Map(this.tileMap.level1);
	// }

animate(){
	// console.log(gunObtained);
	this.changeViewport();
	this.canvasInit();
	this.getMap();
	this.mapCurrentLevel.drawMap();
	this.hero.getElementsPosition(this.mapCurrentLevel);
	this.trollELmObj.renderTrollElements();
	this.hero.moveHero(this.buttonPress);
	// this.hero.getElementsPosition(this.mapCurrentLevel); // scanning the tile map to check for collision
	this.hero.checkDoorCondition(); // checking whether the door is locked or not
	this.monster.renderMonster();
	this.daveBullet.renderDaveBullets();
	this.monsterBullet.renderMonsterBullets();
	// this.bullet.renderMonsterBullets();
	// this.eventController();
	// console.log(controller);
	window.requestAnimationFrame(() => this.animate());
}


changeViewport(){
	if(gameLevel != 1){
		// console.log(2*(this.viewportWidth - 50));
		if( this.hero.heroPositionX >= (this.viewportWidth - 50) && this.hero.heroPositionX <= 2*(this.viewportWidth - 50) ){
			// console.log('here');
			this.initialViewportShiftX = this.viewportWidth;
		}else if(this.hero.heroPositionX > 2*(this.viewportWidth - 50)){
			console.log('here');
			this.initialViewportShiftX = 2*this.viewportWidth;
		}
		if(this.hero.heroPositionX <= (this.viewportWidth - 50)){
			this.initialViewportShiftX = 0;
		}else if(this.hero.heroPositionX < 2*(this.viewportWidth - 50)){
			this.initialViewportShiftX = this.viewportWidth;
		}
	}
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

let game = new Game(4000 , 500 , mapLayouts);

game.hero.eventController();
game.animate();




