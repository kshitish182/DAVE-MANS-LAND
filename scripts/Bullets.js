class Bullets{
	constructor(ctx , hero){
		this.ctx = ctx;
		this.hero = hero;

		this.bulletWidth = 25;
		this.bulletHeight = 10;

		this.bulletPlotX = this.hero.heroPositionX + SPRITE_SIZE;
		this.bulletPlotY = this.hero.heroPositionY + 20;

		this.charPositionX = 0;
		this.charPositionY = 0;

		this.bulletTravelDirection = 5;
		this.bulletFire = false;
	}

	checkBulletCondition(){
		if(specialController[0]){
			if(gunObtained){
					this.recordCharPosition();
				if(this.hero.charRightFaced){
					this.bulletFire = true;
				}
				// else if(!this.hero.charRightFaced){
				// 	this.renderBulletLeft();
				// }
			}
		}
	}


	//recording the position of the the hero right before the bullet fires
	recordCharPosition(){
		this.charPositionX = this.hero.heroPositionX;
		this.charPositionY = this.hero.heroPositionY;
	}

	renderBullets(){
		this.checkBulletCondition();
		if(this.bulletFire){
			if(this.bulletTravelDirection <= 500){
				this.bulletPlotX = (this.charPositionX + SPRITE_SIZE) + this.bulletTravelDirection;
				this.bulletPlotY = (this.charPositionY + SPRITE_SIZE/2);
				let bulletRight = new SpriteControl(this.ctx , daveBullet , this.bulletWidth , this. bulletHeight , this.bulletPlotX , this.bulletPlotY , this.bulletWidth , this.bulletHeight , 1);
				console.log(this.bulletPlotX, this.hero.heroPositionX);
				bulletRight.drawBulletRight();
				this.bulletTravelDirection += 5;
			}else if(this.bulletTravelDirection > 500){
				this.bulletPlotX = 0;
				this.bulletPlotY = 0;
				this.bulletTravelDirection = 5;
				this.bulletFire = false;
			}
		}
	}
	
}