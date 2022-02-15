import Car from "../../model/Car.js";
import { isValidCarsName } from "./checkFunctions.js";
import { showRacingCountArea } from "../../view/viewControl.js";
import { carNamesInput, carNamesSubmitButton } from "../../elements.js";
import { EXCEPTIONS } from "../../constants/exceptions.js";
import { KEYBOARD_ENTER } from "../../constants/events.js";

export default class Cars {
  constructor() {
    this.init();
    this.addCarNameInputEnterEvent();
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

  sortCars() {
    this.cars.sort((left, right) => right.location - left.location);
  }

  trimCars() {
    for (let i = 0; i < this.cars.length; i++) {
      this.cars[i] = this.cars[i].trim();
    }
  }

  makeCars(carNamesInputValue) {
    const carNameArr = carNamesInputValue?.split(",");

    this.trimCars();
    if (!carNamesInputValue || !isValidCarsName(carNameArr)) {
      return alert(EXCEPTIONS.INVALID_CAR_NAMES);
    }

    for (let i = 0; i < carNameArr.length; i++) {
      this.cars.push(new Car(carNameArr[i].trim()));
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
      if (e.keyCode === KEYBOARD_ENTER && this.makeCars(carNamesInput.value)) {
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
