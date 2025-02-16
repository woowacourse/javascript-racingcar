import StringUtils from '../utils/StringUtils.js';
import { CONFIG } from '../constants/config.js';
import { ERROR } from '../constants/messages.js';

const Validator = {
  checkCarNameLength(carName) {
    if (!StringUtils.isValidLength(carName, CONFIG.MINIMUM_CAR_NAME, CONFIG.MAXIMUM_CAR_NAME)) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }
    return carName; x;
  },
  checkBlank(carName) {
    if (StringUtils.hasBlank(carName)) {
      throw new Error(ERROR.BLANK);
    }
    return carName;
  },
  checkDuplicatedCarName(carNames) {
    if (StringUtils.hasDuplicate(carNames)) {
      throw new Error(ERROR.DUPLICATED_CAR_NAME);
    }
    return carNames;
  },
};

export default Validator;
