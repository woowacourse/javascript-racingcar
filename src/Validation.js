import { ERROR_MESSAGE } from './constants/message';
import { NUMBERS } from './constants/number';

const Validation = {
  carNamesArrayValidate(carNamesArray = []) {
    carNamesArray.forEach((carName) => {
      if (
        carName.length < NUMBERS.CAR_NAME_MINIMUM_LENGTH ||
        carName.length > NUMBERS.CAR_NAME_MAXIMUM_LENGTH
      ) {
        throw new Error(
          ERROR_MESSAGE.CAR_NAME_INPUT_ERROR.CAR_NAME_IS_NOT_IN_RANGE
        );
      }
    });
  },

  tryCountValidate(tryCountString = '') {
    if (
      !Number.isInteger(Number(tryCountString)) ||
      Number(tryCountString) < NUMBERS.TRY_COUNT_MINIMUM_COUNT
    ) {
      throw new Error(
        ERROR_MESSAGE.TRY_COUNT_INPUT_ERROR.TRY_COUNT_IS_LESS_THAN_ZERO
      );
    }
  },
};

export default Validation;
