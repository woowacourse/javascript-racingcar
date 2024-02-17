import { ERROR_CAR_NAME, ERROR_ROUND_COUNT } from '../constants/message';
import { CAR, ROUND, SYMBOLS } from '../constants/setting';

const Validator = {
  isValidCarNameLengthRange(carName) {
    if (carName.length < CAR.NAME.MIN || carName.length > CAR.NAME.MAX) {
      throw new Error(`${ERROR_CAR_NAME.RANGE}${SYMBOLS.NEW_LINE}`);
    }
  },

  isValidCarNameRule(carName) {
    const regex = CAR.NAME.RULE;
    if (!regex.test(carName)) {
      throw new Error(`${ERROR_CAR_NAME.RULE}${SYMBOLS.NEW_LINE}`);
    }
  },

  isUniqueCarName(cars, uniqueCarNames) {
    if (cars.length !== uniqueCarNames.size) {
      throw new Error(ERROR_CAR_NAME.DUPLICATED);
    }
  },

  isValidRoundCountExist(count) {
    if (count === SYMBOLS.EMPTY) {
      throw new Error(`${ERROR_ROUND_COUNT.EMPTY}${SYMBOLS.NEW_LINE}`);
    }
  },

  isValidRoundCountRule(count) {
    const countValueToNumber = Number(count);

    if (!Number.isInteger(countValueToNumber)) {
      throw new Error(`${ERROR_ROUND_COUNT.RULE}${SYMBOLS.NEW_LINE}`);
    }
  },

  isValidRoundCountRange(count) {
    const countValueToNumber = Number(count);

    if (countValueToNumber < ROUND.MIN || countValueToNumber > ROUND.MAX) {
      throw new Error(`${ERROR_ROUND_COUNT.RANGE}${SYMBOLS.NEW_LINE}`);
    }
  },
};

export default Validator;
