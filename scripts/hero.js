let heroInitialPosX = 0;
let heroInitialPosY = 0;
let controller = [false, false, false]; 
let controllerLog = [];
let i =0;
let count = 0;
let jumpCount = 0;
let sideplacementright = 0;
let sideplacementleft = 0;
let buffer = 10;

const SPRITE_SIZE = 50;

class Hero{
	constructor(heroPositionX , heroPOsitionY , ctx ){
		this.heroPositionX = heroPositionX;
		this.heroPositionY = heroPositionY;
		this.oldvalueX = heroPositionX;
		this.oldvalueY = heroPositionY;
		
		//distance in x and y direction moved by the character in a single event
		this.directionX = 3;
		this.directionY = 3;

		this.ctx = ctx;
		this.buttonPress = false;
		this.gravity = 'off';

		//for counting number of frames to manage speed
		this.frameCount = 0;
		// this.characterDefaultDisplay = true;
		this.jump = false;
		this.onAir = false;

		//tracking the direction faced by the character
		this.charRightFaced = true;

		this.mapLayouts = mapLayouts;
		this.collisionMap = collisionMap;

		//creating sprite objects for characters
		this.heroSpriteRight = new SpriteControl(this.ctx , character , 50 ,50 ,this.heroPositionX , this.heroPositionY , 50 ,50 ,3);
		this.heroSpriteLeft = new SpriteControl(this.ctx , character , 50 , 50 , this.heroPositionX , this.heroPositionY , 50 , 50 ,3);
		this.heroSpriteUp = new SpriteControl(this.ctx , character , 50 ,50 , this. heroPositionX, this.heroPositionY,50 ,50 , 9);

		//intialising object properties
		this.heroSpriteLeft.spriteInitialPosX = 250;
		this.heroSpriteUp.spriteInitialPosX = 200; 
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
		if(controller[2] && !this.onAir){
			this.heroSpriteRight.drawSpriteRight(this.directionX , this.directionY , this.buttonPress , this.onAir);
		}else if (controller[0] && !this.onAir){
			this.heroSpriteLeft.drawSpriteLeft(this.directionX , this.directionY , this.buttonPress , this.onAir);
		}else if(controller[1] || this.onAir){
			// console.log(this.charRightFaced);
			this.heroSpriteUp.drawSpriteUp(this.directionX , this.directionY , this.buttonPress , this.charRightFaced);
		}
		else if(!controller[0] && !controller[2] && !controller[1]){
			if(this.charRightFaced){
				this.heroSpriteRight.drawSpriteRight(this.directionX , this.directionY , this.buttonPress , this.onAir);
			}else{
				this.heroSpriteLeft.drawSpriteLeft(this.directionX , this.directionY , this.buttonPress , this.onAir )
			}
		}
		// if(controller[2]){
		// 	this.characterDefaultDisplay = true;
		// }		
	}

	moveHero(buttonPress){
			this.renderHero(buttonPress);
			this.frameCount++
			// console.log(controller);
			// if(this.frameCount >= 1){
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
						// console.log(this.heroPositionY);
						if(jumpCount <= 150){
							this.onAir = true;
							// this.jump = true;
							this.oldvalueX = this.heroPositionX;
							this.oldvalueY = this.heroPositionY;
							this.heroPositionY -= 5;
							this.heroPositionX = this.heroPositionX;
							jumpCount += 5;
							this.updatePosition();
						}
						if(jumpCount > 100){
							this.gravity = 'on';
						}
						if(controller[2]){
							if(this.onAir){
								if(sideplacementright <= 50){
									this.oldvalueX = this.heroPositionX;
									this.oldvalueY = this.heroPositionY;
									this.heroPositionX += 5;
									sideplacementright += 5;
									this.updatePosition();
								}
								if(sideplacementright > 40){
									this.gravity = 'on';
								}
							}
						}
						else if(controller[0]){
							if(this.onAir){
								if(sideplacementleft <= 50){
									this.oldvalueX = this.heroPositionX;
									this.oldvalueY = this.heroPositionY;
									this.heroPositionX -= 5;
									sideplacementleft += 5;
									this.updatePosition();
								}
								if(sideplacementleft > 40){
									this.gravity = 'on';
								}
							}
						}
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
					// this.updatePosition();
				}
				else if(controller[0]){
					// console.log('also here');
					this.resetDirection();
					this.oldvalueX = this.heroPositionX;
					this.oldvalueY = this.heroPositionY;
					this.heroPositionX -= this.directionX;
					this.heroPositionY = this.heroPositionY;
					this.updatePosition();
				}
				else if(controller[2]){
					this.resetDirection();
					this.oldvalueX = this.heroPositionX;
					this.oldvalueY = this.heroPositionY;
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
				this.frameCount = 0;
			// }
			this.initGravity();	
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
		// console.log(parseInt(this.heroPositionY));
		this.heroSpriteRight.spritePlotX = this.heroPositionX;
		this.heroSpriteRight.spritePlotY = this.heroPositionY;
		this.heroSpriteLeft.spritePlotX = this.heroPositionX;
		this.heroSpriteLeft.spritePlotY = this.heroPositionY;
		this.heroSpriteUp.spritePlotX = this.heroPositionX;
		this.heroSpriteUp.spritePlotY = this. heroPositionY;
	}

