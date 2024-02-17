import { ERROR_CAR_NAME, ERROR_MOVE_COUNT } from '../constants/message';

const Validator = {
  isValidCarNameLengthRange(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error(ERROR_CAR_NAME.RANGE);
    }
  },

  isValidCarNameRule(carName) {
    const regex = /^[가-힣a-zA-Z\s]*$/;
    if (!regex.test(carName)) {
      throw new Error(ERROR_CAR_NAME.RULE);
    }
  },

  isUniqueCarName(cars, uniqueCarNames) {
    if (cars.length !== uniqueCarNames.size) {
      throw new Error(ERROR_CAR_NAME.DUPLICATED);
    }
  },

  isValidRoundCountExist(count) {
    if (count === '') {
      throw new Error(ERROR_ROUND_COUNT.EMPTY);
    }
  },

  isValidRoundCountRule(count) {
    const countValueToNumber = Number(count);

    if (!Number.isInteger(countValueToNumber)) {
      throw new Error(ERROR_ROUND_COUNT.RULE);
    }
  },

  isValidRoundCountRange(count) {
    const countValueToNumber = Number(count);

    if (countValueToNumber < 1 || countValueToNumber > 10) {
      throw new Error(ERROR_TRY_COUNT.RANGE);
    }
  },
};

export default Validator;
