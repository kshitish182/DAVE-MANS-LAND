class TrollElements{
	constructor(ctx , hero){
		this.ctx = ctx;
		this.hero = hero;
	}

	// drawELementsLevel1(){
	// 	this.ctx.fillRect(75 , 280 , 20 ,20);
	// 	this.ctx.fillStyle = 'red';
	// 	this.ctx.strokeStyle = 'red';
	// 	this.ctx.fillRect(940 , 110 , 10 ,10);
	// 	this.ctx.fillStyle = 'red';


	// }

	renderTrollElements(){
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

	checkTrollElmCollision(laserObj){
		console.log(laserObj.laserSrcPosX2);
		console.log(this.hero.heroPositionX);
		if(this.hero.heroPositionX + SPRITE_SIZE>= (laserObj.laserSrcPosX2) || this.hero.heroPositionY <= (laserObj.laserSrcPosY1 + 2.5)){
			gameOver = 'true';
		}
	}



}