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
    this.cars = [];
    resetAllViews();

    $("#car-names-submit").addEventListener("click", handleCarNamesSubmit);
    $("#count-submit").addEventListener("click", handleCountSubmit);
    $("#restart-button").addEventListener("click", handleRestartButton);
  }

  initializeCars() {
    this.cars = [];
  }

  generateCars(carNames) {
    carNames.forEach((carName) => {
      this.cars.push(new Car(carName));
    });
  }
}

export const app = new App();
