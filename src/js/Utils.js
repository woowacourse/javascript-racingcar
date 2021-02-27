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

export const clearInputValue = (inputElement) => {
	inputElement.value = ""
}

export const includesEmptyString = (array) => {
	return array.includes("")
}

export const isNotNaturalNumber = (number) => {
	return number < 1 || !Number.isInteger(number)
}

export const getRandomNumber = (startNumber, endNumber) => {
	return Math.floor(startNumber + Math.random() * (endNumber - startNumber + 1))
}

export const $ = (selector) => {
	return document.querySelectorAll(selector).length === 1
		? document.querySelector(selector)
		: document.querySelectorAll(selector)
}

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
