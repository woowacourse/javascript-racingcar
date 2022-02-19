import {
  CAR_NAME_MAX_LENGTH,
  CAR_NAME_MIN_LENGTH,
  CAR_NAME_SEPARATOR,
  ERROR_MESSAGE,
} from '../../lib/constants.js';
import { checkStringInRange, splitString } from '../../lib/utils.js';
import Car from './car.js';

class CarManager {
  constructor() {
    this.cars = null;
  }

  makeCars(carNameValue) {
    const names = splitString(carNameValue, CAR_NAME_SEPARATOR);
    if (!CarManager.isValidCarNameInput(names)) {
      throw Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OUT_OF_RANGE);
    }
    this.cars = names.map((name) => new Car(name));
  }

  static isValidCarNameInput(names) {
    return names.every((name) => CarManager.isCarNameInRange(name));
  }

  static isCarNameInRange(name) {
    return checkStringInRange({ str: name, min: CAR_NAME_MIN_LENGTH, max: CAR_NAME_MAX_LENGTH });
  }
}

export default CarManager;
