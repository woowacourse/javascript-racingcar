import Model from "./Model.js";
import ElementManager from "./ElementManager.js";
import View from "./View.js";
import Utils from "./Utils.js";

// 구현하지 못한 기능: 이름 입력창에 이모지 입력을 제한하는 기능
class Controller {
	onCountSubmit() {
		const countInput = ElementManager.getCountInput();

		const { validity, alertMessage } = Model.validateCount(Number(countInput.value));
		if (validity === false) {
			alert(alertMessage);
			View.clearInputValue(countInput);
			return;
		}
		Model.setCount(Number(countInput.value));
		const raceProgressContainerTemplate = Utils.createRaceProgressContainerTemplate(Model.cars);
		View.progressContainerRender(raceProgressContainerTemplate);
		Model.runArrowRenderByCount();
		View.winnerRender();
		this.addResetButtonEvent();
		View.clearInputValue(countInput);
	}

	onNameSubmit() {
		// $settingContainer.childElementCount === 2가 아니면
		// 모든 기능이 작동하지 않고, alert 띄우도록
		const nameInput = ElementManager.getNameInput();
		const $settingContainer = ElementManager.getSettingContainer();
		const { validity, alertMessage } = Model.validateName(nameInput.value);
		if (validity === false) {
			alert(alertMessage);
			View.clearInputValue(nameInput);
			return;
		}
		Model.initCars(nameInput.value);
		View.countSectionRender($settingContainer);
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
		const RegExp = /[ 0-9\{\}\[\]\/?.;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
		if (RegExp.test(event.target.value) === true) {
			event.target.value = event.target.value.replace(RegExp, "");
		}
	}

	addResetButtonEvent() {
		const resetButton = ElementManager.getResetButton();
		resetButton.addEventListener("click", this.onResetButtonClick.bind(this));
	}

	onResetButtonClick() {
		Model.clearStates();
		const $app = ElementManager.getAppDIV();
		View.initialRender($app);
		this.initializeEvents();
	}
}

export default new Controller();
