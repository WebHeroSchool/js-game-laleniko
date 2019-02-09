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
		zone[randomZone].addEventListener('click', () => console.log(zone[randomZone].innerHTML),{once: true});
	}

	deleteEmojy() {
		let zone = document.querySelectorAll(".game-zone__hole");
		for (let i = 0; i<5; i++) {
			if (zone[i].innerHTML !== "") {
				zone[i].innerHTML = "";
			}
		}
	}

	emojyDance() {
		this.interval = setInterval( () => this.createEmojy(),3000);

	}
	
}

let game = new Game;
game.emojyDance();