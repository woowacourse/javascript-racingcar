import { CAR_NAME_LIST_ERROR_MESSAGES } from '../../constants/Constants.js';
import runValidators from '../../utils/runValidators.js';
import throwError from '../../utils/throwError.js';
import IsValidCarNameList from '../isValid/isValidCarNameList.js';

const validateCarCount = (carNameList) => {
  if (!IsValidCarNameList.count(carNameList)) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.COUNT);
  }
};

const validateDuplicate = (carNameList) => {
  if (IsValidCarNameList.duplicate(carNameList)) {
    throwError(CAR_NAME_LIST_ERROR_MESSAGES.DUPLICATE_CAR_NAME);
  }
};

const validateCarNameList = (carNameList) =>
  runValidators([validateCarCount, validateDuplicate], carNameList);

export default validateCarNameList;
