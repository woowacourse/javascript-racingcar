import Model from "../Model/Model.js";
import ElementManager from "../Manager/ElementManager.js";
import View from "../View/View.js";
import Utils from "../Manager/DomManager.js";

class Controller {
	onCountSubmit() {
		const countInput = ElementManager.getCountInput();
		const { isValid, alertMessage } = Model.validateCount(Number(countInput.value));
		const raceProgressContainerTemplate = Utils.createRaceProgressContainerTemplate(Model.cars);

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
		const nameInput = ElementManager.getNameInput();
		const $settingContainer = ElementManager.getSettingContainer();
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
		const countButton = ElementManager.getCountButton();
		countButton.addEventListener("click", callback);
	}

	initializeEvents() {
		const nameButton = ElementManager.getNameButton();
		const nameInput = ElementManager.getNameInput();

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
		const resetButton = ElementManager.getResetButton();

		resetButton.addEventListener("click", this.onResetButtonClick.bind(this));
	}

	onResetButtonClick() {
		const $app = ElementManager.getAppDIV();

		Model.clearStates();
		View.renderInitialElements($app);
		this.initializeEvents();
	}
}

export default new Controller();
