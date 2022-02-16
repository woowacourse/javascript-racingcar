import { RULES, ERROR_MESSAGES } from '../constants/index.js';
import { convertToNumber } from '../util/index.js';

const isEmptyName = (carNameList) => carNameList.some((carName) => carName === RULES.EMPTY_STRING);

const isAllValidLength = (carNameList) =>
  carNameList.every((carName) => carName.length <= RULES.MAX_CAR_NAME_LENGTH);

const isEmptyString = (inputValue) => inputValue === RULES.EMPTY_STRING;

const isNotNumberType = (racingCount) => typeof racingCount !== 'number';

const isNotNaturalNumber = (number) => number < 1 || Math.floor(number) !== number;

const validator = {
  checkVCarNames: (carNameList) => {
    if (isEmptyName(carNameList)) {
      throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAME);
    }

    if (!isAllValidLength(carNameList)) {
      throw new Error(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH);
    }
  },
  checkRacingCount: (racingCount) => {
    if (isEmptyString(racingCount)) {
      throw new Error(ERROR_MESSAGES.BLANK_RACING_COUNT);
    }

    const racingCountNumber = convertToNumber(racingCount);

    if (isNotNumberType(racingCountNumber)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER_TYPE);
    }

    if (isNotNaturalNumber(racingCountNumber)) {
      throw new Error(ERROR_MESSAGES.NOT_NATURAL_NUMBER);
    }
  },
};

export default validator;
