class Utils {
	static setAttributes(element, attributes) {
		for (let i in attributes) {
			element.setAttribute(i, attributes[i]);
		}
	}

	static appendChildren(parentElement, ...ChildElements) {
		for (let i = 0; i < ChildElements.length; i++) {
			parentElement.appendChild(ChildElements[i]);
		}
	}

	static createElement(tagType, attributes, text) {
		const result = document.createElement(tagType);
		if (text) {
			const innerText = document.createTextNode(text);
			appendChildren(result, innerText);
		}
		if (attributes) {
			setAttributes(result, attributes);
		}
		return result;
	}

	static appendRecursiveChild(parent, ...children) {
		for (let i = 0; i < children.length; i++) {
			if (Array.isArray(children[i])) {
				children[i] = appendRecursiveChild(...children[i]);
			}
		}
		appendChildren(parent, ...children);
		return parent;
	}

	static getArrowElement() {
		return createElement("div", { class: "forward-icon mt-2" }, "⬇️");
	}

	static getCarNameDiv(name) {
		return createElement("div", { class: "car-player mr-2" }, name);
	}

	static clearInputValue(inputElement) {
		inputElement.value = "";
	}

	static isNaturalNumber(number) {
		return number > 0 && Number.isInteger(number);
	}
}

export default Utils;
