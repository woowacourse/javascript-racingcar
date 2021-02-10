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

	addCountButtonEvent(callback) {
		const countButton = ElementManager.getCountButton();
		countButton.addEventListener("click", callback);
	}
}

export default new Model();
