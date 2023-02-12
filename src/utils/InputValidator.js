const { REGEX, MAGIC_NUMBER } = require('../constant');

const InputValidator = {
  checkCarName(carName) {
    if (!isValidLength(carName)) {
      throw new Error('[ERROR] 이름은 5자 이하여야 합니다.');
    }

    if (!isCharacter(carName)) {
      throw new Error('[ERROR] 문자만 입력해야 합니다.');
    }
  },

  checkTrial(trial) {
    if (!isNumber(trial)) {
      throw new Error('[ERROR] 숫자만 입력해야 합니다.');
    }
  },
};

function isValidLength(input) {
  return input.length <= MAGIC_NUMBER.VALID_LENGTH_OF_NAME;
}

function isCharacter(input) {
  return REGEX.KOREAN_REGEX.test(input) || REGEX.ENGLISH_REGEX.test(input);
}

function isNumber(input) {
  return REGEX.NUMBER_REGEX.test(input);
}

module.exports = InputValidator;
