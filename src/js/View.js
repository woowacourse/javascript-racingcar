import ElementManager from "./ElementManager.js";
import Model from "./Model.js";
import Templates from "./Templates.js";

class View {
	initialRender($parentElement) {
		$parentElement.innerHTML =
			Templates.openingSettingContainerTemplate +
			Templates.titleSectionTemplate +
			Templates.carNameSectionTemplate +
			Templates.closingSettingContainerTemplate;
	}

	clearInputValue(inputElement) {
		inputElement.value = "";
	}

	countSectionRender($settingContainer) {
		$settingContainer.insertAdjacentHTML("beforeend", Templates.countSectionTemplate);
	}

	progressContainerRender(template) {
		const $app = ElementManager.getAppDIV();
		$app.insertAdjacentHTML("beforeend", template);
		$app.insertAdjacentHTML("beforeend", Templates.resultContainerTemplate);
	}

	arrowRender(boolsAboutMovement) {
		const renderedCars = document.getElementById("race-progress-screen").children;
		const arrowTemplate = Templates.arrowTemplate;
		boolsAboutMovement.forEach(
			(isNeedToBeAdded, i) =>
				isNeedToBeAdded && renderedCars[i].insertAdjacentHTML("beforeend", arrowTemplate)
		);
	}

	winnerRender() {
		const $resultH2 = ElementManager.getResultContainer().querySelector("h2");
		$resultH2.innerText = Model.getResultText();
	}
}

export default new View();
