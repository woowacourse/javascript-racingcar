const { REGEX } = require('../constant/regex');

class Validate {
  static checkCarName(carName) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 이름은 5자 이하여야 합니다.');
    }

    if (!(REGEX.KOREAN.test(carName) || REGEX.ENGLISH.test(carName))) {
      throw new Error('[ERROR] 문자만 입력해야 합니다.');
    }
  }

  static checkTrial(trial) {
    if (!REGEX.NUMBER.test(trial)) {
      throw new Error('[ERROR] 숫자만 입력해야 합니다.');
    }
  }
}

module.exports = Validate;
