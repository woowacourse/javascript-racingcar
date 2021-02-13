import Model from "./Model.js";
import View from "./View.js";
import Utils from "./Utils.js";

// 구현하지 못한 기능: 이름 입력창에 이모지 입력을 제한하는 기능
class Controller {
	countClickHandler() {
		const countInput = document.getElementById("count-input");
		const submittedCount = Number(countInput.value);
		Utils.clearInputValue(countInput);
		const { validity, alertMessage } = Model.validateCount(submittedCount);
		if (validity === false) return alert(alertMessage);
		Model.setCount(submittedCount);
		View.progressContainerRender();
		View.progressCarsRender();
		Model.runArrowRenderByCount();
		View.winnerRender();
		this.addResetButtonEvent();
	}

	nameClickHandler() {
		const nameInput = document.getElementById("name-input");
		const $settingContainer = document.getElementById("setting-container");
		const nameInputValue = nameInput.value;
		Utils.clearInputValue(nameInput);
		const { validity, alertMessage } = Model.validateName(nameInputValue);
		if (validity === false) return alert(alertMessage);
		Model.initializeCars(nameInputValue);
		View.countSectionRender($settingContainer);
		this.addCountButtonEvent(this.countClickHandler.bind(this));
	}

	addCountButtonEvent(callback) {
		const countButton = document.getElementById("count-submit-button");
		countButton.addEventListener("click", callback);
	}

	initializeEvents() {
		const nameButton = document.getElementById("name-submit-button");
		const nameInput = document.getElementById("name-input");
		nameButton.addEventListener("click", this.nameClickHandler.bind(this));
		nameInput.addEventListener("input", this.filterCarNameType);
	}

	filterCarNameType(event) {
		const RegExp = /[ 0-9\{\}\[\]\/?.;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
		if (RegExp.test(event.target.value) === true)
			event.target.value = event.target.value.replace(RegExp, "");
	}

	addResetButtonEvent() {
		const resetButton = document.getElementById("reset-button");
		resetButton.addEventListener("click", this.onResetButtonClick.bind(this));
	}

	onResetButtonClick() {
		Model.clearStates();
		this.initializeGame();
	}

	initializeGame() {
		const $app = document.getElementById("app");
		View.initialzeRender($app);
		this.initializeEvents();
	}
}

export default new Controller();
