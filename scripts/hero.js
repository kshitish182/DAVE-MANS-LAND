let heroInitialPosX = 0;
let heroInitialPosY = 0;

class Hero{
	constructor(heroPositionX , heroPOsitionY , ctx ){
		this.heroPositionX = heroPositionX;
		this.heroPositionY = heroPositionY;
		this.directionX = 5;
		this.directionY = 5;
		this.ctx = ctx;
		this.flag = false;
		this.heroSpriteRight = new SpriteControl(this.ctx , characterRight , 50 ,50 ,this.heroPositionX , this.heroPositionY , 50 ,50 ,4 );
	}

	renderHero(){
		// let heroSpriteRight = new SpriteControl(ctx , characterRight , 50 ,50 , this.heroPositionX , this.heroPOsitionY ,50 , 50 , 4);
		this.heroSpriteRight.drawSpriteDynamic(this.directionX, 0 , this.flag);
	}

	moveHero(){
		this.renderHero();
		if(controller[0]  && controller[1]){
			heroPositionX -= this.directionX;
			heroPositionY -= this.directionY;
		}
		else if(controller[1] && controller[2]){
			heroPositionY -= this.directionY;
			heroPositionX += this.directionX;
		}
		else if(controller[0]){
			heroPositionX -= this.directionX; 
		}
		else if(controller[1]){
			heroPositionY -= this.directionY;
		}
		else if(controller[2]){
			heroPositionX += this.directionX;
		}else{
			heroPositionY += this.directionX/4;
		}
	}

}