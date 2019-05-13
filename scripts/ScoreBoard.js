class ScoreBoard{
	constructor(){
		this.scoreCount = 0;
		this.daveLives = 5;
		this.currentLevel = 1;
	}

	renderScore(){
		let score = document.getElementById('score');
		score.innerHTML = this.scoreCount;
	}

	renderLevel(){
		let level = document.getElementById('level');
		level.innerHTML = this.currentLevel;
	}

	renderLife(){
		let lives = document.getElementById('lives');
		lives.innerHTML = this.daveLives;
	}

	renderScoreBoard(){
		this.renderScore();
		this.renderLevel();
		this.renderLife();
	}
}