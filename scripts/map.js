

class Map{
	constructor(mapLevel, tileWidth , tileHeight , ctx){
		this.mapLevel = mapLevel;
		this.gameElements = gameElements;
		this.elementSize = 50; //width and height is same
		this.tileWidth = tileWidth;
		this.tileHeight = tileHeight;
		this.elementCounter = 0;
		this.loadComplete = false;
		this.ctx = ctx;

		this.spriteCreater = new SpriteControl(ctx , cup , 50 , 50 , 0 , 0 , 50 ,50 ,5)
	}

	drawMap(){
		for(let i = 0 ; i < this.tileHeight ; i++){
			for(let j = 0 ; j< this.tileWidth ; j++){
				switch(this.mapLevel[((i*this.tileWidth) + j)]){
					
					case 1:
						this.ctx.drawImage(redBrick , j*this.elementSize , i*this.elementSize , this.elementSize , this.elementSize);
					break;

					case 0:
						this.ctx.drawImage(blank , j*this.elementSize , i*this.elementSize , this.elementSize , this.elementSize);
						break;

					case 2:
						this.ctx.drawImage(mudBrick , j*this.elementSize , i*this.elementSize , this.elementSize , this.elementSize);
						break;

					case 3:
						this.ctx.drawImage(whiteDiamond , j*this.elementSize , i*this.elementSize , this.elementSize , this.elementSize);
						break;

					case 4:
						this.ctx.drawImage(redDiamond, j*this.elementSize , i*this.elementSize , this.elementSize , this.elementSize);
						break;

					case 5:
					this.spriteCreater.spritePlotX = j*50;
					this.spriteCreater.spritePlotY = i*50;
					this.spriteCreater.drawSpriteStatic();
					break;

					case 6:
						this.ctx.drawImage(entryTunnel , j*this.elementSize , i*this.elementSize , this.elementSize , this.elementSize);
						break;

					case 7:
						this.ctx.drawImage(door , j*this.elementSize , i*this.elementSize , this.elementSize , this.elementSize);
						break;

					case 8:
					this.ctx.drawImage(ironRod , j*this.elementSize , i*this.elementSize  ,this.elementSize , this.elementSize);
					break;

					case 9:
					this.ctx.drawImage(gun , j*this.elementSize , i*this.elementSize , this.elementSize , this.elementSize);
					break;

					default:
					console.log('imagecode not found');
				}
			}
		}
	}
}
