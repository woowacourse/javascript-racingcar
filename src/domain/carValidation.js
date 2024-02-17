import SETTING from "../constants/Setting.js";
import REGEXP from "../constants/RegExp.js";
import ERROR from "../constants/Error.js";

export const carValidation = {
  validateCarNameLength(carName) {
    if (
      carName.length < SETTING.minCarNameLength ||
      carName.length > SETTING.maxCarNameLength
    ) {
      throw new Error(ERROR.carNameLength);
    }
  },

  validateCarNameType(carName) {
    if (!REGEXP.carName.test(carName)) {
      throw new Error(ERROR.carNameType);
    }
  },

  validateCarName(carName) {
    this.validateCarNameLength(carName);
    this.validateCarNameType(carName);
  },

  validateCarNameRange(carNameList) {
    if (
      carNameList.length < SETTING.minCarCount ||
      carNameList.length > SETTING.maxCarCount
    ) {
      throw new Error(ERROR.carNameRange);
    }
  },

  validateCarNameDuplicated(carNameList) {
    if (carNameList.length !== new Set(carNameList).size) {
      throw new Error(ERROR.carNameDuplicated);
    }
  },

  validateCarNameArray(carNameList) {
    this.validateCarNameRange(carNameList);
    this.validateCarNameDuplicated(carNameList);
  },
};
