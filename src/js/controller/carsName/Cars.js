import Car from "../../model/Car.js";
import { isDuplicateName, isValidLength } from "./checkFunctions.js";
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

  isValidCarsName(carNameArr) {
    if (
      carNameArr.length <= 1 ||
      isDuplicateName(carNameArr) ||
      !isValidLength(carNameArr)
    ) {
      return false;
    }

    return true;
  }

  makeCars() {
    const carNameArr = carNamesInput.value?.split(SEPARATOR);

    if (!carNamesInput.value || !this.isValidCarsName(carNameArr)) {
      return alert(EXCEPTIONS.INCORRECT_CAR_NAME);
    }

    for (let i = 0; i < carNameArr.length; i++) {
      this.cars.push(new Car(carNameArr[i].trim()));
    }

    return true;
  }

  goNextStep() {
    carNamesInput.readOnly = true;
    carNamesSubmitButton.disabled = true;
    showRacingCountArea();
  }

  addCarNameInputEnterEvent() {
    carNamesInput.addEventListener(EVENT.KEYUP, e => {
      if (e.keyCode === KEYBOARD.ENTER && this.makeCars()) {
        this.goNextStep();
      }
    });
  }

  addCarNameSubmitButtonClickEvent() {
    carNamesSubmitButton.addEventListener(EVENT.CLICK, () => {
      if (this.makeCars()) {
        this.goNextStep();
      }
    });
  }
}
