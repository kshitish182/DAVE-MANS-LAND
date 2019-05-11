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


	drawSpriteUp(directionX , directionY , buttonPress  , charRightFaced){

		// this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		
		this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		this.frameCount++;
		//holding the movement of character for 3 frames (to manage speed)
		if(this.frameCount > 2){
			if(buttonPress){
					if(charRightFaced){
						this.spriteInitialPosX = 200;	
					}else{
						this.spriteInitialPosX = 400;
					}
					
						this.spritePlotY -= directionY;
					// this.spritePlotX = this.spritePlotX;
				}
			this.frameCount = 0;
		}
	}

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

	drawMonster(){
		this.ctx.drawImage(this.spriteRefrence, this.spritePlotX, this.spritePlotY, this.spriteWidth , this.spriteHeight );
	}

	drawBulletRight(){
		this.spriteInitialPosX = 36; // position of sprite image in sprite sheet
		this.ctx.drawImage(this.spriteRefrence, this.spriteInitialPosX, this.spriteInitialPosY, this.spriteWidth , this.spriteHeight, this.spritePlotX , this.spritePlotY, this.elmntWidth , this.elmntHeight);
	}
	
}