let heroInitialPosX = 0;
let heroInitialPosY = 0;
let controller = [false, false, false]; 
let count = 0 ;

class Hero{
	constructor(heroPositionX , heroPOsitionY , ctx){
		this.heroPositionX = heroPositionX;
		this.heroPositionY = heroPositionY;
		this.directionX = 5;
		this.directionY = 5;
		this.ctx = ctx;
		this.flag = false;
		this.heroSpriteRight = new SpriteControl(this.ctx , characterRight , 50 ,50 ,this.heroPositionX , this.heroPositionY , 50 ,50 ,4 );
	}

	renderHero(buttonPress){
		// let heroSpriteRight = new SpriteControl(ctx , characterRight , 50 ,50 , this.heroPositionX , this.heroPOsitionY ,50 , 50 , 4);
		this.heroSpriteRight.drawSpriteDynamic(this.directionX, 0 , buttonPress);
	}

	moveHero(buttonPress){
			this.renderHero(buttonPress);
			count++
			if(count >= 2){
				if(controller[2] && controller[1]){
					// console.log('up-right');
					this.heroPositionX += this.directionX;
					this.heroPositionY -= this.directionY;
					this.updatePosition();
				}
				else if(controller[1] && controller[0]){
					// console.log('left-right');
					this.heroPositionY -= this.directionY;
					this.heroPositionX -= this.directionX;
					this.updatePosition();
				}
				else if(controller[1]){
					// console.log('up');
					this.heroPositionY -= this.directionY;
					this.heroPositionX = this.heroPositionX;
					this.updatePosition(); 
				}
				else if(controller[0]){
					// console.log('left');
					this.heroPositionX -= this.directionX;
					this.heroPositionY = this.heroPositionY;
					this.updatePosition();
				}
				else if(controller[2]){
					// console.log('right');
					this.heroPositionX += this.directionX;
					this.heroPOsitionY = this.heroPositionY;
					this.updatePosition();
				 } 
				//  else{
				//  	this.heroPositionY += this.directionX/4;
				//  	this.updatePosition();
				// }
				count = 0;
			}	
			// setTimeout(() => count = 0 , 1);
			// count = 0;
	}

	updatePosition(){
		
		this.heroSpriteRight.spritePlotX = this.heroPositionX;
		this.heroSpriteRight.spritePlotY = this.heroPositionY;
		this.flag = true;
	}

}