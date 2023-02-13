const { ERROR_MESSAGE } = require("./constants/message");

const inputValidator = {
  MIN_CAR_NAME_LENGTH: 1,
  MAX_CAR_NAME_LENGTH: 5,

  validateCarNameList(carNameList) {
    if (this.hasCarNameListEmpty(carNameList)) {
      throw new Error(ERROR_MESSAGE.carNameEmpty)
    }

    if (!this.isCarNameListInRange(carNameList)) {
      throw new Error(ERROR_MESSAGE.carNameListInRange);
    }

    if (!this.isCarNameListNotDuplicated(carNameList)) {
      throw new Error(ERROR_MESSAGE.carNameListDuplicated);
    }
  },

  validateNumberOfTrials (numberOfTrials) {
    if (isNaN(numberOfTrials)) {
      throw new Error(ERROR_MESSAGE.numberOfTrials)
    }
  },

  hasCarNameListEmpty (carNameList) {
    return carNameList.some((carName) => carName.length === 0);
  },

  isCarNameListInRange (carNameList) {
    return carNameList.every((carName) => (carName.length >= this.MIN_CAR_NAME_LENGTH)  
    && (carName.length <= this.MAX_CAR_NAME_LENGTH));
    
  },

  isCarNameListNotDuplicated (carNameList) {
    return new Set(carNameList).size === carNameList.length;
  }
}

module.exports = inputValidator;