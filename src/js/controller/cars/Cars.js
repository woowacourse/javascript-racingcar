import Car from "../../model/Car.js";
import { isValidCarsName } from "./checkFunctions.js";
import { SEPARATOR, EXCEPTIONS } from "../../util/constants.js";
import { carNamesInput, carNamesSubmitButton } from "../../util/elements.js";
import {
  lockCarNames,
  toggleHiddenRacingCountArea,
} from "../../view/commonView.js";

export default class Cars {
  constructor() {
    this.init();
    this.addCarNameSubmitEvent();
  }

  init() {
    this.list = [];
  }

  getCars() {
    return this.list;
  }

  setCars(cars) {
    this.list = cars;
  }

  static trimCarNames(carNameArr) {
    return carNameArr.map(carName => carName.trim());
  }

  makeCars(carNamesInputValue) {
    let carNameArr = carNamesInputValue?.split(SEPARATOR);

    carNameArr = Cars.trimCarNames(carNameArr);
    if (!carNamesInputValue || !isValidCarsName(carNameArr)) {
      return alert(EXCEPTIONS.INCORRECT_CAR_NAME);
    }

    carNameArr.forEach(carName => {
      this.list.push(new Car(carName));
    });

    return true;
  }

  static goNextStep() {
    lockCarNames(true);
    toggleHiddenRacingCountArea();
  }

  addCarNameSubmitEvent() {
    carNamesInput.addEventListener("keyup", e => {
      if (e.key === "Enter" && this.makeCars(carNamesInput.value)) {
        Cars.goNextStep();
      }
    });

    carNamesSubmitButton.addEventListener("click", () => {
      if (this.makeCars(carNamesInput.value)) {
        Cars.goNextStep();
      }
    });
  }
}
