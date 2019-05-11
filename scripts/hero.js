let heroInitialPosX = 0;
let heroInitialPosY = 0;
let i =0;
let count = 0;
let jumpCount = 0;
let sideplacementright = 0;
let sideplacementleft = 0;
let buffer = 10;

const SPRITE_SIZE = 50;

class Hero{
	constructor(heroPositionX , heroPOsitionY , ctx, doorOpen){
		this.heroPositionX = heroPositionX;
		this.heroPositionY = heroPositionY;
		this.heroInitialPosX = heroPositionX;
		this.heroInitialPosY = heroPositionY;
		this.oldvalueX = heroPositionX;
		this.oldvalueY = heroPositionY;
		
		//distance in x and y direction moved by the character in a single event
		this.directionX = 3;
		this.directionY = 3;

		this.ctx = ctx;
		this.buttonPress = false;
		this.gravity = 'off';

		//for counting number of frames to hold certain fucntion for certain number of frames
		this.frameCount = 0;
		// this.characterDefaultDisplay = true;
		this.jump = false;
		this.onAir = false;
		this.doorCollison = false;
		this.countCollison = 0;

		//tracking the direction faced by the character
		this.charRightFaced = true;

		this.mapLayouts = mapLayouts;
		this.collisionMap = collisionMap;

		this.currentCollisionLevel = this.collisionMap.level1;

		//creating sprite objects for characters
		this.heroSpriteRight = new SpriteControl(this.ctx , character , 50 ,50 ,this.heroPositionX , this.heroPositionY , 50 ,50 ,3);
		this.heroSpriteLeft = new SpriteControl(this.ctx , character , 50 , 50 , this.heroPositionX , this.heroPositionY , 50 , 50 ,3);
		this.heroSpriteUp = new SpriteControl(this.ctx , character , 50 ,50 , this. heroPositionX, this.heroPositionY,50 ,50 , 9);
		this.heroDeath = new SpriteControl(this.ctx, charDeath , 48 , 50 , this.heroPositionX , this.heroPositionY , 50 ,50 , 1);

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
		if(!gameOver){
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
					this.heroSpriteLeft.drawSpriteLeft(this.directionX , this.directionY , this.buttonPress , this.onAir );
				}
			}
		}
		this.checkGameOver();
		// if(controller[2]){
		// 	this.characterDefaultDisplay = true;
		// }		
	}

	moveHero(buttonPress){
			this.renderHero(buttonPress);
			// this.frameCount++
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

	getCollisionMap() {
		switch(gameLevel){
			case 1:
				this.currentCollisionLevel = this.collisionMap.level1;
				break;
			case 2:
				this.currentCollisionLevel = this.collisionMap.level2;
				break;
		}
	}

	getElementsPosition(mapCurrentLevel){
		this.getCollisionMap();

		//getting character position 
		
		//for its topleft corner((x,y) co-ordinates of its topleft corner)

		let topPos = Math.floor(this.heroPositionY/SPRITE_SIZE);
		let  leftPos= Math.floor(this.heroPositionX/SPRITE_SIZE);

		//the calculated co-ordinates are then converted to the index for the collision map array
		let collisionIndexValue = this.currentCollisionLevel[((mapCurrentLevel.tileWidth*topPos) + leftPos)]; 

		//collision checked for the topleft position of the game elements
		this.checkCollision(leftPos*SPRITE_SIZE , topPos*SPRITE_SIZE , collisionIndexValue , mapCurrentLevel);


		//now for topright position co-ordinates
		topPos = Math.floor(this.heroPositionY/SPRITE_SIZE) // re-defining topPos for new interation of collision check
		let rightPos = Math.floor((this.heroPositionX + SPRITE_SIZE) / SPRITE_SIZE);
		collisionIndexValue = this.currentCollisionLevel[((mapCurrentLevel.tileWidth*topPos) + rightPos)];
		this.checkCollision(rightPos*SPRITE_SIZE , topPos*SPRITE_SIZE , collisionIndexValue , mapCurrentLevel);


		//for bottomleft position co-ordinates
		let bottomPos = Math.floor((this.heroPositionY + SPRITE_SIZE) / SPRITE_SIZE);
		leftPos = Math.floor(this.heroPositionX / SPRITE_SIZE);
		collisionIndexValue = this.currentCollisionLevel[((mapCurrentLevel.tileWidth*bottomPos) + leftPos)];
		this.checkCollision(leftPos*SPRITE_SIZE , bottomPos*SPRITE_SIZE , collisionIndexValue ,mapCurrentLevel);

		//for bottomright position co-ordinates
		bottomPos = Math.floor((this.heroPositionY + SPRITE_SIZE) / SPRITE_SIZE);
		rightPos = Math.floor((this.heroPositionX + SPRITE_SIZE) / SPRITE_SIZE);
		collisionIndexValue = this.currentCollisionLevel[((mapCurrentLevel.tileWidth*bottomPos) + rightPos)];
		this.checkCollision(rightPos*SPRITE_SIZE , bottomPos*SPRITE_SIZE , collisionIndexValue , mapCurrentLevel);

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
	checkCollision(xCord , yCord , collisionIndex, mapCurrentLevel){   // x and y co-ordinates of four corners of the character
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
				this.checkConsumableCollision(xCord , yCord , mapCurrentLevel);
				break;

			case 17:
				this.handleDoorCollision(xCord , yCord);
				console.log('door')
				break;

			// default:
			// console.log('tile index not found');
			// break;
			}
	} 

	checkCollisionBottom(x , y){
		//for bottom side wall of the elements
		// console.log(y);
		if(this.heroPositionY < (y + SPRITE_SIZE) && this.oldvalueY >=(y + SPRITE_SIZE)){
			// console.log(this.heroPositionX , this.heroPositionY);
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
 		if(this.heroPositionX  <= (x + SPRITE_SIZE) && this.oldvalueX >=(x + SPRITE_SIZE)){
 			// console.log('collision-right', this.heroPositionX , this.oldvalueX);
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
  		this.directionX = 0;
  		this.heroPositionX = x - SPRITE_SIZE;
  		return true;
  	}else{
  		this.directionX = 5;
  		return false;
  	}
  }

  checkConsumableCollision(x , y , mapCurrentLevel){
  	if(this.heroPositionX + SPRITE_SIZE > x  || this.heroPositionX + SPRITE_SIZE > y || this.heroPositionX < (x + SPRITE_SIZE)){
  		let j = x/SPRITE_SIZE;
  		let i = y/SPRITE_SIZE;

  		let index = ((i*mapCurrentLevel.tileWidth) + j);
  		switch(mapCurrentLevel.mapLevel[index]){
  			case 3:
  				mapCurrentLevel.mapLevel[index] = 0;
  				console.log('points');
  				break;

  			case 4:
  				mapCurrentLevel.mapLevel[index] = 0;
  				console.log('double-points');
  				break;

  			case 5:
  				mapCurrentLevel.mapLevel[index] = 0;
  				doorOpen = true;
  				console.log('door open');
  				break;

  			case 9: 
  				mapCurrentLevel.mapLevel[index] = 0;
  				gunObtained = true;
  				console.log('gun');
  				break;
  		}
  		// let value = this.mapLayouts.level1[(i*mapLevel1.tileWidth) + j];
  		// console.log(value);
  		// //assgining roles for different consumables
  		// this.assignCollisionRoles(value);
  	}
  }

  // assignCollisionRoles(value){
  // 	switch(value){
  // 		case 3:
  // 			this.mapLayouts.level1[]
  // 	}
  // }

 	resetDirection(){
 		this.directionX = 5;
 		this.directionY = 5;
 	}

 	checkGameOver(){
 		if(gameOver){
 			this.frameCount++;
 			if(this.frameCount < 200){
				this.heroDeath.spritePlotX = this.heroPositionX;
				this.heroDeath.spritePlotY = this.heroPositionY;
				this.heroDeath.drawSpriteStatic();
			}else if(this.frameCount >= 200){
				gameOver = false;
				this.frameCount = 0;
				console.log(this.heroInitialPosX , this.heroInitialPosY);
				this.heroPositionX = this.heroInitialPosX;
				this.heroPositionY = this.heroInitialPosY;
			}
		}
 	}

 

 	// getoldValue(){
 	// 	this.oldvalueX = this.heroPositionX;
 	// 	this.oldvalueY = this.heroPositionY;
 	// }

 	// setoldvalue(){

 	// }

 	// **************improve this part ****************
 	handleDoorCollision(x, y){
		if(this.heroPositionX  < (x + SPRITE_SIZE + 5) && this.oldvalueX >=(x + SPRITE_SIZE)){
			if(controller[0]){
				this.directionX = 0;
				this.heroPositionX = x + SPRITE_SIZE + 5;
				this.gameComplete = true;
			}
		}
 	}
 		
 	
 	checkDoorCondition(){
 		if(this.gameComplete){
 			gameLevel++;
 		}
 	}

 //****************************************************


 	eventController(){
			document.addEventListener('keydown', event => {
					this.gravity = 'off';
					if(!gameOver){
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
							if(event.keyCode === 17){
								specialController[0] = true;
							}
							if(!this.buttonPress){
								this.gravity = 'on';
							}
					}
			});

		document.addEventListener('keyup', event =>{
				this.buttonPress = false;
				this.gravity = 'on';
				// controller = [false , false , false];
				controller[0] = false; //left-arrow
				controller[2] = false; //right-arrow
				specialController[0] = false;
		});
	}
}

