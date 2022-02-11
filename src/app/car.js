import { CAR_NAME_LENGTH_LIMIT, ERROR_MESSAGE } from '../lib/constants.js';
import { checkStringLength, generateId } from '../lib/utils.js';

class Car {
  static carIdObj = {};

  constructor(name) {
    this.id = generateId(Car.carIdObj);
    this.init(this.id, name);
  }

  goForward() {
    this.progress += 1;
  }

  init(id, name) {
    if (!checkStringLength(name, CAR_NAME_LENGTH_LIMIT)) {
      throw Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OVER);
    }
    this.name = name;
    this.progress = 0;
    Car.carIdObj = { ...Car.carIdObj, [`${id}`]: true };
  }
}

export default Car;
