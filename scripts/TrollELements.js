
class TrollElements{
	constructor(ctx , hero , mapCurrentLevel , scoreBoardObj){
		this.ctx = ctx;
		this.hero = hero;

		this.boobyTrap = false;
		this.checkValue = true;
		this.spikeCollision = false;

		this.mapCurrentLevel = mapCurrentLevel;
		this.scoreBoardObj = scoreBoardObj;

		//level 1 spikes
		this.spike1 = new Spikes(this.ctx , 525 , 400 , 500 , 450 , 550 , 450); //top vertice(x,y) , left vertice(x,y) , right vertice(x,y)
		this.spike2 = new Spikes(this.ctx , 575 , 300 , 550 , 350 , 600 , 350);

		//level 2 spikes
		this.spike3 = new Spikes(this.ctx, 225 , 100 , 200 , 150 , 250 , 150);
		this.spike4 = new Spikes(this.ctx , 1225, 400 , 1200 , 450 , 1250 , 450);

	}


//rendering troll elements of their respective levels
	renderTrollElements(){
		switch(this.scoreBoardObj.currentLevel){
			case 1:
				this.loadTrollElementslvl1();
				break;
			case 2:
				this.loadTrollElementslvl2();
				break;
		}
	}

	//lvl 1 troll elements
	loadTrollElementslvl1(){
		this.initSpike(this.spike1);
		this.initSpike(this.spike2);
		this.initLaser();
	}

	loadTrollElementslvl2(){
		this.initSpike(this.spike3);
		this.initSpike(this.spike4);
	}

	initLaser(){
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

	//lvl 2 troll elements

	checkTrophyCollection(){
			if(doorOpen && this.checkValue){
				this.boobyTrap = true;
				this.checkValue = false;
			}
	}

	checkTrollElmCollision(objRefrence){
		if(this.hero.heroPositionX + SPRITE_SIZE>= (objRefrence.laserSrcPosX2) || this.hero.heroPositionY <= (objRefrence.laserSrcPosY1 + 2.5)){
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

	initSpike(objRefrence){

		if(objRefrence.spikeCollision){
			objRefrence.renderSpikes();
		}
		
		this.checkSpikeCollision(objRefrence);	
	}


	//the spikes are equilateral triangle with height 50 which divides the base equally ,so 25 and 50 are used for detecting collision
	checkSpikeCollision(objRefrence){
		if( (this.hero.heroPositionX + SPRITE_SIZE) >= (objRefrence.topPosX - 25) 
																&&
				this.hero.heroPositionX <= objRefrence.topPosX + 25
																&&
				(this.hero.heroPositionY + SPRITE_SIZE) >= objRefrence.topPosY
																&&
				(this.hero.heroPositionY <= objRefrence.topPosY + 50)        
			)
		{
			objRefrence.spikeCollision = true;
			gameOver = true;
		}

	}

}