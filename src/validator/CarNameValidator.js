import { ERROR } from '../constants/messages';

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
};

export default CarNameValidator;
