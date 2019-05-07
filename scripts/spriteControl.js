class SpriteControl{
	constructor(ctx , spriteRefrence , spriteWidth , spriteHeight ,spritePlotX , spritePlotY , elmntWidth, elmntHeight , spriteNumber){
		this.ctx = ctx;

		//refrence of game element send for creating sprites
		this.spriteRefrence = spriteRefrence;    

		//initial position in sprite sheet from where clipping is done
		this.spriteInitialPosX = 0;  
		this.spriteInitialPosY = 0;

		// this.spriteLeftInitialPosX = 250;
		// this.spriteRightInitialPosX = 0;

		//sprite size to be  clipped
		this.spriteWidth = spriteWidth;
		this.spriteHeight = spriteHeight;

		//plotting points of the sprite image
		this.spritePlotX = spritePlotX;
		this.spritePlotY = spritePlotY;

		//size of the sprite after clipping
		this.elmntWidth = elmntWidth;
		this.elmntHeight = elmntHeight;		

		//number of sprites in the sprite sheet
		this.spriteNumber = spriteNumber;

		//counting the sprites for sheet rotation
		this.countSpriteImage = 0;

		//for counting the number of frames called by request animation method
		this.frameCount = 0;
	}

	//drawing sprite images of static or non-movable game elements
	drawSpriteStatic(){
		this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		this.spriteInitialPosX += this.spriteWidth;
		this.countSpriteImage++;
		if(this.countSpriteImage > this.spriteNumber){
			this.spriteInitialPosX = 0;
			this.countSpriteImage = 0;
		}
	}









	drawSpriteUp(directionX , directionY , buttonPress , jump , charRightFaced){

		// this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		
		this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		this.frameCount++;
		//holding the movement of character for 3 frames (to manage speed)
		if(this.frameCount > 2){
			if(buttonPress){
			//cheacking if the control key is pressed
			// if(buttonPress){    
			// 		this.spritePlotX += directionX;
			// 		this.spritePlotY += directionY;
			// 			if(!onAir){
			// 				this.spriteInitialPosX += 50;
			// 				this.countSpriteImage++;
			// 			}
			// 		if(this.countSpriteImage >= this.spriteNumber ){ 
			// 				this.spriteInitialPosX = 50;
			// 				this.countSpriteImage = 1;
			// 		  if(controller[0]) {
			// 				this.spriteInitialPosX = 250;
			// 				this.countSpriteImage = 0;
			// 			}
			// 			if(controller[1]){
			// 				if(controllerLog[0] === 37){
			// 					this.spriteInitialPosX = 400;
			// 					this.countSpriteImage = 9;
			// 				}else{
			// 					this.spriteInitialPosX = 200;
			// 					this.countSpriteImage = 4;
			// 				}
			// 			}
			// 		}

					// if(controller[2]){
					// 	this.drawSpriteRight(directionX , directionY);
					// }else if(controller[0]){
					// 	this.drawSpriteLeft(directionX  , directionY);
					// }else if(controller[1]){
					// 	this.drawSpriteUp(directionX , directionY ,charRightFaced , onAir);
					// }
					
					if(charRightFaced){
						this.spriteInitialPosX = 200;	
					}else{
						this.spriteInitialPosX = 400;
					}
					
						this.spritePlotY -= directionY;
					// this.spritePlotX = this.spritePlotX;
				}

					//character moving left 
				// 	if(controller[0]){
				// 		this.spriteInitialPosX += 50;
				// 		this.spritePlotX += directionX;
				// 		this.spritePlotY += directionY;
				// 		this.countSpriteImage++;
				// 		if(this.countSpriteImage >= this.spriteNumber){
				// 			this.spriteInitialPosX = 150;
				// 			this.countSpriteImage = 0;
				// 		}
				// 	}
		 	//}
			this.frameCount = 0;
		}
	}

	// drawCharMoveSprite(directionX , directionY , buttonPress , onAir , charRightFaced){
	// 	if(controller[0]){
	// 		this.drawSpriteLeft(directionX , buttonPress , onAir);
	// 	}else if(controller[2]){
	// 		this.drawSpriteRight(directionX , buttonPress , onAir);
	// 	}else if(!controller[0] && !controller[1] && !controller[2]){
	// 		if(charRightFaced){
	// 			this.drawSpriteRight(directionX , buttonPress , onAir);
	// 		}else{
	// 			this.drawSpriteLeft(directionX , buttonPress , onAir);
	// 		}
	// 	}
	// }

	drawSpriteRight(directionX , directionY, buttonPress , onAir){
		this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		this.frameCount++;
		if(this.frameCount > 3){
			if(buttonPress){
				this.spriteInitialPosX += 50;
				this.spritePlotX += directionX;
				this.spritePlotY -= directionY;
				this.countSpriteImage++;
				if(this.countSpriteImage >= this.spriteNumber ){ 
			 		this.spriteInitialPosX = 50;
			 		this.countSpriteImage = 1;
				}
			}
			this.frameCount = 0;
		}
	}

	drawSpriteLeft(directionX , directionY, buttonPress, onAir){
		this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		this.frameCount++;
		if(this.frameCount > 3){
			if(buttonPress){
				this.spriteInitialPosX +=50;
				this.spritePlotX -= directionX;
				this.spritePlotY -= directionY;
				this.countSpriteImage++;
				if(this.countSpriteImage >= this.spriteNumber){
					this.spriteInitialPosX = 250;
					this.countSpriteImage = 0;
				}
			}
			this.frameCount = 0;
		}
	}


	// drawSpriteRight(dx , dy ){
	// 	this.spriteInitialPosX +=50;
	// 	this.spritePlotX += dx;
	// 	this.countSpriteImage++;
	// 	if(this.countSpriteImage >= this.spriteNumber){
	// 		this.spriteInitialPosX =50;
	// 		this.countSpriteImage = 0;
	// 	}
	// }

	// drawSpriteLeft(dx , dy){
	// 	this.spriteInitialPosX += 50;
	// 	this.spritePlotX += dx;
	// 	this.countSpriteImage++;
	// 	if(this.countSpriteImage >= this.spriteNumber){
	// 		this.spriteInitialPosX = 250;
	// 		this.countSpriteImage = 0;
	// 	}
	// }

	// drawSpriteUp(dx, dy, charRightFaced , onAir){
	// 	// this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
	// 	// this.spriteInitialPosX = 200;
	// 	// this.spritePlotY -= dy;

	// 	// console.log(charRightFaced);
	// }
	
}