import {ERROR_MESSAGE} from '../constants/message.js';
import {VALID} from '../constants/constant.js';

class Valid {
  isCarExist(car) {
    if (car.length > VALID.ZERO) {
      alert(ERROR_MESSAGE.CAR_EXIST);
      return true;
    }

    return false;
  }

  isCountExist(count) {
    if (count) {
      alert(ERROR_MESSAGE.COUNT_EXIST);
      return true;
    }

    return false;
  }

  isCarValid(carNames) {
    if (carNames.some((carName) => carName.length > VALID.CARNAME_MAX_LENGTH)) {
      return alert(ERROR_MESSAGE.OVER_CARNAME_MAX_LENGTH);
    }
    if (carNames.some((carName) => carName.length < VALID.CARNAME_MIN_LENGTH)) {
      return alert(ERROR_MESSAGE.BLANK_CARNAME);
    }
    if (carNames.length !== new Set(carNames).size) {
      return alert(ERROR_MESSAGE.DUPLICATE_CARNAME);
    }

    return true;
  }

  isCountValid(count) {
    if (isNaN(parseInt(count, 10))) {
      return alert(ERROR_MESSAGE.ISNAN_COUNT);
    }

    if (parseInt(count, 10) < VALID.COUNT_MIN_NUM) {
      return alert(ERROR_MESSAGE.ZERO_OR_MINUS_COUNT);
    }

    if (parseInt(count, 10) !== parseFloat(count)) {
      return alert(ERROR_MESSAGE.FLOAT_COUNT);
    }

    return true;
  }
}

export const {isCarExist, isCountExist, isCarValid, isCountValid} = new Valid();
