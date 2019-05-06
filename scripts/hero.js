let heroInitialPosX = 0;
let heroInitialPosY = 0;
let controller = [false, false, false]; 
let controllerLog = [];
let i =0;
let count = 0;
let jumpCount = 0;

const SPRITE_SIZE = 50;

class Hero{
	constructor(heroPositionX , heroPOsitionY , ctx , gravity){
		this.heroPositionX = heroPositionX;
		this.heroPositionY = heroPositionY;
		
		//distance in x and y direction moved by the character in a single event
		this.directionX = 5;
		this.directionY = 5;

		this.ctx = ctx;
		this.gravity = gravity;

		//for counting number of frames to manage speed
		this.frameCount = 0;
		this.characterDefaultDisplay = true;
		this.jump = true;
		this.onAir = false;

		//tracking the direction faced by the character
		this.charRightFaced = true;

		this.mapLayouts = mapLayouts;
		this.collisionMap = collisionMap;
		//creating sprite objects
		this.heroSpriteRight = new SpriteControl(this.ctx , character , 50 ,50 ,this.heroPositionX , this.heroPositionY , 50 ,50 ,3);
		this.heroSpriteLeft = new SpriteControl(this.ctx , character , 50 , 50 , this.heroPositionX , this.heroPositionY , 50 , 50 ,3);
		this.heroSpriteUp = new SpriteControl(this.ctx , character , 50 ,50 , this. heroPositionX, this.heroPositionY,50 ,50 , 9);


		//intialising object properties
		this.heroSpriteLeft.spriteInitialPosx = 250;
	}

	renderHero(buttonPress){
		// console.log(controllerLog);
		//this is the default positioning of the character (right faced)
		// console.log(controller);
		// if(controller[2] || this.characterDefaultDisplay){
		// 	// console.log('here');
		// 	this.heroSpriteRight.drawSpriteRight(this.directionX, this.directionY , buttonPress, this.onAir , this.charRightFaced);
		// 	this.characterDefaultDisplay = true;
		// }else if(controller[0]){
		// 	this.heroSpriteLeft.drawSpriteLeft(this.directionX , 0 , buttonPress, this.onAir , this.charRightFaced);
		// 	this.characterDefaultDisplay = false;
		//  } else if(controller[1]){
		//  	this.heroSpriteUp.drawSpriteUp(this.directionX , this.directionY , buttonPress, this.onAir, this.charRightFaced);
		//  	this.characterDefaultDisplay = false;
		//  }
		this.heroSpriteRight.drawSpriteRight(this.directionX , this.directionY , buttonPress , this.onAir , this.charRightFaced);
		// if(controller[2]){
		// 	this.characterDefaultDisplay = true;
		// }		
	}

	moveHero(buttonPress){
			this.renderHero(buttonPress);
			this.frameCount++
			// console.log(controller);
			if(this.frameCount >= 2){
				// if(controller[2] && controller[1]){

				// 	//reseting direction of the character
				// 	this.resetDirection();
				// 	this.heroPositionX += this.directionX;
				// 	this.heroPositionY -= this.directionY;
				// 	this.updatePosition();
				// }
				// else if(controller[1] && controller[0]){	
				// 	this.resetDirection();

				// 	this.heroPositionY -= this.directionY;
				// 	this.heroPositionX -= this.directionX;
				// 	this.updatePosition();
				// }
				// else 
				if(controller[1]){
					this.resetDirection();
					// console.log('here');
					// console.log(count);
					// if(count < 4){
						// console.log(jumpCount);
					// if(jumpCount <= 200){
						this.heroPositionY -=this.directionY;
						// jumpCount+=this.directionY;
						// this.updatePosition(); 
						// this.jump = true;
						// this.onAir = true;
					// }
					// if(jumpCount > 200){
					// 	this.gravity = 'on';
					// }
					// 	count++;
					// }
					// if(count === 4){
					// 	controller[0] = false;
					// }
					this.updatePosition();
				}
				else if(controller[0]){
					// console.log('also here');
					this.resetDirection();

					this.heroPositionX -= this.directionX;
					this.heroPositionY = this.heroPositionY;
					this.updatePosition();
				}
				else if(controller[2]){
					this.resetDirection();
			
					this.heroPositionX += this.directionX;
					this.heroPositionY = this.heroPositionY;
					this.updatePosition();
				 }

				// if(this.onAir){
				// 	if(controller[0]){
				// 		this.resetDirection();
				// 		this.heroPositionX -= this.directionX;
				// 		this.heroPositionY += this.directionY;
				// 		this.updatePosition();
				// 	}else if(controller[2]){
				// 		this.resetDirection();
				// 		this.heroPositionX += this.directionX;
				// 		this.heroPositionY += this.directionY;
				// 		this.updatePosition();
				// 	}
				// }
			}
			// this.initGravity();	
	}

	initGravity(){
		// console.log(this.gravity);
		if(this.gravity === 'on'){
			//gravity pulls the hero downward in 1/4 the direction it moves
			this.heroPositionY += this.directionY/2;
			this.updatePosition();
		}
	}

