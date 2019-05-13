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

		this.frameCount = 0;

		this.bulletTravelDirection = 5;
		this.bulletFire = false;
		this.bulletTravelDistance = 0; //for tracking range of the bullet
	}

	checkBulletCondition(){
		if(specialController[0] && !this.bulletFire){
			if(gunObtained){
					this.recordCharPosition(this.hero.heroPositionX , this.hero.heroPositionY);
				if(this.hero.charRightFaced){
					this.bulletFire = true;
				}
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
			if(this.bulletTravelDistance <= 500){
				this.bulletPlotX = (this.charPositionX + SPRITE_SIZE) + this.bulletTravelDirection;
				this.bulletPlotY = (this.charPositionY + SPRITE_SIZE/2);
				let devBullet = new SpriteControl(this.ctx , daveBullet , this.bulletWidth , this. bulletHeight , this.bulletPlotX , this.bulletPlotY , this.bulletWidth , this.bulletHeight , 1);
					devBullet.drawBullet();
					this.bulletTravelDirection += 5;
				this.bulletTravelDistance += 5;
			}else if(this.bulletTravelDistance > 500){
				this.bulletPlotX = 0;
				this.bulletPlotY = 0;
				this.bulletTravelDirection = 5;
				this.bulletTravelDistance = 0;
				this.bulletFire = false;
			}
			this.bulletCollision();
		}
	}

	renderMonsterBullets(){
		this.recordCharPosition(this.monster.monsterPositionX , this.monster.monsterPositionY)
		if(this.bulletTravelDistance <= 500){
			this.bulletPlotX = (this.charPositionX) + this.bulletTravelDirection;
			this.bulletPlotY = (this.charPositionY + SPRITE_SIZE/2);
			let drawMonsterBullet = new SpriteControl(this.ctx , monsterBullet , this.bulletWidth , this.bulletHeight , this.bulletPlotX , this.bulletPlotY , this.bulletWidth , this.bulletHeight , 1);
				drawMonsterBullet.drawBullet();
				this.bulletTravelDirection -= 5;
				this.bulletTravelDistance +=5;
		}else if(this.bulletTravelDistance > 500){
			this.bulletPlotX = 0;
			this.bulletPlotY = 0;
			this.bulletTravelDirection = 5;
			this.bulletTravelDirection = 0;
			this.bulletFire = false;
		}
	}

	bulletCollision(){
			if(this.bulletPlotX + this.bulletWidth >= this.monster.monsterPositionX
																			 && 
				this.bulletPlotX <= (this.monster.monsterPositionX + this.monster.monsterWidth) 
																			&&
				this.bulletPlotY + this.bulletHeight >= this.monster.monsterPositionY
																			&&
				this.bulletPlotY <= this.monster.monsterPositionY + this.monster.monsterHeight
				)
			{
				this.resolveBulletCollision();
			}
	}

	resolveBulletCollision(){
		this.recordCharPosition(this.monster.monsterPositionX , this.monster.monsterPositionY);
		let monsterDeath = new SpriteControl(this.ctx, charDeath , 48 , 50 , this.charPositionX , this.charPositionY , 50 ,50 , 1);
		this.frameCount++;
 			if(this.frameCount < 200){
				monsterDeath.drawSpriteStatic();
				this.monster.monsterDeath = true;
				this.bulletFire = false;
			}else if(this.frameCount > 200){
				this.monster.monsterDeath = true;
			}
	}

}