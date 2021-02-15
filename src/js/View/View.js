import Model from "../Model/Model.js";
import {
	openingSettingContainerTemplate,
	titleSectionTemplate,
	carNameSectionTemplate,
	countSectionTemplate,
	closingSettingContainerTemplate,
	resultContainerTemplate,
	arrowTemplate,
} from "./templates.js";
import { $ } from "../Manager/domManager.js";

class View {
	renderInitialElements($parentElement) {
		$parentElement.innerHTML = openingSettingContainerTemplate + titleSectionTemplate + carNameSectionTemplate + closingSettingContainerTemplate;
	}

	clearInputValue(inputElement) {
		inputElement.value = "";
	}

	renderCountSection($settingContainer) {
		$settingContainer.insertAdjacentHTML("beforeend", countSectionTemplate);
	}

	renderProgressContainer(template) {
		const $app = $("app");
		$app.insertAdjacentHTML("beforeend", template);
		$app.insertAdjacentHTML("beforeend", resultContainerTemplate);
	}

	renderArrow(boolsAboutMovement) {
		const renderedCars = $("race-progress-screen").children;
		boolsAboutMovement.forEach((isNeedToBeAdded, i) => isNeedToBeAdded && renderedCars[i].insertAdjacentHTML("beforeend", arrowTemplate));
	}

	renderWinner() {
		const $resultH2 = $("result-container").querySelector("h2");
		$resultH2.innerText = Model.getResultText();
	}
}

export default new View();
