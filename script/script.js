class Game {
	constructor() {
		this.score = 0;
		this.lives = 3;
		this.isRunnig = true;
		this.isMouse = false;
		this.emojisArr = ['🐭', '🐼', '🐻', '🦁', '🐽', '🐨', '🦊', '🐱', '🐰', '🐯'];
	}

	createEmojy() {
		this.deleteEmojy();
		let randomAnimal = Math.floor(Math.random() * 9);
		let randomZone = Math.floor(Math.random() * 5);
		let elem = this.emojisArr[randomAnimal];
		let zone = document.querySelectorAll(".game-zone__hole");
		zone[randomZone].innerHTML = elem;
		zone[randomZone].addEventListener('click', () => this.isMouses(elem), {once:true});
		this.innerScores();
	}

	deleteEmojy() {
		let zone = document.querySelectorAll(".game-zone__hole");
		for (let i = 0; i<5; i++) {
			if (zone[i].innerHTML !== "") {
				zone[i].innerHTML = "";
			}
		}
	}

	innerLives() {

	}

	innerScores() {
		let elem = document.querySelectorAll(".game-header__points");
		elem[0].innerHTML = this.score;
	}

	isMouses(a) {
		console.log(a);
		if (a!=='🐭') {
			this.score += 10;
		} else 
		this.lives -= 1;
	}

	emojyDance() {
		this.interval = setInterval( () => this.createEmojy(),1500);
	}
	
}

let game = new Game;
game.emojyDance();