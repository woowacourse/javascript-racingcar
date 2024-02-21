import { ERROR_MESSAGES, RULES } from '../constants/car-race';
import InvalidInputException from '../exceptions/InvalidInputException';

const carNamesValidator = {
  isUnique(carNames) {
    const carNamesSet = new Set(carNames);
    return carNames.length !== carNamesSet.size;
  },

  validateUniqueness(carNames) {
    if (this.isUnique(carNames)) {
      throw new Error(ERROR_MESSAGES.carNameUniqueness);
    }
  },

  isValidLength(carNames) {
    return carNames.some(
      (name) =>
        name.length < RULES.minCarNameLength ||
        name.length > RULES.maxCarNameLength,
    );
  },

  validateLength(carNames) {
    if (this.isValidLength(carNames)) {
      throw new InvalidInputException(ERROR_MESSAGES.carNameLength);
    }
  },

  validate(carNames) {
    const carNamesArray = carNames.split(',').map((name) => name.trim());
    this.validateLength(carNamesArray);
    this.validateUniqueness(carNamesArray);
  },
};

export default carNamesValidator;
