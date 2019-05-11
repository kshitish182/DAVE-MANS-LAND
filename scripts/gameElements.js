
let imageLoaded = false;
let gameOver = false;
let gameLevel = 1;
let doorOpen = false;
let gunObtained = false;

let specialController = [false , false];
let controller = [false, false, false]; 

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

	ironRod : {
		index: '8',
		src: 'assets/images/iron-rod.png',
		collision : true
	},

	gun : {
		index : '9',
		src : 'assets/images/gun.png',
	},

	character : {
		src: 'assets/images/character.png'
	},

	charDeath : {
		src : 'assets/images/char-death.png'
	},

	monster : {
		src : 'assets/images/monster.png'
	},

	daveBullet : {
		src : 'assets/images/dave-bullet.png'
	},

	monsterBullet : {
		src : 'assets/images/monster-bullet.png'
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

let ironRod = new Image();
ironRod.src = gameElements.ironRod.src;

let character = new Image();
character.src = gameElements.character.src;

let charDeath = new Image();
charDeath.src = gameElements.charDeath.src;

let gun = new Image();
gun.src = gameElements.gun.src;

let monster = new Image();
monster.src = gameElements.monster.src;

let daveBullet = new Image();
daveBullet.src = gameElements.daveBullet.src;

let monsterBullet = new Image();
monsterBullet.src = gameElements.monsterBullet.src;

let outerCanvas = document.getElementById('outer-canvas');
let context = outerCanvas.getContext('2d');


//styling outer canvas
outerCanvas.width = 1000;
outerCanvas.height = 500;
outerCanvas.style.border = "1px solid black";
