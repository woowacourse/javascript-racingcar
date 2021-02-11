class Model {
	constructor() {
		this.cars = [];
		this.count = 0;
		// { name: "", score: 0 }
	}

	generateCarNameArray(nameInputValue) {
		return nameInputValue.split(",");
	}

	setCarNames(nameInputValue) {
		const carNames = this.generateCarNameArray(nameInputValue);

		carNames.forEach((carName) => {
			const carObject = { name: carName, score: 0 };
			this.cars.push(carObject);
		});
	}

	// 1 - Math.random()을 Math.random()으로 바꿔라.
	getRandomNumber({ startNumber, endNumber }) {
		return startNumber + Math.floor((1 - Math.random()) * (endNumber - startNumber + 1));
	}

	// Model.move(Model.cars[0], 8);

	move(car, num) {
		if (num >= 4) {
			car.score += 1;
		}
	}

	setCount(value) {
		this.count = value;
	}
}

export default new Model();
