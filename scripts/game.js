

// let spriteHeroInitialX = 0;
// let spriteHeroInitialY = 0;
// let countSpriteImage = 0;
// let countSpriteImageHero = 0;


class Game{
	constructor(canvasWidth, canvasHeight , tileMap , context){
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');

		this.canvas.width = canvasWidth;
		this.canvas.height = canvasHeight;

		//styling and positioning canvas
		this.canvas.style.position = 'absolute';
		this.canvas.style.margin = 'auto';
		this.canvas.style.left = '0';
		this.canvas.style.right = '0';
		this.canvas.style.border = '1px solid black';	

		this.tileMap = tileMap;

		this.initialViewportShiftX = 0;
		this.initialViewportShiftY = 0;
		this.viewportWidth = 1000;
		this.viewportHeight = 500;
		
		this.frameCount = 0;
		

		//tracking the number of times the control button is pressed
		this.eventCounter = 0; 

		//creating objects
		this.scoreBoardObj= new ScoreBoard();
		this.textMessage = new TextHandler();
		this.mapCurrentLevel = new Map(this.tileMap.level1 , 20, 10 , this.ctx);
		this.hero = new Hero(100 , 400 , this.ctx , this.scoreBoardObj, this.textMessage, this.canvas); // 100 and 400 are initial position of the character
		this.trollELmObj  = new TrollElements(this.ctx , this.hero , this.mapCurrentLevel, this.scoreBoardObj);
		this.monster = new Monster(this.ctx, 1650 , 250 , this.hero);
		this.daveBullet = new Bullets(this.ctx , this.hero , this.monster);
		this.monsterBullet = new Bullets(this.ctx , this.hero , this.monster);
	}

	getMap(){
		switch(this.scoreBoardObj.currentLevel){
			case 1:
			this.mapCurrentLevel.mapLevel = this.tileMap.level1;
			break;

			case 2:
			this.mapCurrentLevel.mapLevel = this.tileMap.level2;
			this.mapCurrentLevel.tileWidth = 60;
		}
	}

	canvasInit(){
		// drawing the inner canvas in the outer canvas
		context.drawImage(this.canvas , this.initialViewportShiftX , this.initialViewportShiftY , this.canvas.width , this.canvas.height , 0, 0, 4000, 500);
	}

	mapRender(){
		this.getMap();
		this.mapCurrentLevel.drawMap();
	}

	heroControl(){
		this.hero.moveHero(this.buttonPress , this.mapCurrentLevel);
		this.hero.getElementsPosition(this.mapCurrentLevel);
		this.hero.checkDoorCondition(); // check to see if the door is unlocked or not
	}


	animate(){
	if(animationFrameStart){
		window.requestAnimationFrame(() => this.animate());
	}

	this.canvasInit();
	this.changeViewport();
	this.scoreBoardObj.renderScoreBoard();
	this.textMessage.renderMessage();
	this.mapRender();
	this.heroControl();
	this.monster.renderMonster();
	this.trollELmObj.renderTrollElements();
	this.daveBullet.renderDaveBullets();

	}

//used for sliding the canvas after overflow(character goes past the viewport)
	changeViewport(){
		if(this.scoreBoardObj.currentLevel != 1){
		
			if( this.hero.heroPositionX >= (this.viewportWidth - 25) && this.hero.heroPositionX <= 2*(this.viewportWidth - 25) ){
				this.initialViewportShiftX = this.viewportWidth;
			}else if(this.hero.heroPositionX > 2*(this.viewportWidth - 25)){
				this.initialViewportShiftX = 2*this.viewportWidth;
			}
			if(this.hero.heroPositionX <= (this.viewportWidth - 25)){
				this.initialViewportShiftX = 0;
			}else if(this.hero.heroPositionX < 2*(this.viewportWidth - 25)){
				this.initialViewportShiftX = this.viewportWidth;
			}
		}
	}
}

let game = new Game(4000 , 500 , mapLayouts);

game.hero.eventController();
game.animate();




