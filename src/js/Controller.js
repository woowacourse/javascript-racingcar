import Model from "./Model.js";
import Elements from "./Elements.js";

class Controller {
	onNameSubmit() {
		const nameInputValue = Elements.getNameInput().value;
		Model.setCarNames(nameInputValue);
	}

	initializeEvents() {
		const nameButton = Elements.getNameButton();
		nameButton.addEventListener("click", this.onNameSubmit);
		console.log("abcd");
	}
}

export default new Controller();
