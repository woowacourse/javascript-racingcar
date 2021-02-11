class Utils {
	setAttributes(element, attributes) {
		for (let i in attributes) {
			element.setAttribute(i, attributes[i]);
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

export default new Utils();
