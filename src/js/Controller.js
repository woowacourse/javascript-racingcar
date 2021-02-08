import { MESSAGE, SELECTOR } from "./constants.js";
import CarModel from "./CarModel.js";
import ViewController from "./ViewController.js";

export class Controller {
  constructor() {
    const carNameInput = document.querySelector(SELECTOR.CAR_NAME.INPUT);
    const carNameButton = document.querySelector(SELECTOR.CAR_NAME.BUTTON);

    this.carModels = [];
    this.viewController = new ViewController();

    carNameButton.addEventListener("click", () => {
      const userInput = carNameInput.value;

      const splittedCarNames = userInput
        .split(",")
        .map((carName) => carName.trim());

      if (splittedCarNames.length < 2) {
        alert(MESSAGE.CAR_NAME.MIN_NUMBER);
        return;
      }

      if (splittedCarNames.some((carName) => carName.length > 5)) {
        alert(MESSAGE.CAR_NAME.MAX_LENGTH);
        return;
      }

      this.carModels = splittedCarNames.map((carName) => new CarModel(carName));

      this.viewController.renderCarNameTag(this.carModels);
      this.viewController.show(SELECTOR.LAP.CONTAINER);
    });
  }
}
