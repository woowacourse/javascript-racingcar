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

	createElement(tagType, attributes, text) {
		const result = document.createElement(tagType);
		if (text) {
			const innerText = document.createTextNode(text);
			this.appendChildren(result, innerText);
		}
		if (attributes) {
			this.setAttributes(result, attributes);
		}
		return result;
	}

	appendRecursiveChild(parent, ...children) {
		for (let i = 0; i < children.length; i++) {
			if (Array.isArray(children[i])) {
				children[i] = this.appendRecursiveChild(...children[i]);
			}
		}
		this.appendChildren(parent, ...children);
		return parent;
	}

	getArrowElement() {
		return this.createElement("div", { class: "forward-icon mt-2" }, "⬇️");
	}

	getCarNameDiv(name) {
		return this.createElement("div", { class: "car-player mr-2" }, name);
	}

	clearInputValue(inputElement) {
		inputElement.value = "";
	}

	isNaturalNumber(number) {
		return number !== NaN && number > 0 && Number.isInteger(number);
	}
}

export default new Utils();
