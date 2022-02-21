import { CAR_NAME_LENGTH_LIMIT, ERROR_MESSAGE } from '../lib/constants.js';
import { checkStringLength, generateId } from '../lib/utils.js';

class Car {
  static idSet = new Set();

  constructor(name) {
    this.id = generateId(Car.idSet);
    this.init(this.id, name);
  }

  goForward() {
    this.progress += 1;
  }

  init(id, name) {
    if (!checkStringLength(name, CAR_NAME_LENGTH_LIMIT)) {
      throw Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OVER);
    }
    if (checkStringLength(name, 0)) {
      throw Error(ERROR_MESSAGE.CAR_NAME_LENGTH_BELOW);
    }
    this.name = name;
    this.progress = 0;
    Car.idSet = new Set([...Car.idSet, id]);
  }
}

export default Car;
