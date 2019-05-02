class SpriteControl{
	constructor(ctx , spriteRefrence , spriteInitialPosX, spriteInitialPosY, spriteWidth , spriteHeight ,spritePlotX , spritePlotY , elmntWidth, elmntHeight){
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
	}

	drawSprite(){
		this.ctx.drawImage(this.spriteRefrence , this.spriteInitialPosX , this.spriteInitialPosY , this.spriteWidth , this.spriteHeight , this.spritePlotX , this.spritePlotY , 50 ,50);
		this.spriteInitialX += this.spriteWidth;
		countSpriteImage++;
		if(countSpriteImage > 5){
			this.spriteInitialX = 0;
			countSpriteImage = 0;
		}
	}
}