import Model from "./model.js"
import View from "./view.js"
import { clearInputValue } from "./utils.js"
import { ID, MESSAGE } from "./constants.js"
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
			return { validity: false, message: MESSAGE.NAME_ALREADY_REGISTERED }
		}

		if (NameValidator.isEmptyName(names)) {
			return { validity: false, message: MESSAGE.EMPTY_NAME }
		}

		if (NameValidator.isNamesTooMany(names)) {
			return { validity: false, message: MESSAGE.TOO_MANY_NAMES }
		}

		if (NameValidator.isNameTooLong(names)) {
			return { validity: false, message: MESSAGE.TOO_LONG_NAME }
		}

		if (NameValidator.isNameOverwritten(names)) {
			return { validity: false, message: MESSAGE.OVERWRITTEN }
		}

		return { validity: true, message: null }
	}

	getCountErrorMessage(count, previousCount) {
		if (CountValidator.isAlreadyRegistered(previousCount)) {
			return { validity: false, message: MESSAGE.COUNT_ALREADY_REGISTERED }
		}

		if (isNaN(count)) {
			return { validity: false, message: MESSAGE.NAN }
		}

		if (CountValidator.isNotNaturalNumber(count)) {
			return { validity: false, message: MESSAGE.NOT_NATURAL_NUMBER }
		}

		if (CountValidator.isTooBigCount(count)) {
			return { validity: false, message: MESSAGE.TOO_BIG_COUNT }
		}

		return { validity: true, message: null }
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
		this.view.renderProgressContainer()
		this.view.renderProgressCars(this.model.cars)

		for (let i = 0; i < this.model.count; i++) {
			const { movedCars } = this.model.moveCars()
			this.view.renderArrow(movedCars)
		}
		const winners = this.model.winners
		this.view.renderWinner(winners)
		this.addResetButtonEvent()
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
		this.view.renderCountSection($settingContainer)
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
		this.view.initialRender($app)
		this.initializeEvents()
	}
}

export default Controller
