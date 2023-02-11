const {
  isInLengthLimit,
  isValidString,
  isNumber,
} = require('../utils/checkForString');

const InputException = {
  validateCarName: (carName) => {
    if (!(isInLengthLimit(carName, 5) && isValidString(carName))) {
      throw new Error(
        '[ERROR] 자동차 이름들은 각각 1~5자만 입력가능하고 자동차 이름들은 쉼표(,)로 구분지으세요. 예시) pobi,crong,honux\n'
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
