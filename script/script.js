class Game {
	constructor() {
		this.score = 0;
		this.lives = 3;
		this.level = 1;
		this.isRunnig = true;
		this.isMouse = false;
		this.emojisArr = ['🐭', '🐼', '🐻', '🦁', '🐽', '🐨', '🦊', '🐱', '🐰', '🐯'];
		this.emojiNow =  '🐭';
		this.allMouse = 0;
		this.speed = 2500;
	}

	createEmojy() {
		if (this.lives <= 0) {
			let elem = document.querySelectorAll(".game-zone__popup-gameover");
			let scores = document.querySelectorAll(".game-over__score");
			scores[0].innerHTML = this.score;
			elem[0].classList.remove('active');
		} else {
			this.deleteEmojy();
			let randomAnimal = Math.floor(Math.random() * 9);
			let randomZone = Math.floor(Math.random() * 5);
			let elem = this.emojisArr[randomAnimal];
			this.emojiNow = elem;
			let zone = document.querySelectorAll(".game-zone__hole");
			zone[randomZone].innerHTML = elem;
			this.interval = setTimeout( () => this.createEmojy(),this.speed);
		}
	}

	deleteEmojy() {
		let zone = document.querySelectorAll(".game-zone__hole");
		for (let i = 0; i<5; i++) {
			if (zone[i].innerHTML !== "") {
				zone[i].innerHTML = "";
			}
		}
	}

	gameSpeed() {
		let elem = document.querySelectorAll(".game-header__star-value");
		elem[0].classList.remove('game-header__star-value_animation');
		if (this.allMouse % 5===0 && this.speed > 1000) {
			this.speed -= 500;
			this.level +=1;
			elem[0].classList.add('game-header__star-value_animation');
			elem[0].innerHTML = this.level;
		}
	}

	innerLives() {
		let elem = document.querySelectorAll(".game-header__heart");
		for (let i = 0; i < 3; i++) {
			elem[i].classList.remove('game-header__heart_red')
		}
		for (let i = 0; i < this.lives; i++) {
			elem[i].classList.add('game-header__heart_red');
		}

	}

	innerScores() {
		let elem = document.querySelectorAll(".game-header__points");
		elem[0].innerHTML = this.score;
	}

	isMouses() {
		if (this.emojiNow === '🐭') {
			this.score += 10;
			this.allMouse +=1;
			this.innerScores();
			this.gameSpeed();

		} else 
			this.lives -= 1;
			this.innerLives();
	}

	emojyDance() {
		let zone = document.querySelectorAll(".game-zone__hole");
		for (var i = 0; i < zone.length; i++) {
			zone[i].addEventListener('click', () => this.isMouses());
		}
		this.createEmojy();
	}
	
}

let game = new Game;

let rulesOpen = document.querySelectorAll('.game-header__help');
let rulesClose = document.querySelectorAll('.game-zone__popup-button_help');
let rules = document.querySelectorAll('.game-zone__popup-help');
let gameStart = document.querySelectorAll('.game-header__start');

gameStart[0].addEventListener('click',() => {game.emojyDance()});
rulesOpen[0].addEventListener('click', () => {rules[0].classList.remove('active')});
rulesClose[0].addEventListener('click', () => {rules[0].classList.add('active')})