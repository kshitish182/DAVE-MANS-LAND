//level 1 image initialization


	let redBrick = new Image();
	redBrick.src = this.gameElements.redBrick.src;
	redBrick.onLoad = () => this.elementCounter++;


	let blank = new Image();
	blank.src = this.gameElements.blank.src;
	blank.onLoad = () => this.elementCounter++;

	let mudBrick = new Image();
	mudBrick.src = this.gameElements.mudBrick.src;
	mudBrick.onLoad = () => this.elementCounter++;

	let whiteDiamond = new Image();
	whiteDiamond.src = this.gameElements.whiteDiamond.src;
	whiteDiamond.onLoad = () => this.elementCounter++;

	let redDiamond = new Image();
	redDiamond.src = this.gameElements.redDiamond.src;
	redDiamond.onLoad = () => this.elementCounter++;

	let cup = new Image();
	cup.src = this.gameElements.cup.src;
	cup.onLoad = () => this.elementCounter++;

	let entryTunnel = new Image();
	entryTunnel.src = this.gameElements.entryTunnel.src;
	entryTunnel.onLoad = () => this.elementCounter++;

	let door = new Image();
	door.src = this.gameElements.door.src;
	door.onLoad = () => this.elementCounter++;