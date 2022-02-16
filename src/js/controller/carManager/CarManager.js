import Car from "../../model/Car.js";
import { isValidCarsName } from "./validation.js";
import { showRacingCountArea } from "../../view/viewControl.js";
import { EXCEPTIONS } from "../../constants/exceptions.js";
import { $ } from "../../view/getElement.js";
import { trimArray } from "../../utils/trimArray.js";

export default class CarManager {
  constructor() {
    this.cars = [];
    this.addSubmitCarNamesEventListener();
  }

  init() {
    this.cars = [];
  }

  sortCars() {
    this.cars.sort((left, right) => right.location - left.location);
  }

  makeCars(carNamesInputValue) {
    const carNamesArray = trimArray(carNamesInputValue.split(","));

    if (!carNamesInputValue || !isValidCarsName(carNamesArray)) {
      return alert(EXCEPTIONS.INVALID_CAR_NAMES);
    }

    carNamesArray.forEach(carName => {
      this.cars.push(new Car(carName));
    });

    return true;
  }

  goNextStep() {
    $("car-names-input").readOnly = true;
    $("car-names-submit").disabled = true;
    showRacingCountArea();
  }

  submitCarNames() {
    if (this.makeCars($("car-names-input").value)) {
      this.goNextStep();
    }
  }

  addSubmitCarNamesEventListener() {
    $("car-names-input").addEventListener("keyup", e => {
      if (e.key === "Enter") {
        this.submitCarNames();
      }
    });

    $("car-names-submit").addEventListener("click", () => {
      this.submitCarNames();
    });
  }
}
