import Model from "./Model.js";
import ElementManager from "./ElementManager.js";
import View from "./View.js";
import Utils from "./Utils.js";

// 구현하지 못한 기능: 이름 입력창에 이모지 입력을 제한하는 기능
class Controller {
	onCountSubmit() {
		const countInput = ElementManager.getCountInput();
		countInput.value = "";
		const $app = ElementManager.getAppDIV();
		if ($app.childElementCount === 1) {
			const raceProgressContainerTemplate = Utils.createRaceProgressContainerTemplate(Model.cars);
			View.progressContainerRender(raceProgressContainerTemplate);
		}
	}

	onNameSubmit() {
		// $settingContainer.childElementCount === 2가 아니면
		// 모든 기능이 작동하지 않고, alert 띄우도록
		const nameInput = ElementManager.getNameInput();
		const $settingContainer = ElementManager.getSettingContainer();

		Model.setCarNames(nameInput.value);
		View.clearInputValue(nameInput);

		$settingContainer.childElementCount === 2 && View.countSectionRender($settingContainer);

		this.addCountButtonEvent(this.onCountSubmit);
	}

	addCountButtonEvent(callback) {
		const countButton = ElementManager.getCountButton();
		countButton.addEventListener("click", callback);
	}

	initializeEvents() {
		const nameButton = ElementManager.getNameButton();
		const nameInput = ElementManager.getNameInput();
		nameButton.addEventListener("click", this.onNameSubmit.bind(this));
		nameInput.addEventListener("input", (event) => {
			const RegExp = /[ 0-9\{\}\[\]\/?.;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
			if (RegExp.test(event.target.value) === true) {
				event.target.value = event.target.value.substring(0, event.target.value.length - 1);
			}
		});
	}
}

export default new Controller();
