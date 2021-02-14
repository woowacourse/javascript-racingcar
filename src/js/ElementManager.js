import Utils from "./Utils.js";
class ElementManager {
	getAppDIV() {
		return Utils.get("app");
	}

	getSettingContainer() {
		return Utils.get("setting-container");
	}

	getNameInput() {
		return Utils.get("name-input");
	}

	getNameButton() {
		return Utils.get("name-submit-button");
	}

	getCountInput() {
		return Utils.get("count-input");
	}

	getCountButton() {
		return Utils.get("count-submit-button");
	}

	getResultContainer() {
		return Utils.get("result-container");
	}

	getResetButton() {
		return Utils.get("reset-button");
	}

	getRaceProgressScreen() {
		return Utils.get("race-progress-screen");
	}
}

export default new ElementManager();
