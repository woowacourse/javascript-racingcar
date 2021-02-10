import ElementManager from "./ElementManager.js";
import {
	openingSettingContainer,
	titleSection,
	carNameSection,
	closingSettingContainer,
	countTemplate,
} from "./HTMLText.js";
class View {
	initialRender($parentElement) {
		$parentElement.innerHTML =
			openingSettingContainer + titleSection + carNameSection + closingSettingContainer;
	}

	clearInputValue(inputElement) {
		inputElement.value = "";
	}

	countSectionRender() {
		const $settingContainer = ElementManager.getSettingContainer();
		const $countSection = ElementManager.createElement("section", { class: "mt-5" });
		$countSection.innerHTML = countTemplate;
		$settingContainer.appendChild($countSection);
	}
}

export default new View();
