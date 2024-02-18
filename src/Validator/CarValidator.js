import { CAR_CONSTANTS, ERROR_MESSAGES, SYMBOL } from '../Constants';
import { AppError } from '../utils';

const { NAME_LENGTH_RANGE } = CAR_CONSTANTS;
const { INVALID_NAME_LENGTH, DUPLICATED_NAME, INCLUDES_SPACE_NAME } = ERROR_MESSAGES;

const CarValidator = (() => {
  const checkNameLength = (carNames) => {
    const isOverLength = carNames.some(
      (carName) => carName.length > NAME_LENGTH_RANGE.max || carName.length < NAME_LENGTH_RANGE.min,
    );
    if (isOverLength) {
      throw new AppError(INVALID_NAME_LENGTH);
    }
  };

  const checkCarDuplicate = (carNames) => {
    if (carNames.length !== new Set([...carNames]).size) {
      throw new AppError(DUPLICATED_NAME);
    }
  };

  const checkIncludesSpace = (carNames) => {
    const someNameIncludesSpace = carNames.some((name) => name.includes(SYMBOL.SPACE));
    if (someNameIncludesSpace) {
      throw new AppError(INCLUDES_SPACE_NAME);
    }
  };

  return {
    checkCarName: (carNames) => {
      checkCarDuplicate(carNames);
      checkNameLength(carNames);
      checkIncludesSpace(carNames);
    },
  };
})();

export default CarValidator;
