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

	setAttributes(tag, attributes) {
		for (let i in attributes) {
			tag.setAttribute(i, attributes[i]);
		}
	}

	appendChildren(parentElement, ...ChildElements) {
		for (let i = 0; i < ChildElements.length; i++) {
			parentElement.appendChild(ChildElements[i]);
		}
	}

	createElement(tagType, attributes, innerText) {
		const result = document.createElement(tagType);
		if (innerText) {
			const innerText = document.createTextNode(innerText);
			this.appendChildren(result, innerText);
		}
		if (attributes) this.setAttributes(result, attributes);
		return result;
	}
}

export default new ElementManager();
