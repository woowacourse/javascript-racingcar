import { ERROR_MESSAGE, NUMBERS } from '../constants';

const Validation = {
  carNamesArrayValidate(carNamesArray = []) {
    carNamesArray.forEach((carName) => {
      if (
        carName.length < NUMBERS.CAR_NAME_MINIMUM_LENGTH ||
        carName.length > NUMBERS.CAR_NAME_MAXIMUM_LENGTH
      ) {
        throw new Error(
          ERROR_MESSAGE.CAR_NAME_INPUT_ERROR.NOT_IN_RANGE
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
        ERROR_MESSAGE.TRY_COUNT_INPUT_ERROR.SHOULD_BE_POSITIVE
      );
    }
  },
};

export default Validation;
