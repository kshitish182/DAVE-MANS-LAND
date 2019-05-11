class Spikes{
	constructor(ctx , topPosX , topPosY , leftPosX , leftPosY , rightPosX , rightPosY){
		this.ctx = ctx;
		//co-ordinates of top vertices of the spike
		this.topPosX = topPosX;
		this.topPosY = topPosY;

		//co-ordinates of left vertice of the spike
		this.leftPosX = leftPosX;
		this.leftPosY = leftPosY;

		//co-ordinated of right vertice of the spike
		this.rightPosX = rightPosX;
		this.rightPosY = rightPosY;

		this.spikeCollision = false;
	}

	drawSpike(){
		this.ctx.beginPath();
		this.ctx.moveTo(this.topPosX, this.topPosY);
		this.ctx.lineTo(this.leftPosX , this.leftPosY);
		this.ctx.lineTo(this.rightPosX , this.rightPosY);
		this.ctx.fillStyle = 'white';
		this.ctx.fill();
	}

	renderSpikes(){
		this.drawSpike(this.topPosX , this.topPosY , this.leftPosX , this.leftPosY , this.rightPosX , this.rightPosY);
	}


}