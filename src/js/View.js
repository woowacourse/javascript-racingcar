import Model from "./Model.js";
import { IDS, TEMPLATES } from "./constants.js";
import Utils from "./Utils.js";

class View {
	initialzeRender($parentElement) {
		$parentElement.innerHTML = TEMPLATES.SETTING_CONTAINER;
	}

	countSectionRender($settingContainer) {
		$settingContainer.insertAdjacentHTML("beforeend", TEMPLATES.COUNT_SECTION);
	}

	progressContainerRender() {
		const $app = document.getElementById(IDS.APP);
		$app.insertAdjacentHTML("beforeend", TEMPLATES.PROGRESS_CONTAINER);
		$app.insertAdjacentHTML("beforeend", TEMPLATES.RESULT_CONTAINER);
	}

	progressCarsRender() {
		const $raceProgressScreen = document.getElementById(
			IDS.RACE_PROGRESS_SCREEN
		);
		Model.cars.forEach((car) => {
			const $container = document.createElement("div");
			const $carPlayer = Utils.getCarNameDiv(car.name);
			Utils.appendRecursiveChild($raceProgressScreen, [$container, $carPlayer]);
		});
	}

	arrowRender(boolsAboutMovement) {
		const $cars = document.getElementById("race-progress-screen").children;
		boolsAboutMovement.forEach((moved, i) => {
			const $arrow = Utils.getArrowElement();
			moved && $cars[i].appendChild($arrow);
		});
	}

	winnerRender() {
		const $resultH2 = document.getElementById(IDS.WINNER_TEXT);
		$resultH2.innerText = Model.getResultText();
	}
}

export default new View();
