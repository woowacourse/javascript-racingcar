import {
  handleCarNamesSubmit,
  handleCountSubmit,
} from "./controller/inputController.js";
import {
  handleRestartButton,
  resetAllViews,
} from "./controller/winnerController.js";
import Car from "./model/Car.js";
import { Element } from "./utils/constants.js";
import { $ } from "./utils/querySelector.js";

class App {
  constructor() {
    this.initializeCarsCount();
    resetAllViews();

    $(Element.CAR_NAMES_SUBMIT_CLASS).addEventListener("click", handleCarNamesSubmit);
    $(Element.COUNT_SUBMIT_CLASS).addEventListener("click", handleCountSubmit);
    $(Element.RESTART_BUTTON_CLASS).addEventListener("click", handleRestartButton);
  }

  initializeCarsCount() {
    this.cars = [];
    this.count = 0;
  }

  generateCars(carNames) {
    carNames.forEach((carName) => {
      this.cars.push(new Car(carName));
    });
  }

  generateCount(count) {
    this.count = count;
  }
}

export const app = new App();
