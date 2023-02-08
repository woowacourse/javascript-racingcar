const { ERROR_MESSAGE } = require('../constants/message');

class Validator {
  static checkCarName(carNames) {
    const character = /^([,A-Za-z가-힣])+$/;
    const separator = /([A-Za-z가-힣])+(,([A-Za-z가-힣])+)+/;
    if (!character.test(carNames)) throw new Error(ERROR_MESSAGE.nameCharacter);
    if (!separator.test(carNames)) throw new Error(ERROR_MESSAGE.nameSeparator);
  }
}

module.exports = Validator;
