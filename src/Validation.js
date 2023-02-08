const Console = require('./utils/Console');

const Validation = {
  validateCarName(carNames) {
    this.validateCarNameLength(carNames);
    this.validateCarNameDuplicated(carNames);
    this.validateIsRace(carNames);
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

  validateIsRace(carNames) {
    if (carNames.length < 2) {
      Console.print('2대 이상의 자동차 이름을 입력해주세요.');
      throw new Error();
    }
  },

  validateTryCount(tryCount) {
    this.validateNotANumber(tryCount);
    this.validateRaceCount(tryCount);
  },

  validateNotANumber(tryCount) {
    if (isNaN(tryCount)) {
      Console.print('시도 횟수는 숫자를 입력해주세요.');
      throw new Error();
    }
  },

  validateRaceCount(tryCount) {
    if (tryCount < 1) {
      Console.print('시도 횟수는 1회 이상이어야 합니다.');
      throw new Error();
    }
  },
};

module.exports = Validation;
