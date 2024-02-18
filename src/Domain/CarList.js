import CarListValidate from '../Validator/CarListValidator.js';

class CarList {
	#names;
	#distance;

	constructor(names) {
		CarListValidate.validate(names);
		this.#names = names;
		this.#distance = Array.from(names).fill(0);
	}

	move(index) {
		this.#distance[index]++;
	}

	getNames() {
		return this.#names;
	}

	getDistance() {
		return this.#distance;
	}
}

export default CarList;
