import { GAME_SETTING, MESSAGES } from "./constants.js";
import Utils from "./Utils.js";
import View from "./View.js";

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
				GAME_SETTING.RANDOM_NUMBER.MIN,
				GAME_SETTING.RANDOM_NUMBER.MAX
			);
			this.isInMovableRange(
				randomNumber,
				GAME_SETTING.RANDOM_NUMBER.MIN_MOVABLE,
				GAME_SETTING.RANDOM_NUMBER.MAX
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
		const winners = this.getWinners();
		return `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
	}

	getWinners() {
		const maxScore = this.getMaxScore();
		const carObjectsWithMaxScore = this.getCarObjectsWithMaxScore(maxScore);
		return carObjectsWithMaxScore.map((car) => car.name);
	}

	getMaxScore() {
		return Math.max(...this.cars.map((car) => car.score));
	}

	getCarObjectsWithMaxScore(maxScore) {
		return this.cars.filter((car) => car.score === maxScore);
	}

	clearStates() {
		this.cars = [];
		this.count = 0;
	}

	validateName(names) {
		if (this.cars.length !== 0) {
			return { validity: false, message: MESSAGES.NAME_ALREADY_REGISTERED };
		} else if (names.includes("")) {
			return { validity: false, message: MESSAGES.EMPTY_NAME };
		} else if (names.length > GAME_SETTING.MAX_TOTAL_NUMBER_OF_NAMES) {
			return { validity: false, message: MESSAGES.TOO_MANY_NAMES };
		} else if (this.isNameBiggerThan(GAME_SETTING.MAX_NAME_LENGTH, names)) {
			return { validity: false, message: MESSAGES.TOO_LONG_NAME };
		} else if ([...new Set(names)].length !== names.length) {
			return { validity: false, message: MESSAGES.OVERWRITED };
		} else return { validity: true, message: null };
	}

	isNameBiggerThan(maxNameLength, names) {
		return names.some((name) => name.length > maxNameLength);
	}

	validateCount(submittedCount) {
		if (this.count !== 0) {
			return { validity: false, message: MESSAGES.COUNT_ALREADY_REGISTERED };
		} else if (!Utils.isNaturalNumber(submittedCount)) {
			return { validity: false, message: MESSAGES.NOT_NATURAL_NUMBER };
		} else if (submittedCount > GAME_SETTING.MAX_COUNT) {
			return { validity: false, message: MESSAGES.TOO_BIG_COUNT };
		} else return { validity: true, message: null };
	}
}

export default new Model();
