
class TrollElements{
	constructor(ctx , hero , mapCurrentLevel){
		this.ctx = ctx;
		this.hero = hero;

		this.boobyTrap = false;
		this.checkValue = true;
		this.spikeCollision = false;

		this.mapCurrentLevel = mapCurrentLevel;

		this.spike1 = new Spikes(this.ctx , 525 , 400 , 500 , 450 , 550 , 450);
		this.spike2 = new Spikes(this.ctx , 575 , 300 , 550 , 350 , 600 , 350);
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

			this.initSpike();
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

	initSpike(){

		if(this.spike1.spikeCollision){
			this.spike1.renderSpikes();
			console.log('here');
		}
			
		if(this.spike2.spikeCollision){
			this.spike2.renderSpikes();	
		}

		// console.log(spike1);
		
		this.checkSpikeCollision(this.spike1);	
		this.checkSpikeCollision(this.spike2);
	}

	checkSpikeCollision(objRefrence){
		if( (this.hero.heroPositionX + SPRITE_SIZE) >= (objRefrence.topPosX - 25) 
																&&
				this.hero.heroPositionX <= objRefrence.topPosX + 25
																&&
				(this.hero.heroPositionY + SPRITE_SIZE) >= objRefrence.topPosY
			)
		{
			objRefrence.spikeCollision = true;
			gameOver = true;
		}

	}

	




}