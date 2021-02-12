class ElementManager {
	getAppDIV() {
		return document.getElementById("app");
	}

	getSettingContainer() {
		return document.getElementById("setting-container");
	}
	getNameInput() {
		return document.getElementById("name-input");
	}

	getNameButton() {
		return document.getElementById("name-submit-button");
	}

	getCountInput() {
		return document.getElementById("count-input");
	}

	getCountButton() {
		return document.getElementById("count-submit-button");
	}

	getResultContainer() {
		return document.getElementById("result-container");
	}

	getResetButton() {
		return document.getElementById("reset-button");
	}
}

export default new ElementManager();
