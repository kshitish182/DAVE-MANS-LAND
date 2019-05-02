class SpriteControl{
	constructor(ctx , spriteRefrence , spriteWidth , spriteHeight ,spritePlotX , spritePlotY , elmntWidth, elmntHeight){
		this.ctx = ctx;

		//refrence of game element send for creating sprites
		this.spriteRefrence = spriteRefrence;    

		//initial position in sprite sheet from where clipping is done
		// this.spriteInitialPosX = 0;  
		// this.spriteInitialPosY = 0;

		//sprite size to be  clipped
		this.spriteWidth = spriteWidth;
		this.spriteHeight = spriteHeight;

		//plotting points of the sprite image
		this.spritePlotX = spritePlotX;
		this.spritePlotY = spritePlotY;

		//size of the sprite after clipping
		this.elmntWidth = elmntWidth;
		this.elmntHeight = elmntHeight;		
	}

	drawSprite(){
		console.log(spriteInitialPosX);
		this.ctx.drawImage(this.spriteRefrence , spriteInitialPosX , spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , this.elmntWidth , this.elmntHeight);
		spriteInitialPosX += this.spriteWidth;
		countSpriteImage++;
		if(countSpriteImage > 5){
			spriteInitialPosX = 0;
			countSpriteImage = 0;
		}
	}
}