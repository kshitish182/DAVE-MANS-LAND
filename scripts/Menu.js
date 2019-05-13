let outerCanvas = document.getElementById('outer-canvas');
let context = outerCanvas.getContext('2d');
let startMenu = document.getElementById('startMenu');
let scoreBoardContainer = document.getElementById('scoreBoardContainer');
let messageContainer = document.getElementById('messageContainer');

//styling outer canvas
outerCanvas.width = 1000;
outerCanvas.height = 500;

outerCanvas.style.position = 'absolute';
outerCanvas.style.margin = 'auto';
outerCanvas.style.left = '0';
outerCanvas.style.right = '0';
outerCanvas.style.top = '50px';
outerCanvas.style.border = '1px solid black';
// outerCanvas.style.border = "1px solid black";

let startGame = document.getElementById('startButton');

startGame.addEventListener('click' , event =>{
	console.log(event);
	startMenu.style.display = 'none';
	outerCanvas.style.display='block';
	scoreBoardContainer.style.display = 'block';
	messageContainer.style.display = 'block';
});