import Car from "../../model/Car.js";
import { isDuplicateName, isLengthOK } from "./checkFunctions.js";
import { showRacingCountArea } from "../../view/util/viewControl.js";
import { EVENT, EXCEPTIONS } from "../../util/constants.js";
import { carNamesInput, carNamesSubmitButton } from "../../util/elements.js";

export default class Cars {
  constructor() {
    this.init();
    this.addCarNameSubmitButtonClickEvent();
  }

  init() {
    this.cars = [];
  }

  getCars() {
    return this.cars;
  }

  setCars(cars) {
    this.cars = cars;
  }

  isValidCarsName(carNamesInput) {
    const carNameArr = carNamesInput.split(",");
    if (carNameArr.length <= 1) {
      return false;
    }
    for (let i = 0; i < carNameArr.length; i++) {
      carNameArr[i] = carNameArr[i].trim();
      if (!carNameArr[i] || !isLengthOK(carNameArr[i])) {
        return false;
      }
    }
    if (isDuplicateName(carNameArr)) {
      return false;
    }
    return true;
  }

  addCarNameSubmitButtonClickEvent() {
    carNamesSubmitButton.addEventListener(EVENT.CLICK, () => {
      if (!carNamesInput.value || !this.isValidCarsName(carNamesInput.value)) {
        return alert(EXCEPTIONS.INCORRECT_CAR_NAME);
      }
      const carNameArr = carNamesInput.value.split(",");
      for (let i = 0; i < carNameArr.length; i++) {
        this.cars.push(new Car(carNameArr[i].trim()));
      }
      carNamesInput.readOnly = true;
      carNamesSubmitButton.disabled = true;
      showRacingCountArea();
    });
  }
}
