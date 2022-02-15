import Car from "../../model/Car.js";
import { isValidCarsName } from "./checkFunctions.js";
import { showRacingCountArea } from "../../view/viewControl.js";
import { SEPARATOR, EXCEPTIONS } from "../../util/constants.js";
import { carNamesInput, carNamesSubmitButton } from "../../util/elements.js";

export default class Cars {
  constructor() {
    this.init();
    this.addCarNameInputEnterEvent();
    this.addCarNameSubmitButtonClickEvent();
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

  trimCars(carNameArr) {
    for (let i = 0; i < carNameArr.length; i++) {
      carNameArr[i] = carNameArr[i].trim();
    }
  }

  makeCars(carNamesInputValue) {
    const carNameArr = carNamesInputValue?.split(SEPARATOR);

    this.trimCars(carNameArr);
    if (!carNamesInputValue || !isValidCarsName(carNameArr)) {
      return alert(EXCEPTIONS.INCORRECT_CAR_NAME);
    }

    for (let i = 0; i < carNameArr.length; i++) {
      this.list.push(new Car(carNameArr[i].trim()));
    }

    return true;
  }

  static goNextStep() {
    carNamesInput.readOnly = true;
    carNamesSubmitButton.disabled = true;
    showRacingCountArea();
  }

  addCarNameInputEnterEvent() {
    carNamesInput.addEventListener("keyup", e => {
      if (e.key === "Enter" && this.makeCars(carNamesInput.value)) {
        Cars.goNextStep();
      }
    });
  }

  addCarNameSubmitButtonClickEvent() {
    carNamesSubmitButton.addEventListener("click", () => {
      if (this.makeCars(carNamesInput.value)) {
        Cars.goNextStep();
      }
    });
  }
}
