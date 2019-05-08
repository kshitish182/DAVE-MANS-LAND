class LaserSet{
	constructor(ctx , triggerPosX , triggerPosY , laserSrcPosX1 , laserSrcPosY1 , laserSrcPosX2 , laserSrcPosY2){
		this.ctx = ctx;
		this.triggerPosX = triggerPosX;
		this.triggerPosY = triggerPosY;
		this.laserSrcPosX1 = laserSrcPosX1; //left-facing
		this.laserSrcPosY1 = laserSrcPosY1;
		this.laserSrcPosX2 = laserSrcPosX2; //down-facing
		this.laserSrcPosY2 = laserSrcPosY2;

		this.triggerSize = 20;
		this.laserSrcSize = 10;

		this.laserBeamPosX1 = laserSrcPosX1;
		this.laserBeamPosY1 = laserSrcPosY1 + 2.5;
		this.laserBeamPosX2 = laserSrcPosX2 + 2.5;
		this.laserBeamPosY2 = laserSrcPosY2;
	}


	drawLaserParts(xCord , yCord , width, height , color){
		this.ctx.fillRect(xCord , yCord , width , height);
		this.ctx.fillStyle = 'red';
	}

	drawLaserSet(){
		//trigger button
		this.drawLaserParts(this.triggerPosX , this.triggerPosY , this.triggerSize , this.triggerSize);

		//laser src
		this.drawLaserParts(this.laserSrcPosX1 , this.laserSrcPosY1 , this.laserSrcSize, this.laserSrcSize);
		this.drawLaserParts(this.laserSrcPosX2 , this.laserSrcPosY2 , this.laserSrcSize, this.laserSrcSize);
		this.renderLaserBeam();
	}

	renderLaserBeam(){
		this.drawLaserParts(this.laserBeamPosX1 , this.laserBeamPosY1 , 850 , 5);// left-facing
		this.drawLaserParts(this.laserBeamPosX2 , this.laserBeamPosY2 , 5 , 400); // down-facing
	}
}