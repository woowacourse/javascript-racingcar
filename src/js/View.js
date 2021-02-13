import Model from "./Model.js";
import { TEMPLATES } from "./constants.js";

class View {
	initialRender($parentElement) {
		$parentElement.innerHTML =
			TEMPLATES.OPENING_SETTING_CONTAINER + TEMPLATES.TITLE_SECTION + TEMPLATES.CAR_NAME_SECTION + TEMPLATES.CLOSING_SETTING_CONTAINER;
	}

	clearInputValue(inputElement) {
		inputElement.value = "";
	}

	countSectionRender($settingContainer) {
		$settingContainer.insertAdjacentHTML("beforeend", TEMPLATES.COUNT_SECTION);
	}

	progressContainerRender(template) {
		const $app = document.getElementById("app");
		$app.insertAdjacentHTML("beforeend", template);
		$app.insertAdjacentHTML("beforeend", TEMPLATES.RESULT_CONTAINER);
	}

	arrowRender(boolsAboutMovement) {
		const renderedCars = document.getElementById("race-progress-screen").children;
		const arrowTemplate = TEMPLATES.ARROW;
		boolsAboutMovement.forEach((isNeedToBeAdded, i) => isNeedToBeAdded && renderedCars[i].insertAdjacentHTML("beforeend", arrowTemplate));
	}

	winnerRender() {
		const $resultH2 = document.getElementById("result-container").querySelector("h2");
		$resultH2.innerText = Model.getResultText();
	}
}

export default new View();
