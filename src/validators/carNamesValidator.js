import { ERROR_MESSAGES } from '../constants/car-race';
import InvalidInputException from '../exceptions/InvalidInputException';

const carNamesValidator = {
  isUnique(carNames) {
    const carNamesSet = new Set(carNames);

    if (carNames.length !== carNamesSet.size) {
      throw new InvalidInputException(ERROR_MESSAGES.carNameUniqueness);
    }
  },

  isValidLength(carNames) {
    if (carNames.some((name) => name.length < 1 || name.length > 5)) {
      throw new InvalidInputException(ERROR_MESSAGES.carNameLength);
    }
  },

  validate(carNames) {
    const carNamesArray = carNames.split(',').map((name) => name.trim());
    this.isValidLength(carNamesArray);
    this.isUnique(carNamesArray);
  },
};

export default carNamesValidator;
