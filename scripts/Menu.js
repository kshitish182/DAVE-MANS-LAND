
let startMenu = document.getElementById('startMenu');
let scoreBoardContainer = document.getElementById('scoreBoardContainer');
let messageContainer = document.getElementById('messageContainer');



// outerCanvas.style.border = "1px solid black";

let startGame = document.getElementById('startButton');

startGame.addEventListener('click' , event =>{
	console.log(event);
	startMenu.style.display = 'none';
	outerCanvas.style.display='block';
	scoreBoardContainer.style.display = 'block';
	messageContainer.style.display = 'block';
});