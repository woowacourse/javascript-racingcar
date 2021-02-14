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

	createRaceProgressContainerTemplate(cars) {
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

	get(id) {
		return document.getElementById(id);
	}
}

export default new Utils();
