import { GAME_SETTINGS, MESSAGES } from "./constants.js";
import Utils from "./utils.js";

class Model {
	constructor() {
		this._cars = [];
		this._count = 0;
	}

	get cars() {
		return this._cars;
	}

	get count() {
		return this._count;
	}

	set cars(value) {
		this._cars = value.split(",").map((name) => ({ name, score: 0 }));
	}

	set count(value) {
		this._count = value;
	}

	initializeCars(inputValue) {
		this.cars = inputValue;
	}

	move(index) {
		this.cars[index].score++;
	}

	clearStates() {
		this._cars = [];
		this._count = 0;
	}
}

export default Model;
