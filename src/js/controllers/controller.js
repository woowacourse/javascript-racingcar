import Model from "../models/model.js"
import View from "../views/view.js"
import { $ } from "../utils.js"
import { SELECTOR } from "../constants.js"
import { checkCountError, checkNameError } from "../validators/index.js"
import {
	clearCountInput,
	filterCarName,
	getCount,
	progressRacing,
} from "../methods.js"

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

	displayCountSection() {
		const $nameInput = $(SELECTOR.NAME_INPUT)
		const $settingContainer = $(SELECTOR.SETTING_CONTAINER)
		const nameInputValue = $nameInput.value
		$nameInput.value = ""
		const { error, message } = checkNameError(
			nameInputValue.split(","),
			this.model.cars
		)
		if (error === false) {
			return alert(message)
		}
		this.model.initializeCars(nameInputValue)
		this.view.renderCountSection($settingContainer)
	}

	onCountButtonClick() {
		const receivedCount = getCount()
		clearCountInput()
		const previousCount = this.model.count
		const { error, message } = checkCountError(receivedCount, previousCount)
		if (error === false) {
			return alert(message)
		}
		const { cars } = this.model
		this.model.count = receivedCount
		this.view.renderProgressContainer(cars)
		progressRacing({
			model: this.model,
			view: this.view,
			addResetButtonHandler: this.addResetButtonHandler,
			_this: this,
		})
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
			this.displayCountSection()
			this.addCountButtonHandler()
		})
	}

	addNameInputHandler() {
		const $nameInput = $(SELECTOR.NAME_INPUT)
		$nameInput.addEventListener("input", ({ target }) => {
			filterCarName(target)
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
