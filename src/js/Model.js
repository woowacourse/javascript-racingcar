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

	move(car, number) {
		if (number >= 4 && number <= 9) car.score++;
	}
}

export default new Model();
