import { CAR_NAME_MAX_LENGTH, CAR_NAME_MIN_LENGTH, ERROR_MESSAGE } from '../lib/constants.js';
import { checkStringInRange } from '../lib/utils.js';
import Car from './car.js';

class CarManager {
  constructor() {
    this.cars = null;
  }

  makeCars(names) {
    if (!CarManager.isValidCarNameInput(names)) {
      throw Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OUT_OF_RANGE);
    }
    this.cars = names.map((name) => new Car(name));
  }

  static isValidCarNameInput(names) {
    return names.some((name) => checkStringInRange(name, CAR_NAME_MIN_LENGTH, CAR_NAME_MAX_LENGTH));
  }
}

export default CarManager;
