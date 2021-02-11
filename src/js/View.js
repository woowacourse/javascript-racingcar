import ElementManager from "./ElementManager.js";
import {
	openingSettingContainerTemplate,
	titleSectionTemplate,
	carNameSectionTemplate,
	closingSettingContainerTemplate,
	countTemplate,
	raceProgressContainerTemplate,
	resultContainerTemplate,
} from "./HTMLText.js";
class View {
	initialRender($parentElement) {
		$parentElement.innerHTML =
			openingSettingContainerTemplate +
			titleSectionTemplate +
			carNameSectionTemplate +
			closingSettingContainerTemplate;
	}

	clearInputValue(inputElement) {
		inputElement.value = "";
	}

	countSectionRender() {
		const $settingContainer = ElementManager.getSettingContainer();
		const $countSection = ElementManager.createElement("section", { class: "mt-5" });
		$countSection.innerHTML = countTemplate;

		if ($settingContainer.childElementCount === 2) {
			$settingContainer.appendChild($countSection);
		}
	}

	progressContainerRender() {
		const $app = ElementManager.getAppDIV();
		$app.insertAdjacentHTML("beforeend", raceProgressContainerTemplate);
		$app.insertAdjacentHTML("beforeend", resultContainerTemplate);
	}
}

export default new View();
