import {
  handleCarNamesSubmit,
  handleCountSubmit,
} from "./controller/inputController.js";
import { $ } from "./controller/utils.js";
import {
  handleRestartButton,
  resetAllViews,
} from "./controller/winnerController.js";
import Car from "./model/Car.js";

class App {
  constructor() {
    this.initializeCarsCount();
    resetAllViews();

    $("#car-names-submit").addEventListener("click", handleCarNamesSubmit);
    $("#count-submit").addEventListener("click", handleCountSubmit);
    $("#restart-button").addEventListener("click", handleRestartButton);
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
