import ElementManager from "./ElementManager.js";
import Templates from "./Templates.js";
import Utils from "./Utils.js";

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

	progressContainerRender() {
		const $app = ElementManager.getAppDIV();
		$app.insertAdjacentHTML("beforeend", Templates.raceProgressContainerTemplate);
		$app.insertAdjacentHTML("beforeend", Templates.resultContainerTemplate);
	}
}

export default new View();
