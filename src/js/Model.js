import ElementManager from "./ElementManager.js";
class Model {
	constructor() {
		this.cars = [];
	}

	generateCarNameArray(nameInputValue) {
		return nameInputValue.split(",");
	}

	setCarNames(nameInputValue) {
		const carNames = this.generateCarNameArray(nameInputValue);
		carNames.forEach((carName) => this.cars.push(carName));
		console.log({ cars: this.cars });
	}

	getRandomNumber({ startNumber, endNumber }) {
		return startNumber + Math.floor((1 - Math.random()) * (endNumber - startNumber + 1));
	}
}

export default new Model();
