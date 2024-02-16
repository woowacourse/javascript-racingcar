import CONSTANTS from '../../CONSTANTS';

const { numeric } = CONSTANTS;

class Validator {
  static validateCars(cars) {
    return (
      cars.every(
        name =>
          name.length >= numeric.CAR_NAME_LENGTH_LOWER &&
          name.length <= numeric.CAR_NAME_LENGTH_UPPER
      ) && cars.length === new Set(cars).size
    );
  }

  static validateTryCount(tryCount) {
    return /^[0-9]+$/.test(tryCount);
  }
}

export default Validator;