	updatePosition(){
		
		this.heroSpriteRight.spritePlotX = this.heroPositionX;
		this.heroSpriteRight.spritePlotY = this.heroPositionY;
		this.heroSpriteLeft.spritePlotX = this.heroPositionX;
		this.heroSpriteLeft.spritePlotY = this.heroPositionY;
	}

	scanElements(mapLevel1){

		let xCord = Math.floor(this.heroPositionX/SPRITE_SIZE);
		let yCord = Math.floor(this.heroPositionY/SPRITE_SIZE);

		let collisionIndexValue = this.collisionMap.level1[((mapLevel1.tileWidth*yCord) + xCord)] 
		// console.log(collisionIndexValue);
		// for(let i = 0 ; i < mapLevel1.tileHeight ; i++){
		// 	for(let j = 0 ; j < mapLevel1.tileWidth ; j++){
		// 		// let value = (SPRITE_SIZE*j) + i ;
		// 		console.log(this.collisionMap.level1[((mapLevel1.tileWidth*i) + j )]);
		// 		switch(this.collisionMap.level1[((mapLevel1.tileWidth*i) + j )]){
		// 			case 1:
		// 				this.checkCollisionLeft(j, i);
		// 				break;

		// 			case 2:
		// 				this.checkCollisionBottom(j , i); //x-cordinates , y-cordinates
		// 				break;

		// 			case 4:
		// 				this.checkCollisionRight(j , i);
		// 				break;

		// 			case 8:
		// 				this.checkCollisionTop(j,i);
		// 				break;

		// 			case 12:
		// 			console.log('here');
		// 				if(this.checkCollisionTop(j,i)) return;
		// 				this.checkCollisionRight(j,i);
		// 				break;

		// 		}
		// 	}
		// }
	}

	//checking for collision after scanning the elements

	checkCollisionBottom(x , y){
		//for bottom side wall of the elements

		if(this.heroPositionY < (y + SPRITE_SIZE)){
			// console.log('collsion detected');
			this.directionY = 0;
			controller[1] = false;
			this.heroPositionY = y + SPRITE_SIZE;
		 }
		 // else{
		 // 	this.directionY = 15;
		 // }
		 //else{
		// 	this.directionY = 5;
		// }
	// 	if((this.heroPositionX + SPRITE_SIZE) > (SPRITE_SIZE * x)
	// 												&&
	// 			(this.heroPositionX < (SPRITE_SIZE*x + SPRITE_SIZE))
	// 												&&
	// 			(this.heroPositionY  > SPRITE_SIZE * y)
	// 												&&
	// 			(this.heroPositionY < (SPRITE_SIZE*y + SPRITE_SIZE)))
	// 	{
	// 			console.log('hero' , this.heroPositionX , this.heroPositionY);
	// 			console.log('sprite' , SPRITE_SIZE*x , SPRITE_SIZE*y);
	// 			this.directionX = 0;
	// 			this.updatePosition();

	// 	}
	 }

 	checkCollisionRight(x , y){
 		if(this.heroPositionX <= (x*SPRITE_SIZE)){
 			// console.log('collision-right');
 			if(controller[0]){
 			this.directionX = 0;
 			this.heroPositionX = x*SPRITE_SIZE;
 			return true;
 			}else{
 				this.directionX = 5;
 				return false;
 			}
 		}
 	}

 	checkCollisionTop(x,y){
 		if(this.heroPositionY + SPRITE_SIZE >= y*SPRITE_SIZE){
 			// console.log('collision-top');
 			// console.log('collision');
 			this.heroPositionY = y*SPRITE_SIZE - SPRITE_SIZE;
 			this.directionY = 0;
 			this.jump = false;
 			this.onAir = false;
 			jumpCount = 0;
 			controller[1] = false;
 			// if(controller[1]){
 			// 	this.directionY = 5;
 			// }
 			return true;
 		}
  }

  checkCollisionLeft(x,y){
  	// console.log(x*SPRITE_SIZE , this.heroPositionX + SPRITE_SIZE);
  	if(this.heroPositionX + SPRITE_SIZE >= x*SPRITE_SIZE){
  		console.log('here');
  		this.directionX = 0;
  		this.heroPositionX = x*SPRITE_SIZE-SPRITE_SIZE;
  		return true;
  	}else{
  		this.directionX = 5;
  		return false;
  	}
  }

 	resetDirection(){
 		this.directionX = 5;
 		this.directionY = 5;
 	}

 	eventController(){
			document.addEventListener('keydown', event => {
					this.gravity = 'off';
						if(event.keyCode === 39){    //right-arrow
							controller[2] = true;
							// this.buttonPress = true;
							this.charRightFaced = true;
						}
						if(event.keyCode === 37){   //left-arrow
							controller[0] = true;
							this.buttonPress = true;
							this.charRightFaced = false;
						}
						if(event.keyCode === 38 ){   //up-arrow
								// console.log(event);
								controller[1] = true;
								// this.buttonPress = true;
						}
						if(!this.buttonPress){
							this.gravity = 'on';
						}
			});

		document.addEventListener('keyup', event =>{
				this.buttonPress = false;
				this.gravity = 'on';
				// controller = [false , false , false];
				controller[0] = false; //left-arrow
				controller[2] = false; //right-arrow
				controller[1] = false;
		});
	}
}

