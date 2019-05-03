class SpriteControl{
	constructor(ctx , spriteRefrence , spriteWidth , spriteHeight ,spritePlotX , spritePlotY , elmntWidth, elmntHeight , spriteNumber){
		this.ctx = ctx;

		//refrence of game element send for creating sprites
		this.spriteRefrence = spriteRefrence;    

		//initial position in sprite sheet from where clipping is done
		this.spriteInitialPosX = 0;  
		this.spriteInitialPosY = 0;

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
	}

	//drawing sprite images of static or non-movable game elements
	drawSpriteStatic(){
		// console.log(this.spriteRefrence);
		this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		this.spriteInitialPosX += this.spriteWidth;
		this.countSpriteImage++;
		if(this.countSpriteImage > this.spriteNumber){
			this.spriteInitialPosX = 0;
			this.countSpriteImage = 0;
		}
	}

	drawSpriteDynamic(directionX , directionY , flag){
		this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		if(flag){
			this.spriteInitialPosX += this.spriteWidth;
			this.spritePlotX += directionX;
			this.spritePlotY += directionY;
		}
	}
}