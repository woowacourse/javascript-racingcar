import MESSAGES from '../constants/messages.js';
import ERRORS from '../constants/errors.js';

class Cars {
  #validate(carStr) {
    if (carStr.split(',').some(car => car.length > 5)) {
      throw new Error(ERRORS.carNameLength);
    }
  }

  constructor(carStr) {}
}

export default Cars;