	getElementsPosition(mapLevel1){
		//getting character position 
		
		//for its topleft corner((x,y) co-ordinates of its topleft corner)
		
		let topPos = Math.floor(this.heroPositionY/SPRITE_SIZE);
		let  leftPos= Math.floor(this.heroPositionX/SPRITE_SIZE);

		//the calculated co-ordinates are then converted to the index for the collision map array
		let collisionIndexValue = this.collisionMap.level1[((mapLevel1.tileWidth*topPos) + leftPos)]; 

		//collision checked for the topleft position of the game elements
		this.checkCollision(leftPos*SPRITE_SIZE , topPos*SPRITE_SIZE , collisionIndexValue , mapLevel1);


		//now for topright position co-ordinates
		topPos = Math.floor(this.heroPositionY/SPRITE_SIZE) // re-defining topPos for new interation of collision check
		let rightPos = Math.floor((this.heroPositionX + SPRITE_SIZE) / SPRITE_SIZE);
		collisionIndexValue = this.collisionMap.level1[((mapLevel1.tileWidth*topPos) + rightPos)];
		this.checkCollision(rightPos*SPRITE_SIZE , topPos*SPRITE_SIZE , collisionIndexValue , mapLevel1);


		//for bottomleft position co-ordinates
		let bottomPos = Math.floor((this.heroPositionY + SPRITE_SIZE) / SPRITE_SIZE);
		leftPos = Math.floor(this.heroPositionX / SPRITE_SIZE);
		collisionIndexValue = this.collisionMap.level1[((mapLevel1.tileWidth*bottomPos) + leftPos)];
		this.checkCollision(leftPos*SPRITE_SIZE , bottomPos*SPRITE_SIZE , collisionIndexValue , mapLevel1);

		//for bottomright position co-ordinates
		bottomPos = Math.floor((this.heroPositionY + SPRITE_SIZE) / SPRITE_SIZE);
		rightPos = Math.floor((this.heroPositionX + SPRITE_SIZE) / SPRITE_SIZE);
		collisionIndexValue = this.collisionMap.level1[((mapLevel1.tileWidth*bottomPos) + rightPos)];
		this.checkCollision(rightPos*SPRITE_SIZE , bottomPos*SPRITE_SIZE , collisionIndexValue , mapLevel1);

		// console.log(topPos , leftPos , bottomPos , rightPos);
		// console.log(this.heroPositionX , this.heroPositionY);
		//scanning game elements for
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

	//checking for collision after obtaining the elements
	checkCollision(xCord , yCord , collisionIndex, mapLevel1){   // x and y co-ordinates of four corners of the character
		// console.log(collisionIndex);
		switch(collisionIndex){
			case 1:
				this.checkCollisionLeft(xCord, yCord);
				break;

			case 2:
				this.checkCollisionBottom(xCord, yCord); //x-cordinates , y-cordinates
				break;

			case 4:
				this.checkCollisionRight(xCord, yCord);
				break;

			case 5:
				this.checkCollisionLeft(xCord , yCord);
				this.checkCollisionRight(xCord , yCord);
				break;

			case 8:
				this.checkCollisionTop(xCord, yCord);
				break;

			case 9:
				this.checkCollisionTop(xCord , yCord);
				this.checkCollisionLeft(xCord , yCord);
				break;

			case 10:
				this.checkCollisionTop(xCord , yCord);
				this.checkCollisionBottom(xCord , yCord);
				break;

			case 11: 
				this.checkCollisionTop(xCord , yCord);
				this.checkCollisionLeft(xCord , yCord);
				this.checkCollisionBottom(xCord , yCord);
				break;

			case 12:
				this.checkCollisionTop(xCord, yCord);
				this.checkCollisionRight(xCord, yCord);
				break;

			case 13:
				this.checkCollisionTop(xCord , yCord);
				this.checkCollisionRight(xCord , yCord);
				this.checkCollisionBottom(xCord , yCord);
				break;

			case 14:
				this.checkCollisionTop(xCord , yCord);
				this.checkCollisionRight(xCord , yCord);
				this.checkCollisionBottom(xCord , yCord);
				break; 

			case 15:
				this.checkCollisionTop(xCord , yCord);
				this.checkCollisionBottom(xCord , yCord);
				this.checkCollisionRight(xCord , yCord);
				this.checkCollisionLeft(xCord , yCord);
				break;

			case 16:
				this.checkCollisionCon(xCord , yCord , mapLevel1);
				break;

			// default:
			// console.log('tile index not found');
			// break;
			}
	} 

	checkCollisionBottom(x , y){
		//for bottom side wall of the elements
		// console.log(y);
		if(this.heroPositionY <= (y + SPRITE_SIZE) && this.oldvalueY >=(y + SPRITE_SIZE)){
			console.log('collision detected');
			this.directionY = 0;
			// controller[1] = false;
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
 		if(this.heroPositionX  < (x + SPRITE_SIZE + 5) && this.oldvalueX >=(x + SPRITE_SIZE)){
 			// console.log('collision-right');
 			if(controller[0]){
 			this.directionX = 0;
 			this.heroPositionX = x + SPRITE_SIZE + 5;
 			return true;
 			}else{
 				this.directionX = 5;
 				return false;
 			}
 		}
 	}

 	checkCollisionTop(x,y){
 		// console.log(y);
 		
 		if((this.heroPositionY + SPRITE_SIZE) > y  &&  (this.oldvalueY+SPRITE_SIZE) <= y ){
 			// console.log('collision-top');
 			// console.log('collision');
 			this.heroPositionY = y - SPRITE_SIZE;
 			this.directionY = 0;
 			this.jump = false;
 			this.onAir = false;
 			jumpCount = 0;
 			sideplacementleft = 0;
 			sideplacementright = 0;
 			controller[1] = false;
 			// controller[1] = false;
 			// if(controller[1]){
 			// 	this.directionY = 5;
 			// }
 			return true;
 		}
  }

  checkCollisionLeft(x,y){
  	// console.log(x*SPRITE_SIZE , this.heroPositionX + SPRITE_SIZE);
  	if(this.heroPositionX + SPRITE_SIZE > x && this.oldvalueX + SPRITE_SIZE <= x){
  		console.log('here');
  		this.directionX = 0;
  		this.heroPositionX = x - SPRITE_SIZE;
  		return true;
  	}else{
  		this.directionX = 5;
  		return false;
  	}
  }

  checkCollisionCon(x , y , mapLevel1){
  	if(this.heroPositionX + SPRITE_SIZE > x  || this.heroPositionX + SPRITE_SIZE > y || this.heroPositionX < (x + SPRITE_SIZE)){
  		let j = x/SPRITE_SIZE;
  		let i = y/SPRITE_SIZE;
  		console.log(i*mapLevel1.tileWidth + j);
  		this.mapLayouts.level1[(i*mapLevel1.tileWidth) + j] = 0;
  	}
  }

 	resetDirection(){
 		this.directionX = 5;
 		this.directionY = 5;
 	}

 	// getoldValue(){
 	// 	this.oldvalueX = this.heroPositionX;
 	// 	this.oldvalueY = this.heroPositionY;
 	// }

 	// setoldvalue(){

 	// }

 	eventController(){
			document.addEventListener('keydown', event => {
					this.gravity = 'off';
						if(event.keyCode === 39){    //right-arrow
							controller[2] = true;
							this.buttonPress = true;
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
								this.buttonPress = true;
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
		});
	}
}

