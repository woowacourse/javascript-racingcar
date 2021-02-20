import { GAME_SETTINGS, MESSAGES } from "./constants.js";
import Utils from "./Utils.js";

class Model {
	constructor() {
		this.cars = [];
		this.count = 0;
	}

	initializeCars(inputValue) {
		this.cars = inputValue.split(",").map((name) => ({ name, score: 0 }));
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
		const previousScores = this.cars.map((car) => car.score);
		this.iterateByCarsToMove();
		const boolsAboutMovement = this.cars.map(
			(car, i) => car.score !== previousScores[i]
		);
		return boolsAboutMovement;
	}

	iterateByCarsToMove() {
		const moveOrNot = (car) => {
			const randomNumber = this.getRandomNumber(
				GAME_SETTINGS.RANDOM_NUMBER.MIN,
				GAME_SETTINGS.RANDOM_NUMBER.MAX
			);
			this.isInMovableRange(
				randomNumber,
				GAME_SETTINGS.RANDOM_NUMBER.MIN_MOVABLE,
				GAME_SETTINGS.RANDOM_NUMBER.MAX
			) && this.move(car);
		};
		this.cars.forEach(moveOrNot);
	}

	getRandomNumber(startNumber, endNumber) {
		return Math.floor(
			startNumber + Math.random() * (endNumber - startNumber + 1)
		);
	}

	isInMovableRange(number, min, max) {
		return number >= min && number <= max;
	}

	move(car) {
		car.score++;
	}

	getResultText() {
		const winners = Utils.getWinners(this.cars);

		return `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
	}

	clearStates() {
		this.cars = [];
		this.count = 0;
	}

	isNameBiggerThan(maxNameLength, names) {
		return names.some((name) => name.length > maxNameLength);
	}

	validateName(names) {
		if (this.cars.length !== 0) {
			return { validity: false, message: MESSAGES.NAME_ALREADY_REGISTERED };
		}

		if (names.includes("")) {
			return { validity: false, message: MESSAGES.EMPTY_NAME };
		}

		if (names.length > GAME_SETTINGS.MAX_TOTAL_NUMBER_OF_NAMES) {
			return { validity: false, message: MESSAGES.TOO_MANY_NAMES };
		}

		if (this.isNameBiggerThan(GAME_SETTINGS.MAX_NAME_LENGTH, names)) {
			return { validity: false, message: MESSAGES.TOO_LONG_NAME };
		}

		if ([...new Set(names)].length !== names.length) {
			return { validity: false, message: MESSAGES.OVERWRITTEN };
		}

		return { validity: true, message: null };
	}

	validateCount(submittedCount) {
		if (this.count !== 0) {
			return { validity: false, message: MESSAGES.COUNT_ALREADY_REGISTERED };
		}

		if (isNaN(submittedCount)) {
			return { validity: false, message: MESSAGES.NAN };
		}

		if (Utils.isNotNaturalNumber(submittedCount)) {
			return { validity: false, message: MESSAGES.NOT_NATURAL_NUMBER };
		}

		if (submittedCount > GAME_SETTINGS.MAX_COUNT) {
			return { validity: false, message: MESSAGES.TOO_BIG_COUNT };
		}

		return { validity: true, message: null };
	}
}

export default Model;
