import { CAR_NAME_LIST_ERROR_MESSAGES } from "../constants/Constants.js";
import runValidators from "../utils/runValidators.js";
import throwError from "../utils/throwError.js";

const checkEmptyInput = (carNameList) => {
  if (carNameList.length === 0) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.EMPTY_INPUT);
  }
};
const checkSingleCar = (carNameList) => {
  if ((carNameList.length = 1)) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.SINGLE_CAR_NAME);
  }
};

const checkEmptyValue = (carNameList) => {
  if (carNameList.some((carName) => carName.length === 0)) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.EMPTY_CAR_NAME);
  }
};

const checkDuplicate = (carNameList) => {
  const carNameListSet = new Set(carNameList);
  if (carNameListSet.size !== carNameList.length) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.DUPLICATE_CAR_NAME);
  }
};

const checkCarNameLength = (carNameList) => {
  carNameList.forEach((name) => {
    if (name.length > CAR_NAME_LENGTH_MAX) {
      throwError(CAR_NAME_LIST_ERROR_MESSAGES.NAME_LENGTH_EXCEEDED);
    }
  });
};

const validateCarNameList = (carNameList) => runValidators([checkEmptyInput, checkSingleCar, checkEmptyValue, checkDuplicate, checkCarNameLength], carNameList);

export default validateCarNameList;
