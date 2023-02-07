const { Console } = require('@woowacourse/mission-utils');

const Validation = {
  validateCarName(carNames) {
    this.validateCarNameLength(carNames);
  },
  validateCarNameLength(carNames) {
    carNames.forEach((carName) => {
      if (carName.length <= 0 || carName.length > 5) {
        Console.print('자동차 이름은 1글자 이상 5글자 이하입니다.');
        throw new Error();
      }
    });
  },
};

module.exports = Validation;
