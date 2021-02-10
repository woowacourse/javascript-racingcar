import Model from "./Model.js";

class Controller {
	onNameSubmit() {
		const nameInputValue = document.getElementById("name-input").value;

		Model.makeCarNames(nameInputValue);
	}
}

export default new Controller();
