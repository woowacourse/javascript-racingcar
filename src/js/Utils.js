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
			Utils.appendChildren(result, innerText);
		}
		if (attributes) {
			Utils.setAttributes(result, attributes);
		}
		return result;
	}

	static appendRecursiveChild(parent, ...children) {
		for (let i = 0; i < children.length; i++) {
			if (Array.isArray(children[i])) {
				children[i] = Utils.appendRecursiveChild(...children[i]);
			}
		}
		Utils.appendChildren(parent, ...children);
		return parent;
	}

	static getArrowElement() {
		return Utils.createElement("div", { class: "forward-icon mt-2" }, "⬇️");
	}

	static getCarNameDiv(name) {
		return Utils.createElement("div", { class: "car-player mr-2" }, name);
	}

	static clearInputValue(inputElement) {
		inputElement.value = "";
	}

	static isNotNaturalNumber(number) {
		return number < 1 || !Number.isInteger(number);
	}

	static getWinners(cars) {
		const maxScore = Math.max(...cars.map((car) => car.score));
		const maxScoreCars = cars.filter((car) => car.score === maxScore);
		return maxScoreCars.map((car) => car.name);
	}

	static getRandomNumber(startNumber, endNumber) {
		return Math.floor(
			startNumber + Math.random() * (endNumber - startNumber + 1)
		);
	}
}

export default Utils;
