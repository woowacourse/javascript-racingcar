import Model from "../models/model.js"
import View from "../views/view.js"
import { $, clearInputValue, delay } from "../utils.js"
import { SELECTOR } from "../constants.js"
import { checkCountError, checkNameError } from "../validators/index.js"

class Controller {
	constructor() {
		this.view = new View()
		this.model = new Model()
	}

	initializeGame() {
		const $app = $(SELECTOR.APP)
		this.view.initialRender($app)
		this.addNameInputHandler()
		this.addNameButtonHandler()
	}

	isAlreadyCountClicked($settingContainer) {
		return $settingContainer.childElementCount !== 2
	}

	filterCarName(target) {
		const RegExp = /[^a-z가-힣A-Z,]/gi
		if (RegExp.test(target.value)) {
			target.value = target.value.replace(RegExp, "")
		}
	}

	getCount() {
		const $countInput = $(SELECTOR.COUNT_INPUT)
		return Number($countInput.value)
	}

	clearCountInput() {
		clearInputValue($(SELECTOR.COUNT_INPUT))
	}

	async progressRacing() {
		const { count } = this.model
		this.view.addSpinner()
		for (let i = 0; i < count; i++) {
			await delay(1000)
			const { movedCars } = this.model.moveCars()
			this.view.renderArrow(movedCars)
		}
		this.view.removeSpinner()
		const { winners } = this.model
		this.view.renderWinner(winners)
		this.addResetButtonHandler()
	}

	onNameButtonClick() {
		const $nameInput = $(SELECTOR.NAME_INPUT)
		const $settingContainer = $(SELECTOR.SETTING_CONTAINER)
		const nameInputValue = $nameInput.value
		clearInputValue($nameInput)
		const { error, message } = checkNameError(
			nameInputValue.split(","),
			this.model.cars
		)
		if (error === false) return alert(message)
		this.model.initializeCars(nameInputValue)
		this.view.renderCountSection($settingContainer)
		this.addCountButtonHandler()
	}

	onCountButtonClick() {
		const receivedCount = this.getCount()
		this.clearCountInput()
		const previousCount = this.model.count
		const { error, message } = checkCountError(receivedCount, previousCount)
		if (error === false) {
			return alert(message)
		}
		const { cars } = this.model
		this.model.count = receivedCount
		this.view.renderProgressContainer(cars)
		this.progressRacing()
	}

	onResetButtonClick() {
		this.model.clearStates()
		this.initializeGame()
	}

	addResetButtonHandler() {
		const $resetButton = $(SELECTOR.RESET_BUTTON)
		$resetButton.addEventListener("click", () => {
			this.onResetButtonClick()
		})
	}

	addNameButtonHandler() {
		const $nameButton = $(SELECTOR.NAME_SUBMIT_BUTTON)
		$nameButton.addEventListener("click", () => {
			this.onNameButtonClick()
		})
	}

	addNameInputHandler() {
		const $nameInput = $(SELECTOR.NAME_INPUT)
		$nameInput.addEventListener("input", ({ target }) => {
			this.filterCarName(target)
		})
	}

	addCountButtonHandler() {
		const $countButton = $(SELECTOR.COUNT_SUBMIT_BUTTON)
		$countButton.addEventListener("click", () => {
			this.onCountButtonClick()
		})
	}
}

export default Controller
