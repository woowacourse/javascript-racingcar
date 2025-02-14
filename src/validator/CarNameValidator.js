import { CONFIG } from '../constants/config.js';
import { ERROR } from '../constants/messages.js';

const CarNameValidator = {
  checkCarNameLength(carName) {
    if (carName.length > CONFIG.MAXIMUM_CAR_NAME
        || carName.length < CONFIG.MINIMUM_CAR_NAME) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }
    return carName;
  },
  checkBlank(carName) {
    if (carName.includes(CONFIG.BLANK)) {
      throw new Error(ERROR.BLANK);
    }
    return carName;
  },
  checkDuplicatedCarName(carNames) {
    if (carNames.length !== new Set(carNames).size) {
      throw new Error(ERROR.DUPLICATED_CAR_NAME);
    }
    return carNames;
  },
};

export default CarNameValidator;
