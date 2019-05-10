class Monster{
	constructor(ctx , monsterCenterX , monsterCenterY){
		this.ctx = ctx;
		this.monsterCenterX = monsterCenterX;
		this.monsterCenterY = monsterCenterY;
		this.monsterPositionX = monsterCenterX;
		this.monsterPositionY = monsterCenterY;
		this.monsterWidth = 50;
		this.monsterHeight = 74;
		this.movementRadius = 100;

		this.angle = 0;
	}

	calcMonsterPosition(){
		if(this.angle <= 360){
			this.monsterPositionX = this.monsterCenterX + this.movementRadius*(Math.cos(this.angle * (Math.PI/180)));
			this.monsterPositionY = this.monsterCenterY + this.movementRadius*(Math.sin(this.angle * (Math.PI/180)));
			this.angle++;
		}else if(this.angle >= 361){
			this.angle = 0;
		}
	}
	renderMonster(){
		this.calcMonsterPosition();
		let monsterMotion = new SpriteControl(this.ctx ,monster ,this.monsterHeight ,this.monsterWidth ,this.monsterPositionX ,this.monsterPositionY ,this.monsterWidth ,this.monsterHeight , 1);
		monsterMotion.drawMonster();
	}
}
