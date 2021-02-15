function setAttributes(element, attributes) {
	for (let i in attributes) {
		element.setAttribute(i, attributes[i]);
	}
}

function appendChildren(parentElement, ...ChildElements) {
	for (let i = 0; i < ChildElements.length; i++) {
		parentElement.appendChild(ChildElements[i]);
	}
}

function createElement(tagType, attributes, innerText) {
	const result = document.createElement(tagType);

	if (innerText) {
		const innerText = document.createTextNode(innerText);
		appendChildren(result, innerText);
	}
	if (attributes) {
		setAttributes(result, attributes);
	}

	return result;
}

function createRaceProgressContainerTemplate(cars) {
	return `
		<div id="race-progress-container" class="d-flex justify-center mt-5">
		<section class="mt-4">
			<div id="race-progress-screen" class="d-flex">
				${cars
					.map((car) => {
						return `<div>
							<div class="car-player mr-2">${car.name}</div>
						</div>`;
					})
					.join("")}
			</div>
		</section>
	</div>`;
}

function $(id) {
	return document.getElementById(id);
}

export { setAttributes, appendChildren, createElement, createRaceProgressContainerTemplate, $ };
