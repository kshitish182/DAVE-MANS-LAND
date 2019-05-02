
let imageLoaded = false;

//gameElement information

const gameElements = {
	redBrick : {
		index: '1',
		src : 'assets/images/red-brick.png',
		collision : true
	},

	blank : {
		index : '0',
		src : 'assets/images/empty-space.png'
	},

	mudBrick : {
		index : '2',
		src : 'assets/images/mud-brick.png',
		collision : true
	},

	whiteDiamond : {
		index : '3',
		src : 'assets/images/white-diamond.png'
	},

	redDiamond : {
		index : '4',
		src : 'assets/images/red-diamond.png'
	},

	cup: {
		index : '5',
		src : 'assets/images/cup.png'
	},

	entryTunnel: {
		index : '6',
		src : 'assets/images/tunnel.png',
		collision : true
	},

	door: {
		index : '7',
		src : 'assets/images/door.png',
		collision : true
	},

	characterRight : {
		src: 'assets/images/character-right.png'
	}
}


//image initialisation

let redBrick = new Image();
redBrick.src = gameElements.redBrick.src;
redBrick.onLoad = () => imageLoaded = true;

let blank = new Image();
blank.src = gameElements.blank.src;

let mudBrick = new Image();
mudBrick.src = gameElements.mudBrick.src;

let whiteDiamond = new Image();
whiteDiamond.src = gameElements.whiteDiamond.src;

let redDiamond = new Image();
redDiamond.src = gameElements.redDiamond.src;

let cup = new Image();
cup.src = gameElements.cup.src;

let entryTunnel = new Image();
entryTunnel.src = gameElements.entryTunnel.src;

let door = new Image();
door.src = gameElements.door.src;