import { CAR_NAME_LENGTH_LIMIT, ERROR_MESSAGE } from '../lib/constants.js';
import { checkStringLength } from '../lib/utils.js';

class Car {
  constructor(name) {
    // this.id = generateId();
    this.init(name);
  }

  goForward() {
    this.progress += 1;
  }

  init(name) {
    if (!checkStringLength(name, CAR_NAME_LENGTH_LIMIT)) {
      throw Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OVER);
    }
    this.name = name;
    this.progress = 0;
  }
}

export default Car;
