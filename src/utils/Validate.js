const { REGEX } = require('../constant/regex');

class Validate {
  static checkCarName(carName) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 이름은 5자 이하여야 합니다.');
    }

    if (!(REGEX.korean.test(carName) || REGEX.english.test(carName))) {
      throw new Error('[ERROR] 문자만 입력해야 합니다.');
    }
  }
}

module.exports = Validate;
