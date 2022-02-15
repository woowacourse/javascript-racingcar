import { ERROR_MESSAGES } from '../constants/index.js';
import { isEmpty, isExceedLength, isNotNaturalNumber, isNotNumberType } from '../util/index.js';
import Car from './Car.js';

class RacingCar {
  constructor() {
    this.carList = [];
    this.racingCount = 0;
  }

  getCarList() {
    return this.carList;
  }

  getRacingCount() {
    return this.racingCount;
  }

  setCarList(carNamesList) {
    this.checkValidCarNames(carNamesList);
    this.carList = carNamesList.map((carName) => new Car(carName));
  }

  resetStatus() {
    this.carList = [];
    this.racingCount = 0;
  }

  checkValidCarNames(carNamesList) {
    if (carNamesList.some(isExceedLength)) {
      throw new Error(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH);
    }

    if (carNamesList.some(isEmpty)) {
      throw new Error(ERROR_MESSAGES.BLANK_CAR_NAME);
    }
  }

  setRacingCount(racingCount) {
    this.checkValidRacingCount(racingCount);
    this.racingCount = racingCount;
  }

  checkValidRacingCount(racingCount) {
    if (isNaN(racingCount)) {
      throw new Error(ERROR_MESSAGES.BLANK_RACING_COUNT);
    }

    if (isNotNumberType(racingCount)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER_TYPE);
    }

    if (isNotNaturalNumber(racingCount)) {
      throw new Error(ERROR_MESSAGES.NOT_NATURAL_NUMBER);
    }
  }
}

export default RacingCar;
