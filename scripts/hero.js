let heroInitialPosX = 0;
let heroInitialPosY = 0;
let controller = [false, false, false]; 

const SPRITE_SIZE = 50;

class Hero{
	constructor(heroPositionX , heroPOsitionY , ctx , gravity){
		this.heroPositionX = heroPositionX;
		this.heroPositionY = heroPositionY;
		
		//distance in x and y direction moved by the character in a single event
		this.directionX = 5;
		this.directionY = 5;

		this.ctx = ctx;
		this.gravity = gravity;

		//for counting number of frames to manage speed
		this.frameCount = 0;
		this.characterDefaultDisplay = true;
		this.jump = false;

		this.mapLayouts = mapLayouts;
		this.collisionMap = collisionMap;
		//creating sprite objects
		this.heroSpriteRight = new SpriteControl(this.ctx , character , 50 ,50 ,this.heroPositionX , this.heroPositionY , 50 ,50 ,3);
		this.heroSpriteLeft = new SpriteControl(this.ctx , character , 50 , 50 , this.heroPositionX , this.heroPositionY , 50 , 50 ,3);
		this.heroSpriteUp = new SpriteControl(this.ctx , character , 50 ,50 , this. heroPositionX, this.heroPositionY,50 ,50 ,1);


		//intialising object properties
		this.heroSpriteLeft.spriteInitialPosx = 250;
	}

	renderHero(buttonPress){
		//this is the default positioning of the character (right faced)
		if(controller[2] || this.characterDefaultDisplay){
			this.heroSpriteRight.drawSpriteDynamic(this.directionX, 0 , buttonPress);
		}else if(controller[0]){
			this.heroSpriteLeft.drawSpriteDynamic(this.directionX , 0 , buttonPress);
		}else if(controller[1]){
			this.heroSpriteUp.drawSpriteStatic();
			this.jump=true;
		}
		// if(controller[2]){
		// 	this.characterDefaultDisplay = true;
		// }		
	}

	moveHero(buttonPress){
			this.renderHero(buttonPress);
			this.frameCount++
			if(this.frameCount >= 2){
				if(controller[2] && controller[1]){
					this.heroPositionX += this.directionX;
					this.heroPositionY -= this.directionY;
					this.updatePosition();
				}
				else if(controller[1] && controller[0]){
					this.heroPositionY -= this.directionY;
					this.heroPositionX -= this.directionX;
					this.updatePosition();
				}
				else if(controller[1]){
					this.heroPositionY -= 15;
					this.heroPositionX = this.heroPositionX;
					this.updatePosition(); 
					this.jump = false;
				}
				else if(controller[0]){
					this.heroPositionX -= this.directionX;
					this.heroPositionY = this.heroPositionY;
					this.updatePosition();
				}
				else if(controller[2]){
					this.heroPositionX += this.directionX;
					this.heroPositionY = this.heroPositionY;
					this.updatePosition();
				 }
			}
			this.initGravity();	
	}

	initGravity(){
		// console.log(this.gravity);
		if(this.gravity === 'on'){
			//gravity pulls the hero downward in 1/4 the direction it moves
			this.heroPositionY += this.directionX/4;
			this.updatePosition();
		}
	}

	updatePosition(){
		
		this.heroSpriteRight.spritePlotX = this.heroPositionX;
		this.heroSpriteRight.spritePlotY = this.heroPositionY;
		this.heroSpriteLeft.spritePlotX = this.heroPositionX;
		this.heroSpriteLeft.spritePlotY = this.heroPositionY;
		this.flag = true;
	}

	scanElements(mapLevel1){
		for(let i = 0 ; i < mapLevel1.tileHeight ; i++){
			for(let j = 0 ; j < mapLevel1.tileWidth ; j++){
				switch(this.collisionMap.level1[((SPRITE_SIZE*j) + i )]){
					case 2:
						this.checkCollision(j , i); //x-cordinates , y-cordinates
						break;
				}
			}
		}
	}

	//checking for collision after scanning the elements

	checkCollision(x , y){
		//for left side wall of the elements
		if((this.heroPositionX + SPRITE_SIZE) > (SPRITE_SIZE * x)
													&&
				(this.heroPositionX < (SPRITE_SIZE*x + SPRITE_SIZE))
													&&
				(this.heroPositionY  > SPRITE_SIZE * y)
													&&
				(this.heroPositionY < (SPRITE_SIZE*y + SPRITE_SIZE)))
		{
				console.log('hero' , this.heroPositionX , this.heroPositionY);
				console.log('sprite' , SPRITE_SIZE*x , SPRITE_SIZE*y);
				this.directionX = 0;
				this.updatePosition();

		}
	}

}