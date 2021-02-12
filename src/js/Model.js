import View from "./View.js";

class Model {
	constructor() {
		this.cars = [];
		this.count = 0;
	}

	initCars(carNames) {
		this.cars = this.generateCars(carNames);
	}

	generateCars(nameInputValue) {
		return nameInputValue.split(",").map((carName) => ({ name: carName, score: 0 }));
	}

	isAlreadyCountClicked($settingContainer) {
		return $settingContainer.childElementCount !== 2;
	}

	setCount(value) {
		this.count = value;
	}

	runArrowRenderByCount() {
		for (let i = 0; i < this.count; i++) {
			const boolsAboutMovement = this.getBoolsAboutMovement();
			View.arrowRender(boolsAboutMovement);
		}
	}

	getBoolsAboutMovement() {
		const previousScores = [...this.cars].map((car) => car.score);
		this.iterateByCarsToMove();
		const boolsAboutMovement = this.cars.map((car, i) => car.score !== previousScores[i]);
		return boolsAboutMovement;
	}

	iterateByCarsToMove() {
		const moveOrNot = (car) => {
			const randomNumber = this.getRandomNumber({ startNumber: 0, endNumber: 9 });
			this.isInMovableRange(randomNumber, 4, 9) && this.move(car);
		};
		this.cars.forEach(moveOrNot);
	}

	getRandomNumber({ startNumber, endNumber }) {
		return startNumber + Math.floor(Math.random() * (endNumber - startNumber + 1));
	}

	isInMovableRange(number, min, max) {
		return number >= min && number <= max;
	}

	move(car) {
		car.score++;
	}

	getResultText() {
		const winners = this.getWinners();
		return `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
	}

	getWinners() {
		const maxScore = this.getMaxScore();
		const carObjectsWithMaxScore = this.getCarObjectsWithMaxScore(maxScore);
		return carObjectsWithMaxScore.map((car) => car.name);
	}

	getMaxScore() {
		return this.cars.reduce((maxScore, car) => (car.score > maxScore ? car.score : maxScore), 0);
	}

	getCarObjectsWithMaxScore(maxScore) {
		return this.cars.filter((car) => car.score === maxScore);
	}

	clearStates() {
		this.cars = [];
		this.count = 0;
	}

	validateNameInput(inputValue) {
		const names = inputValue.split(",");
		if (names.includes("")) {
			return { validity: false, alertMessage: "빈 문자인 이름은 등록할 수 없습니다." };
		} else if (names.some((name) => name.length > 5)) {
			return { validity: false, alertMessage: "5자를 넘는 이름은 등록할 수 없습니다." };
		}
		return { validity: true, alertMessage: null };
	}
}

export default new Model();
