import Model from "../Model/Model.js";
import View from "../View/View.js";
import { createRaceProgressContainerTemplate, $ } from "../Manager/domManager.js";

class Controller {
	onCountSubmit() {
		const countInput = $("count-input");
		const { isValid, alertMessage } = Model.validateCount(Number(countInput.value));
		const raceProgressContainerTemplate = createRaceProgressContainerTemplate(Model.cars);

		if (isValid === false) {
			alert(alertMessage);
			View.clearInputValue(countInput);

			return;
		}

		Model.setCount(Number(countInput.value));
		View.renderProgressContainer(raceProgressContainerTemplate);
		Model.runArrowRenderByCount();
		View.renderWinner();
		this.addResetButtonEvent();
		View.clearInputValue(countInput);
	}

	onNameSubmit() {
		const nameInput = $("name-input");
		const $settingContainer = $("setting-container");
		const { isValid, alertMessage } = Model.validateName(nameInput.value);

		if (isValid === false) {
			alert(alertMessage);
			View.clearInputValue(nameInput);

			return;
		}

		Model.initCars(nameInput.value);
		View.renderCountSection($settingContainer);
		this.addCountButtonEvent(this.onCountSubmit.bind(this));
		View.clearInputValue(nameInput);
	}

	addCountButtonEvent(callback) {
		const countButton = $("count-submit-button");
		countButton.addEventListener("click", callback);
	}

	initializeEvents() {
		const nameButton = $("name-submit-button");
		const nameInput = $("name-input");

		nameButton.addEventListener("click", this.onNameSubmit.bind(this));
		nameInput.addEventListener("input", this.filterCarNameType);
	}

	filterCarNameType(event) {
		const RegExp = /[^가-힣a-zA-Z,]/gi;

		if (RegExp.test(event.target.value) === true) {
			event.target.value = event.target.value.replace(RegExp, "");
		}
	}

	addResetButtonEvent() {
		const resetButton = $("reset-button");

		resetButton.addEventListener("click", this.onResetButtonClick.bind(this));
	}

	onResetButtonClick() {
		const $app = $("app");

		Model.clearStates();
		View.renderInitialElements($app);
		this.initializeEvents();
	}
}

export default new Controller();
