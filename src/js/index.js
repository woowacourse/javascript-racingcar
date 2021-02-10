import {
  handleCarNamesSubmit,
  handleCountSubmit,
} from "./controller/inputController.js";
import {
  handleRestartButton,
  resetAllViews,
} from "./controller/winnerController.js";
import { selectors } from "./keys.js";
import Car from "./model/Car.js";

class App {
  constructor() {
    this.cars = [];
    resetAllViews();
    document
      .querySelector(selectors.carNamesSubmit)
      .addEventListener("click", handleCarNamesSubmit);
    document
      .querySelector(selectors.countSubmit)
      .addEventListener("click", handleCountSubmit);
    document
      .querySelector(selectors.restartButton)
      .addEventListener("click", handleRestartButton);
  }

  initializeCars() {
    this.cars = [];
  }

  addCars(carNames) {
    carNames.forEach((carName) => {
      this.cars.push(new Car(carName));
    });
  }
}

export const app = new App();
