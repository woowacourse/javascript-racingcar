import View from "../View/View.js";
import {
	COUNT_CLICKED_ELEMENT_LENGTH,
	ALREADY_NAME_SUBMITTED_ALERT,
	INCLUDE_BLANK_NAME_ALERT,
	OVER_SCROLL_PREVENT_ALERT,
	HAVE_NAME_OVER_MAX_LENGTH_ALERT,
	DUPLIACTED_NAME_ALERT,
	ALREADY_COUNT_SUBMITTED_ALERT,
	INVALID_INTEGER_ALERT,
	OVER_MAX_COUNT_ALERT,
} from "./constants.js";

import {
	isFirstSubmittedName,
	isIncludeBlank,
	isOverScrollPreventLength,
	isHaveNameOverMaxLength,
	isDuplicatedName,
	isFirstSubmittedCount,
	isValidInteger,
	isUnderMaxCount,
} from "./validator.js";
class Model {
	constructor() {
		this.cars = [];
		this.count = 0;
		this.turn = 0;
	}

	initCars(carNames) {
		this.cars = this.generateCars(carNames);
	}

	generateCars(nameInputValue) {

		return nameInputValue.split(",").map((carName) => ({ name: carName, score: 0, randomNumbers: [] }));
	}

	isAlreadyCountClicked($settingContainer) {
		return $settingContainer.childElementCount !== COUNT_CLICKED_ELEMENT_LENGTH;
	}

	setCount(value) {
		this.count = value;
	}

	runArrowRenderByCount() {
		for (let i = 0; i < this.count; i++) {
			const boolsAboutMovement = this.getBoolsAboutMovement();
			// 	View.renderArrow(boolsAboutMovement);
		}
		// this.getBoolsAboutMovement();
		View.setRace(this.cars);
	}

	getBoolsAboutMovement() {
		const previousScores = [...this.cars].map((car) => car.score);
		this.iterateByCarsToMove();
		const boolsAboutMovement = this.cars.map((car, i) => car.score !== previousScores[i]);

		return boolsAboutMovement;
	}

	iterateByCarsToMove() {
		const moveOrNot = (car) => {
			const randomNumber = this.getRandomNumber({ startNumber: 0, endNumber: 9 });
			car.randomNumbers.push(randomNumber);
			this.isInMovableRange(randomNumber, 4, 9) && this.move(car);
		};
		this.cars.forEach(moveOrNot);
	}

	getRandomNumber({ startNumber, endNumber }) {
		return startNumber + Math.floor(Math.random() * (endNumber - startNumber + 1));
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
		const scores = this.cars.map((car) => car.score);
		return Math.max(...scores);
	}

	getCarObjectsWithMaxScore(maxScore) {
		return this.cars.filter((car) => car.score === maxScore);
	}

	clearStates() {
		this.cars = [];
		this.count = 0;
	}

	validateName(inputValue) {
		const carNameArray = inputValue.split(",");

		if (!isFirstSubmittedName(this.cars.length)) {
			return { isValid: false, alertMessage: ALREADY_NAME_SUBMITTED_ALERT };
		}
		if (isIncludeBlank(carNameArray)) {
			return { isValid: false, alertMessage: INCLUDE_BLANK_NAME_ALERT };
		}
		if (isOverScrollPreventLength(carNameArray.length)) {
			return { isValid: false, alertMessage: OVER_SCROLL_PREVENT_ALERT };
		}
		if (isHaveNameOverMaxLength(carNameArray)) {
			return { isValid: false, alertMessage: HAVE_NAME_OVER_MAX_LENGTH_ALERT };
		}
		if (isDuplicatedName(carNameArray)) {
			return { isValid: false, alertMessage: DUPLIACTED_NAME_ALERT };
		}

		return { isValid: true, alertMessage: null };
	}

	validateCount(submittedCount) {
		if (!isFirstSubmittedCount(this.count)) {
			return { isValid: false, alertMessage: ALREADY_COUNT_SUBMITTED_ALERT };
		}
		if (!isValidInteger(submittedCount)) {
			return { isValid: false, alertMessage: INVALID_INTEGER_ALERT };
		}
		if (!isUnderMaxCount(submittedCount)) {
			return { isValid: false, alertMessage: OVER_MAX_COUNT_ALERT };
		}

		return { isValid: true, alertMessage: null };
	}
}

export default new Model();
