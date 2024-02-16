import Condition from '../constant/Condition.js';
import Message from '../constant/Message.js';

const { CAR, CAR_NAME } = Condition;
const { ERROR } = Message;

class CarValidator {
  static isValidCount(cars) {
    if (cars.length < CAR.COUNT.MIN) {
      throw new Error(ERROR.CAR_COUNT);
    }
  }

  static isNameDuplicate(cars) {
    if (new Set(cars.map((car) => car.getName())).size !== cars.length) {
      throw new Error(ERROR.CAR_NAME_DUPLICATE);
    }
  }

  static isValidNameRange(carName) {
    if (carName.length < CAR_NAME.RANGE.MIN || carName.length > CAR_NAME.RANGE.MAX) {
      throw new Error(ERROR.CAR_NAME_RANGE);
    }
  }
}

export default CarValidator;
