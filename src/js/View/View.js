import Model from "../Model/Model.js";
import {
	openingSettingContainerTemplate,
	titleSectionTemplate,
	carNameSectionTemplate,
	countSectionTemplate,
	closingSettingContainerTemplate,
	resultContainerTemplate,
	arrowTemplate,
	spinnerTemplate,
} from "./templates.js";
import { $ } from "../Manager/domManager.js";

let interval;

class View {
	renderInitialElements($parentElement) {
		$parentElement.innerHTML = openingSettingContainerTemplate + titleSectionTemplate + carNameSectionTemplate + closingSettingContainerTemplate;
	}

	clearInputValue(inputElement) {
		inputElement.value = "";
	}

	renderCountSection($settingContainer) {
		$settingContainer.insertAdjacentHTML("beforeend", countSectionTemplate);
	}

	renderProgressContainer(template) {
		const $app = $("app");
		$app.insertAdjacentHTML("beforeend", template);
		$app.insertAdjacentHTML("beforeend", resultContainerTemplate);
	}

	setRace(cars) {
		interval = setInterval(this.startRace, 1000, cars);
	}

	startRace(cars) {
		if (Model.turn === cars[0].randomNumbers.length) {
			View.stopRace(cars);
		}

		if (Model.turn < cars[0].randomNumbers.length) {
			View.renderRace(cars);
		}
	}

	static renderRace(cars) {
		const renderedCars = $("race-progress-screen").children;

		cars.forEach((_, i) => {
			if (!document.getElementById(`spinner${i}`)) {
				View.renderSpinner(renderedCars, i);
			}
			if (cars[i].randomNumbers[Model.turn] >= 4) {
				this.removeSpinner(i);
				renderedCars[i].insertAdjacentHTML("beforeend", arrowTemplate);
			}
		});

		Model.turn++;
	}

	static stopRace(cars) {
		View.removeLastSpinner(cars);
		clearInterval(interval);
		setTimeout(View.renderWinner, 1000);
		setTimeout(View.alertCongratMsg, 2000);
	}

	static renderSpinner(renderedCars, i) {
		renderedCars[i].insertAdjacentHTML("beforeend", spinnerTemplate(i));
	}

	static removeSpinner(renderedCar) {
		if (document.getElementById(`spinner${renderedCar}`)) {
			document.getElementById(`spinner${renderedCar}`).remove();
		}
	}

	static removeLastSpinner(cars) {
		for (let j = 0; j < cars.length; j++) {
			this.removeSpinner(j);
		}
	}

	static renderWinner() {
		const $resultH2 = $("result-container").querySelector("h2");
		$resultH2.innerText = Model.getResultText();
	}

	static alertCongratMsg() {
		const winners = Model.getWinners();
		alert(`🏆축하합니다! 최종 우승자는 ${winners.join(", ")}입니다.🏆`);
	}
}

export default new View();
