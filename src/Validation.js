const { Console } = require('@woowacourse/mission-utils');

const Validation = {
  validateCarName(carNames) {
    this.validateCarNameLength(carNames);
    this.validateCarNameDuplicated(carNames);
  },

  validateCarNameLength(carNames) {
    carNames.forEach((carName) => {
      if (carName.length <= 0 || carName.length > 5) {
        Console.print('자동차 이름은 1글자 이상 5글자 이하입니다.');
        throw new Error();
      }
    });
  },

  validateCarNameDuplicated(carNames) {
    const carSet = new Set(carNames);
    if (carNames.length !== carSet.size) {
      Console.print('자동차 이름은 중복되지 않아야 합니다.');
      throw new Error();
    }
  },
};

module.exports = Validation;
