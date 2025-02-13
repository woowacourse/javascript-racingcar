import { ERROR } from '../constants/messages.js';

const CarNameValidator = {
  checkCarNameLength(carName) {
    if (carName.length > 5 || carName.length < 1) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }
    return carName;
  },
  checkBlank(carName) {
    if (carName.includes(' ')) {
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
