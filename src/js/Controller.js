import { MESSAGE, RANDOM_NUMBER_RANGE, SELECTOR } from "./constants.js";
import CarModel from "./CarModel.js";
import ViewController from "./ViewController.js";
import { getRandomIntInclusive } from "./utils.js";

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

      // TODO: 동일한 이름이 있었을 때 alert하기
      this.carModels = splittedCarNames.map((carName) => new CarModel(carName));

      // TODO: input하면 중복 생성되지 않게하기
      this.viewController.renderCarNameTag(this.carModels);
      this.viewController.show(SELECTOR.LAP_COUNT.CONTAINER);
    });

    const lapCountInput = document.querySelector(SELECTOR.LAP_COUNT.INPUT);
    const lapCountButton = document.querySelector(SELECTOR.LAP_COUNT.BUTTON);

    lapCountButton.addEventListener("click", () => {
      const userInput = lapCountInput.value;

      // TODO: try-catch 형식으로 리팩토링하자!
      if (this.carModels.length === 0) {
        alert(MESSAGE.COMMON.INVALID_ACCESS);
        return;
      }

      if (userInput === "") {
        alert(MESSAGE.LAP_COUNT.NOT_A_NUMBER);
        lapCountInput.value = "";
        return;
      }

      const userInputNumber = Number(userInput);

      if (userInputNumber < 1) {
        alert(MESSAGE.LAP_COUNT.OUT_OF_RANGE);
        lapCountInput.value = "";
        return;
      }

      if (userInputNumber > 20) {
        alert(MESSAGE.LAP_COUNT.OUT_OF_RANGE);
        lapCountInput.value = "";
        return;
      }

      if (!Number.isInteger(userInputNumber)) {
        alert(MESSAGE.LAP_COUNT.OUT_OF_RANGE);
        lapCountInput.value = "";
        return;
      }

      // TODO: 성공 케이스
      const lapCount = userInputNumber;

      for (let i = 0; i < lapCount; i++) {
        const lapResult = this.carModels.map((carModel) => {
          const { MIN, MAX } = RANDOM_NUMBER_RANGE;
          const randomNumber = getRandomIntInclusive(MIN, MAX);

          if (randomNumber <= 3) return false;

          carModel.move();
          return true;
        });

        this.viewController.renderGameProgress(lapResult);
      }

      this.viewController.show(SELECTOR.GAME_RESULT.CONTAINER);
    });
  }
}
