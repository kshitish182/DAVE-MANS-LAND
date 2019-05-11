class Bullets{
	constructor(ctx , hero , monster){
		this.ctx = ctx;
		this.hero = hero;
		this.monster = monster;

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
					this.recordCharPosition(this.hero.heroPositionX , this.hero.heroPositionY);
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
	recordCharPosition(charPositionX , charPositionY){
		this.charPositionX =  charPositionX;
		this.charPositionY = 	charPositionY;
	}

	renderDaveBullets(){
		this.checkBulletCondition();
		if(this.bulletFire){
			if(this.bulletTravelDirection <= 500){
				this.bulletPlotX = (this.charPositionX + SPRITE_SIZE) + this.bulletTravelDirection;
				this.bulletPlotY = (this.charPositionY + SPRITE_SIZE/2);
				let bulletRight = new SpriteControl(this.ctx , daveBullet , this.bulletWidth , this. bulletHeight , this.bulletPlotX , this.bulletPlotY , this.bulletWidth , this.bulletHeight , 1);
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

	// renderMonsterBullets(){
	// 	this.recordCharPosition(this.monster.monsterPositionX , this.monster.monsterPositionY)
	// 	if(this.bulletTravelDirection <= 500){
	// 		this.bulletPlotX = (this.charPositionX + SPRITE_SIZE) + this.bulletTravelDirection;
	// 		this.bulletPlotY = (this.charPositionY + SPRITE_SIZE/2);
	// 		let drawMonsterBullet = new SpriteControl(this.ctx , monsterBullet , this.bulletWidth , this.bulletHeight , this.bulletPlotX , this.bulletPlotY , this.bulletWidth , this.bulletHeight , 1);
	// 		drawMonsterBullet.drawBulletRight();
	// 	}else if(this.bulletTravelDirection > 500){
	// 		this.bulletPlotX = 0;
	// 		this.bulletPlotY = 0;
	// 		this.bulletTravelDirection = 5;
	// 		this.bulletFire = false;
	// 	}
	// }

}