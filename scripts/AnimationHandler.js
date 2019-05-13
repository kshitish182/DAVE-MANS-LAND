class AnimationHandler{
	constructor(ctx , textMessage , transitionMap){
		this.transitionMap = transitionMap;
		this.ctx = ctx;
		this.textMessage = textMessage;
		//for transition level
		this.tileWidth = 20;
		this.tileHeight = 10;

		this.heroPositionX = 50;
		this.heroPositionY = 250;

		this.buttonPress = true

		this.mapTransition = new Map(this.transitionMap , 20 , 10 , this.ctx);
		this.animatedHero = new SpriteControl(this.ctx , character, 50 ,50 , this.heroPositionX , this.heroPositionY , 50 , 50 ,3);

		this.distanceCount = 0;
		this.dx = 5 // direction in x axis the charcater will animate

		this.onAir = false;

		this.animationOver = false;

		this.frameCount = 0;	
	}

	drawTransitionMap(){
		this.mapTransition.drawMap();
		this.animateHero();
	}

	animateHero(){
		if(this.distanceCount <= 900){
			this.textMessage.message = "CONGRATULATION YOU LEVELED UP!!"
			this.animatedHero.drawSpriteRight(this.heroPositionX , this.heroPositionY , this.buttonPress , this.onAir);
			this.heroPositionX += this.dx;
			this.distanceCount += this.dx;
			this.animatedHero.spritePlotX = this.heroPositionX;
		}else if(this.distanceCount > 900){
			this.distanceCount = 0;
			this.animationOver = true;
		}
	}

	handleGameOver(){
		if(this.frameCount <= 180){
			this.frameCount++;
			this.textMessage.message = 'GAME OVER!!!'
		}else if(this.frameCount > 180){
			console.log('here');
			this.animationOver = true;
		}

	}

}