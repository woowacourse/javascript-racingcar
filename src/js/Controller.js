import Model from "./Model.js";
import ElementManager from "./ElementManager.js";
import View from "./View.js";

class Controller {
	onNameSubmit() {
		const nameInput = ElementManager.getNameInput();
		Model.setCarNames(nameInput.value);
		View.clearInputValue(nameInput);
		View.countSectionRender();
	}

	initializeEvents() {
		const nameButton = ElementManager.getNameButton();
		nameButton.addEventListener("click", this.onNameSubmit);
	}
}

export default new Controller();
