import Car from '../domain/Car';
import { ERROR_MESSAGE, NUMBERS } from '../constants/constants';
import RandomNumberGenerator from '../utils/RandomNumberGenerator';
class Cars {
  #carList;
  constructor(carNameArray = []) {
    this.#carList = carNameArray.map((name) => new Car(name));
  }

  moveAllCars() {
    this.#carList.forEach((car) => {
      const randomValue = RandomNumberGenerator.pickRandomNumber();
      car.move(randomValue);
    });
  }

  getEachStepString() {
    return this.#carList.reduce((pre, cur) => {
      return pre + cur.getDistanceString();
    }, '');
  }

  findWinners() {
    const maxDistance = Math.max(
      ...this.#carList.map((car) => car.getDistance())
    );
    return this.#carList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  }

  static carNamesValidate(carNames = []) {
    carNames.forEach((carName) => {
      if (
        carName.length < NUMBERS.CAR_NAME_MINIMUM_LENGTH ||
        carName.length > NUMBERS.CAR_NAME_MAXIMUM_LENGTH
      ) {
        throw new Error(
          ERROR_MESSAGE.CAR_NAME_INPUT_ERROR.NOT_IN_RANGE
        );
      }
    });
  }

  static tryCountValidate(tryCountString = '') {
    if (
      !Number.isInteger(Number(tryCountString)) ||
      Number(tryCountString) < NUMBERS.TRY_COUNT_MINIMUM_COUNT
    ) {
      throw new Error(
        ERROR_MESSAGE.TRY_COUNT_INPUT_ERROR.SHOULD_BE_POSITIVE
      );
    }
  }
}

export default Cars;
