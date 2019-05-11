
class TrollElements{
	constructor(ctx , hero){
		this.ctx = ctx;
		this.hero = hero;

		this.boobyTrap = false;
		this.checkValue = true;
	}

	// drawELementsLevel1(){
	// 	this.ctx.fillRect(75 , 280 , 20 ,20);
	// 	this.ctx.fillStyle = 'red';
	// 	this.ctx.strokeStyle = 'red';
	// 	this.ctx.fillRect(940 , 110 , 10 ,10);
	// 	this.ctx.fillStyle = 'red';


	// }

	renderTrollElements(){
		this.checkTrophyCollection();
		if(this.boobyTrap){
			let triggerPosX = 75;
			let triggerPosY = 300;
			let laserSrcPosX1 = 50; //left-facing
			let laserSrcPosY1 = 110;
			let laserSrcPosX2 = 525; // down-facing
			let laserSrcPosY2 = 50;
			let laserObj = new LaserSet(this.ctx , triggerPosX , triggerPosY , laserSrcPosX1 , laserSrcPosY1 , laserSrcPosX2 , laserSrcPosY2);

			laserObj.drawLaserSet();
			this.checkTrollElmCollision(laserObj);
		}
	}

	checkTrophyCollection(){
		if(doorOpen && this.checkValue){
			this.boobyTrap = true;
			this.checkValue = false;
		}
	}

	checkTrollElmCollision(laserObj){
		if(this.hero.heroPositionX + SPRITE_SIZE>= (laserObj.laserSrcPosX2) || this.hero.heroPositionY <= (laserObj.laserSrcPosY1 + 2.5)){
			gameOver = 'true';
		}

		//300 and 50 are calculated position for collision detection at which the button is programmed to function on player collision

		if(this.hero.heroPositionY <= 300  
												&& 
			this.hero.heroPositionX <= 50 + SPRITE_SIZE )
		{
				this.boobyTrap = false;
				console.log(this.boobyTrap);	
		}
	}



}