import {
  handleCarNamesSubmit,
  handleCountSubmit,
} from "./controller/inputController.js";
import {
  handleRestartButton,
  resetAllViews,
} from "./controller/winnerController.js";
import Car from "./model/Car.js";

class App {
  constructor() {
    this.cars = [];
    resetAllViews();

    document
      .querySelector("#car-names-submit")
      .addEventListener("click", handleCarNamesSubmit);
    document
      .querySelector("#count-submit")
      .addEventListener("click", handleCountSubmit);
    document
      .querySelector("#restart-button")
      .addEventListener("click", handleRestartButton);
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
