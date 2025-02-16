import { CAR_NAME_CONDITION } from '../../constants/Constants.js';

class IsValidCarName {
  static lengthMin(carName) {
    return carName.trim().length >= CAR_NAME_CONDITION.LENGTH_MIN;
  }

  static lengthMax(carName) {
    return carName.length <= CAR_NAME_CONDITION.LENGTH_MAX;
  }
}

export default IsValidCarName;
