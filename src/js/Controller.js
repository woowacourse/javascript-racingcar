import Model from "./Model.js";
import View from "./View.js";
import Utils from "./Utils.js";
import { IDS } from "./constants.js";

class Controller {
	constructor() {
		this.view = new View();
		this.model = new Model();
	}
	countClickHandler() {
		const $countInput = document.getElementById(IDS.COUNT_INPUT);
		const submittedCount = Number($countInput.value);
		Utils.clearInputValue($countInput);
		const { validity, message } = Model.validateCount(submittedCount);
		if (validity === false) return alert(message);
		Model.setCount(submittedCount);
		this.view.progressContainerRender();
		this.view.progressCarsRender();
		Model.runArrowRenderByCount();
		this.view.winnerRender();
		this.addResetButtonEvent();
	}

	nameClickHandler() {
		const $nameInput = document.getElementById(IDS.NAME_INPUT);
		const $settingContainer = document.getElementById(IDS.SETTING_CONTAINER);
		const nameInputValue = $nameInput.value;
		Utils.clearInputValue($nameInput);
		const { validity, message } = Model.validateName(nameInputValue.split(","));
		if (validity === false) return alert(message);
		Model.initializeCars(nameInputValue);
		this.view.countSectionRender($settingContainer);
		this.addCountButtonClickEvent();
	}

	addCountButtonClickEvent() {
		const $countButton = document.getElementById(IDS.COUNT_SUBMIT_BUTTON);
		$countButton.addEventListener("click", () => {
			this.countClickHandler();
		});
	}

	initializeEvents() {
		const $nameButton = document.getElementById(IDS.NAME_SUBMIT_BUTTON);
		const $nameInput = document.getElementById(IDS.NAME_INPUT);
		$nameButton.addEventListener("click", () => {
			this.nameClickHandler();
		});
		$nameInput.addEventListener("input", this.filterCarNameType);
	}

	filterCarNameType(event) {
		const RegExp = /[^a-z가-힣A-Z,]/gi;
		if (RegExp.test(event.target.value))
			event.target.value = event.target.value.replace(RegExp, "");
	}

	addResetButtonEvent() {
		const $resetButton = document.getElementById(IDS.RESET_BUTTON);
		$resetButton.addEventListener("click", () => {
			this.onResetButtonClick();
		});
	}

	onResetButtonClick() {
		this.model.clearStates();
		this.initializeGame();
	}

	initializeGame() {
		const $app = document.getElementById(IDS.APP);
		this.view.initialzeRender($app);
		this.initializeEvents();
	}
}

export default Controller;
