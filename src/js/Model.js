import View from "./View.js";

class Model {
	constructor() {
		this.cars = [];
		this.count = 0;
	}

	initCars(carNames) {
		this.cars = this.generateCars(carNames);
	}

	setCount(value) {
		this.count = value;
	}

	generateCars(nameInputValue) {
		return nameInputValue.split(",").map((carName) => ({ name: carName, score: 0 }));
	}

	getRandomNumber({ startNumber, endNumber }) {
		return startNumber + Math.floor(Math.random() * (endNumber - startNumber + 1));
	}

	runArrowRenderByCount() {
		for (let i = 0; i < this.count; i++) {
			const boolsAboutMovement = this.getBoolsAboutMovement();
			View.arrowRender(boolsAboutMovement);
		}
	}

	isInMovableRange(number, min, max) {
		return number >= min && number <= max;
	}

	iterateByCarsToMove() {
		const moveOrNot = (car) => {
			const randomNumber = this.getRandomNumber({ startNumber: 0, endNumber: 9 });
			this.isInMovableRange(randomNumber, 4, 9) && this.move(car);
		};
		this.cars.forEach(moveOrNot);
	}

	getBoolsAboutMovement() {
		const previousScores = [...this.cars].map((car) => car.score);
		this.iterateByCarsToMove();
		const boolsAboutMovement = this.cars.map((car, i) => car.score !== previousScores[i]);
		return boolsAboutMovement;
	}

	move(car) {
		car.score++;
	}

	getResultText() {
		let maxScore = 0;
		this.cars.forEach((car) => car.score > maxScore && (maxScore = car.score));
		const winners = this.cars.filter((car) => car.score === maxScore).map((car) => car.name);
		return `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
	}
}

export default new Model();
