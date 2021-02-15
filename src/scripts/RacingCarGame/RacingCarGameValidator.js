import {
  MAX_CAR_NAME_EXCEEDED_MESSAGE,
  CAR_NAME_EMPTY_MESSAGE,
  SHOULD_NOT_DECIMAL_MESSAGE,
  SHOULD_GREATER_THAN_ZERO_MESSAGE,
  SHOULD_REGISTER_CAR_FIRST_MESSAGE,
  RACE_IS_ON_GOING_MESSAGE,
  MAX_CAR_NAME_LENGTH_NUMBER,
} from '../constants.js';

const isCarNameTooLong = (carName) => {
  return carName.length > MAX_CAR_NAME_LENGTH_NUMBER;
};

const isCarNameEmpty = (carName) => {
  return carName.length === 0;
};

const isInteger = (number) => {
  return number === parseInt(number);
};

const isNagativeOrZero = (number) => {
  return number <= 0;
};

const isCarNameVaild = (carName) => {
  if (isCarNameTooLong(carName) || isCarNameEmpty(carName)) {
    return false;
  }

  return true;
};

const alertCarNameNotVaild = (carName) => {
  if (isCarNameTooLong(carName)) {
    alert(MAX_CAR_NAME_EXCEEDED_MESSAGE);
  } else if (isCarNameEmpty(carName)) {
    alert(CAR_NAME_EMPTY_MESSAGE);
  }
};

export default {
  isCarListEmpty(carList) {
    if (carList.length === 0) {
      return true;
    }

    return false;
  },

  alertRaceIsOnGoing() {
    alert(RACE_IS_ON_GOING_MESSAGE);
  },
  alertCarListEmpty() {
    alert(SHOULD_REGISTER_CAR_FIRST_MESSAGE);
  },

  isCarNameListValid(carNameList) {
    return carNameList.every((carName) => isCarNameVaild(carName));
  },

  alertCarNameListNotVaild(carNameList) {
    carNameList.forEach((carName) => alertCarNameNotVaild(carName));
  },

  isTryCountValid(tryCount) {
    if (!isInteger(tryCount) || isNagativeOrZero(tryCount)) {
      return false;
    }

    return true;
  },

  alertTryCountNotValid(tryCount) {
    if (!isInteger(tryCount)) {
      alert(SHOULD_NOT_DECIMAL_MESSAGE);
    }
    if (isNagativeOrZero(tryCount)) {
      alert(SHOULD_GREATER_THAN_ZERO_MESSAGE);
    }
  },
};
