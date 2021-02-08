import { MESSAGE, SELECTOR } from "./constants.js";
import { Car } from "./Model.js";
import { show } from "./View.js";

export class Controller {
  constructor() {
    const carNameInput = document.querySelector(SELECTOR.CAR_NAME.INPUT);
    const carNameButton = document.querySelector(SELECTOR.CAR_NAME.BUTTON);

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

      const cars = splittedCarNames.map((carName) => new Car(carName));
      show(SELECTOR.LAP.CONTAINER);
    });
  }
}
