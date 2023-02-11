const {
  isInLengthLimit,
  isValidString,
  isNumber,
} = require('../utils/checkFor');

const InputException = {
  validateCarName: (carName) => {
    if (!(isInLengthLimit(carName, 5) && isValidString(carName))) {
      throw new Error(
        '[ERROR] 자동차 이름들은 각 각 6자 이상, 자동차 이름들은 쉼표(,)로 구분 지으나 특수문자(공백 포함)은 사용하실 수 없습니다.'
      );
    }
  },
  validateRaceTrial: (raceTrial) => {
    if (!isNumber(raceTrial)) {
      throw new Error('[ERROR] 숫자 입력만 가능합니다.');
    }
  },
};

module.exports = InputException;
