import Model from "./Model.js";
import View from "./View.js";
import Utils from "./Utils.js";
import { IDS } from "./constants.js";

// 구현하지 못한 기능: 이름 입력창에 이모지 입력을 제한하는 기능
class Controller {
	countClickHandler() {
		const $countInput = document.getElementById(IDS.COUNT_INPUT);
		const submittedCount = Number($countInput.value);
		Utils.clearInputValue($countInput);
		const { validity, message } = Model.validateCount(submittedCount);
		if (validity === false) return alert(message);
		Model.setCount(submittedCount);
		View.progressContainerRender();
		View.progressCarsRender();
		Model.runArrowRenderByCount();
		View.winnerRender();
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
		View.countSectionRender($settingContainer);
		this.addCountButtonEvent(this.countClickHandler.bind(this));
	}

	addCountButtonEvent(callback) {
		const $countButton = document.getElementById(IDS.COUNT_SUBMIT_BUTTON);
		$countButton.addEventListener("click", callback);
	}

	initializeEvents() {
		const $nameButton = document.getElementById(IDS.NAME_SUBMIT_BUTTON);
		const $nameInput = document.getElementById(IDS.NAME_INPUT);
		$nameButton.addEventListener("click", this.nameClickHandler.bind(this));
		$nameInput.addEventListener("input", this.filterCarNameType);
	}

	filterCarNameType(event) {
		const RegExp = /[ 0-9\{\}\[\]\/?.;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
		if (RegExp.test(event.target.value) === true)
			event.target.value = event.target.value.replace(RegExp, "");
	}

	addResetButtonEvent() {
		const $resetButton = document.getElementById(IDS.RESET_BUTTON);
		$resetButton.addEventListener("click", this.onResetButtonClick.bind(this));
	}

	onResetButtonClick() {
		Model.clearStates();
		this.initializeGame();
	}

	initializeGame() {
		const $app = document.getElementById(IDS.APP);
		View.initialzeRender($app);
		this.initializeEvents();
	}
}

export default new Controller();
