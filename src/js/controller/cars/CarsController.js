import Car from "../../model/Car.js";
import Cars from "../../model/Cars.js";
import { isValidCarsName, isValidLengthCarName } from "./checkFunctions.js";
import { SEPARATOR, EXCEPTIONS } from "../constants.js";
import { carNamesArea, carNamesInput } from "../../util/elements.js";
import {
  lockCarNames,
  toggleHiddenRacingCountArea,
} from "../../view/commonView.js";

export default class CarsController {
  constructor() {
    this.list = new Cars();
    this.addCarNameSubmitEvent();
  }

  makeCars(carNamesInputValue) {
    const { INCORRECT_CAR_NAME } = EXCEPTIONS;

    if (!carNamesInputValue) {
      return alert(INCORRECT_CAR_NAME);
    }

    const carNameArr = carNamesInputValue.split(SEPARATOR).map(carName => carName.trim());
    
    if (!isValidCarsName(carNameArr)) {
      return alert(INCORRECT_CAR_NAME);
    }

    const cars = [];

    for (let i = 0; i < carNameArr.length; i++) {
      const car = new Car(carNameArr[i]);
      if (!isValidLengthCarName(carNameArr[i])) {
        return alert(INCORRECT_CAR_NAME);
      }
      cars.push(car);
    }

    this.list.setCars(cars);
    return true;
  }

  submitFunc = e => {
    e.preventDefault();
    const cars = this.makeCars(carNamesInput.value);
    if (cars) {
      lockCarNames(true);
      toggleHiddenRacingCountArea();
    }
  }

  addCarNameSubmitEvent() {
    carNamesArea.addEventListener("submit", this.submitFunc);
  }
}
