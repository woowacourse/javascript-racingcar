import Model from "./model.js"
import View from "./view.js"
import { clearInputValue, getRandomNumber, getWinners } from "./utils.js"
import { GAME_SETTINGS, ID, MESSAGES } from "./constants.js"
import CountValidator from "./count-validator.js"
import NameValidator from "./name-validator.js"

class Controller {
	constructor() {
		this.view = new View()
		this.model = new Model()
	}

	isAlreadyCountClicked($settingContainer) {
		return $settingContainer.childElementCount !== 2
	}

	getNameErrorMessage(names, previousCars) {
		if (NameValidator.isAlreadyRegistered(previousCars)) {
			return { validity: false, message: MESSAGES.NAME_ALREADY_REGISTERED }
		}

		if (NameValidator.isEmptyName(names)) {
			return { validity: false, message: MESSAGES.EMPTY_NAME }
		}

		if (NameValidator.isNamesTooMany(names)) {
			return { validity: false, message: MESSAGES.TOO_MANY_NAMES }
		}

		if (NameValidator.isNameTooLong(names)) {
			return { validity: false, message: MESSAGES.TOO_LONG_NAME }
		}

		if (NameValidator.isNameOverwritten(names)) {
			return { validity: false, message: MESSAGES.OVERWRITTEN }
		}

		return { validity: true, message: null }
	}

	getCountErrorMessage(count, previousCount) {
		if (CountValidator.isAlreadyRegistered(previousCount)) {
			return { validity: false, message: MESSAGES.COUNT_ALREADY_REGISTERED }
		}

		if (isNaN(count)) {
			return { validity: false, message: MESSAGES.NAN }
		}

		if (CountValidator.isNotNaturalNumber(count)) {
			return { validity: false, message: MESSAGES.NOT_NATURAL_NUMBER }
		}

		if (CountValidator.isTooBigCount(count)) {
			return { validity: false, message: MESSAGES.TOO_BIG_COUNT }
		}

		return { validity: true, message: null }
	}

	moveOrNot(car, index) {
		const randomNumber = getRandomNumber(
			GAME_SETTINGS.RANDOM_NUMBER.MIN,
			GAME_SETTINGS.RANDOM_NUMBER.MAX
		)
		randomNumber >= GAME_SETTINGS.RANDOM_NUMBER.MIN_MOVABLE &&
			this.model.move(index)
	}

	getBoolsAboutMovement() {
		const previousScores = this.model.cars.map((car) => car.score)
		this.model.cars.forEach((car, index) => this.moveOrNot(car, index))
		const boolsAboutMovement = this.model.cars.map(
			(car, i) => car.score !== previousScores[i]
		)

		return boolsAboutMovement
	}

	onCountButtonClick() {
		const $countInput = document.getElementById(ID.COUNT_INPUT)
		const receivedCount = Number($countInput.value)
		clearInputValue($countInput)
		const previousCount = this.model.count
		const { validity, message } = this.getCountErrorMessage(
			receivedCount,
			previousCount
		)
		if (validity === false) {
			return alert(message)
		}
		this.model.count = receivedCount
		this.view.progressContainerRender()
		this.view.progressCarsRender(this.model.cars)

		for (let i = 0; i < this.model.count; i++) {
			const boolsAboutMovement = this.getBoolsAboutMovement()
			this.view.arrowRender(boolsAboutMovement)
		}
		const resultText = this.getResultText(this.model.cars)
		this.view.winnerRender(resultText)
		this.addResetButtonEvent()
	}

	getResultText(cars) {
		const winners = getWinners(cars)

		return `🏆 최종 우승자: ${winners.join(", ")} 🏆`
	}

	onNameButtonClick() {
		const $nameInput = document.getElementById(ID.NAME_INPUT)
		const $settingContainer = document.getElementById(ID.SETTING_CONTAINER)
		const nameInputValue = $nameInput.value
		clearInputValue($nameInput)
		const { validity, message } = this.getNameErrorMessage(
			nameInputValue.split(","),
			this.model.cars
		)
		if (validity === false) return alert(message)
		this.model.initializeCars(nameInputValue)
		this.view.countSectionRender($settingContainer)
		this.addCountButtonClickEvent()
	}

	addCountButtonClickEvent() {
		const $countButton = document.getElementById(ID.COUNT_SUBMIT_BUTTON)
		$countButton.addEventListener("click", () => this.onCountButtonClick())
	}

	initializeEvents() {
		const $nameButton = document.getElementById(ID.NAME_SUBMIT_BUTTON)
		const $nameInput = document.getElementById(ID.NAME_INPUT)
		$nameButton.addEventListener("click", () => this.onNameButtonClick())
		$nameInput.addEventListener("input", this.filterCarNameType)
	}

	filterCarNameType(event) {
		const RegExp = /[^a-z가-힣A-Z,]/gi
		if (RegExp.test(event.target.value))
			event.target.value = event.target.value.replace(RegExp, "")
	}

	addResetButtonEvent() {
		const $resetButton = document.getElementById(ID.RESET_BUTTON)
		$resetButton.addEventListener("click", () => this.onResetButtonClick())
	}

	onResetButtonClick() {
		this.model.clearStates()
		this.initializeGame()
	}

	initializeGame() {
		const $app = document.getElementById(ID.APP)
		this.view.initialzeRender($app)
		this.initializeEvents()
	}
}

export default Controller
