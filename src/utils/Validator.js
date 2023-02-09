const { ERROR_MESSAGE } = require('../constants/message');

class Validator {
  static checkCarName(carNames) {
    const characterReg = /^([,A-Za-z가-힣])+$/;
    const separatorReg = /([A-Za-z가-힣])+(,([A-Za-z가-힣])+)+/;
    if (!characterReg.test(carNames)) {
      throw new Error(ERROR_MESSAGE.nameCharacter);
    }
    if (!separatorReg.test(carNames)) {
      throw new Error(ERROR_MESSAGE.nameSeparator);
    }
  }

  static checkMovingCount(movingCount) {
    const numberReg = /^[1-9][0-9]*$/;
    if (!numberReg.test(movingCount)) {
      throw new Error(ERROR_MESSAGE.movingCount);
    }
  }
}

module.exports = Validator;
