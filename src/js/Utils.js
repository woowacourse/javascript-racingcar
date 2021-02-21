export const setAttributes = (element, attributes) => {
	for (let i in attributes) {
		element.setAttribute(i, attributes[i])
	}
}

export const appendChildren = (parentElement, ...ChildElements) => {
	for (let i = 0; i < ChildElements.length; i++) {
		parentElement.appendChild(ChildElements[i])
	}
}

export const createElement = (tagType, attributes, text) => {
	const result = document.createElement(tagType)
	if (text) {
		const innerText = document.createTextNode(text)
		appendChildren(result, innerText)
	}
	if (attributes) {
		setAttributes(result, attributes)
	}
	return result
}

export const appendRecursiveChild = (parent, ...children) => {
	for (let i = 0; i < children.length; i++) {
		if (Array.isArray(children[i])) {
			children[i] = appendRecursiveChild(...children[i])
		}
	}
	appendChildren(parent, ...children)
	return parent
}

export const getArrowElement = () => {
	return createElement("div", { class: "forward-icon mt-2" }, "⬇️")
}

export const getCarNameDiv = (name) => {
	return createElement("div", { class: "car-player mr-2" }, name)
}

export const clearInputValue = (inputElement) => {
	inputElement.value = ""
}

export const isNotNaturalNumber = (number) => {
	return number < 1 || !Number.isInteger(number)
}

export const getWinners = (cars) => {
	const maxScore = Math.max(...cars.map((car) => car.score))
	const maxScoreCars = cars.filter((car) => car.score === maxScore)
	return maxScoreCars.map((car) => car.name)
}

export const getRandomNumber = (startNumber, endNumber) => {
	return Math.floor(startNumber + Math.random() * (endNumber - startNumber + 1))
}
