import CarListValidate from '../Validator/CarListValidator.js';

class CarList {
	#names;
	#distance;

	constructor(names) {
		CarListValidate.validate(names);
		this.#names = names;
		this.#distance = Array.from(names).fill(0);
	}

	moveCarsByIsForward(forwardArr) {
		this.#names.forEach((_, i) => {
			if (forwardArr[i]) {
				this.moveCarByIndex(i);
			}
		});
	}

	moveCarByIndex(index) {
		this.#distance[index]++;
	}

	getNames() {
		return this.#names;
	}

	getDistance() {
		return this.#distance;
	}

	getCarNameAndDistanceArr() {
		const carNames = this.#names;

		const carNamesAndDistanceArr = carNames.map((name, i) => {
			const distanceArr = this.#distance;
			const targetDistance = distanceArr[i];
			return [name, targetDistance];
		});
		return carNamesAndDistanceArr;
	}
}

export default CarList;
