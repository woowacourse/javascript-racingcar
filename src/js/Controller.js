import Model from "./Model.js";
import ElementManager from "./ElementManager.js";
import View from "./View.js";
import Utils from "./Utils.js";

// 구현하지 못한 기능: 이름 입력창에 이모지 입력을 제한하는 기능
class Controller {
	onCountSubmit() {
		const countInput = ElementManager.getCountInput();
		Model.setCount(Number(countInput.value));
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

	// for 문을 돌아서 (횟수만큼)
	// for 문을 돌아서 (자동차만큼)
	// 랜덤숫자가 자동차 수 * 횟수만큼 만들어짐
	// if randomNumber >= 4
	// Model의 cars[i] (자동차) .score += 1
	// 자동차 for문 종료
	// render 화살표
	// 횟수 for문 종료

	// for(let i=0; i<Model.count; i++) {
	// 	for(let j=0; j<Model.cars.length; j++) {
	// 		const num = Model.getRandomNumber({ startNumber: 0, endNumber: 9 })
	// 		if(num >= 4) {
	// 			Model.cars[j].score += 1
	// 		}
	// 	}
	// }
}

export default new Controller();
