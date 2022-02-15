import Car from "../../model/Car.js";
import { isValidCarsName } from "./validation.js";
import { showRacingCountArea } from "../../view/viewControl.js";
import { EXCEPTIONS } from "../../constants/exceptions.js";
import { KEYBOARD_ENTER } from "../../constants/events.js";
import { $ } from "../../view/getElement.js";
import { trimArray } from "../../utils/trimArray.js";

export default class CarManager {
  constructor() {
    this.cars = [];
    this.addCarNameInputEnterEvent();
    this.addCarNameSubmitButtonClickEvent();
  }

  init() {
    this.cars = [];
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
    const carNamesArray = trimArray(carNamesInputValue.split(","));

    if (!carNamesInputValue || !isValidCarsName(carNamesArray)) {
      return alert(EXCEPTIONS.INVALID_CAR_NAMES);
    }

    for (let i = 0; i < carNamesArray.length; i++) {
      this.cars.push(new Car(carNamesArray[i]));
    }

    return true;
  }

  static goNextStep() {
    $("car-names-input").readOnly = true;
    $("car-names-submit").disabled = true;
    showRacingCountArea();
  }

  addCarNameInputEnterEvent() {
    $("car-names-input").addEventListener("keyup", e => {
      if (
        e.keyCode === KEYBOARD_ENTER &&
        this.makeCars($("car-names-input").value)
      ) {
        CarManager.goNextStep();
      }
    });
  }

  addCarNameSubmitButtonClickEvent() {
    $("car-names-submit").addEventListener("click", () => {
      if (this.makeCars($("car-names-input").value)) {
        CarManager.goNextStep();
      }
    });
  }
}
