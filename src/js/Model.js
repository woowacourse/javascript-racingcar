class Model {
	constructor() {
		this.cars = [];
	}

	generateCarNameArray(nameInputValue) {
		return nameInputValue.split(",");
	}

	makeCarNames(nameInputValue) {
		const carNames = this.generateCarNameArray(nameInputValue);

		for (let i = 0; i < carNames.length; i++) {
			this.cars.push(carNames[i]);
		}
	}
}

export default new Model();
