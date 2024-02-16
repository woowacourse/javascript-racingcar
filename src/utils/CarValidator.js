import Condition from '../constant/Condition.js';
import Message from '../constant/Message.js';

const { CAR, CAR_NAME } = Condition;
const { ERROR } = Message;

class CarValidator {
  static validCount(cars) {
    if (cars.length < CAR.count.min) {
      throw new Error(ERROR.car_count);
    }
  }

  static duplicateName(cars) {
    if (new Set(cars.map((car) => car.getName())).size !== cars.length) {
      throw new Error(ERROR.car_name_duplicate);
    }
  }

  static validNameRange(carName) {
    if (carName.length < CAR_NAME.range.min || carName.length > CAR_NAME.range.max) {
      throw new Error(ERROR.car_name_range);
    }
  }
}

export default CarValidator;
