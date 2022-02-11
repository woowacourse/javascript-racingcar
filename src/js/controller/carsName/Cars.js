import Car from "../../model/Car.js";
import { isValidCarsName } from "./checkFunctions.js";
import { showRacingCountArea } from "../../view/viewControl.js";
import {
  SEPARATOR,
  EVENT,
  EXCEPTIONS,
  KEYBOARD,
} from "../../util/constants.js";
import { carNamesInput, carNamesSubmitButton } from "../../util/elements.js";

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
    const carNameArr = carNamesInputValue?.split(SEPARATOR);

    this.trimCars();
    if (!carNamesInputValue || !isValidCarsName(carNameArr)) {
      return alert(EXCEPTIONS.INCORRECT_CAR_NAME);
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
    carNamesInput.addEventListener(EVENT.KEYUP, e => {
      if (e.keyCode === KEYBOARD.ENTER && this.makeCars(carNamesInput.value)) {
        Cars.goNextStep();
      }
    });
  }

  addCarNameSubmitButtonClickEvent() {
    carNamesSubmitButton.addEventListener(EVENT.CLICK, () => {
      if (this.makeCars(carNamesInput.value)) {
        Cars.goNextStep();
      }
    });
  }
}
