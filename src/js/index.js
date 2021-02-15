import {
	handleCarNamesSubmit,
	handleCountSubmit,
} from './controller/inputController.js';
import {
	handleRestartButton,
	resetAllViews,
} from './controller/winnerController.js';
import { SELECTOR } from './keys.js';
import { $ } from './utils.js';
import Car from './model/Car.js';

class App {
	constructor() {
		this.cars = [];
		resetAllViews();
		$(SELECTOR.CAR_NAMES_SUBMIT).addEventListener(
			'click',
			handleCarNamesSubmit,
		);
		$(SELECTOR.COUNT_SUBMIT).addEventListener('click', handleCountSubmit);
		$(SELECTOR.RESTART_BUTTON).addEventListener(
			'click',
			handleRestartButton,
		);
	}

	initializeCars() {
		this.cars = [];
	}

	addCars(carNames) {
		carNames.forEach((carName) => {
			this.cars.push(new Car(carName));
		});
	}
}

export const app = new App();
