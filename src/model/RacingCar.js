import Car from './Car.js';

import { pickRandomNumber } from '../util/index.js';
import { RULES } from '../constants/index.js';
import { validateCarNames, validateRacingCount } from './validation.js';

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

  getCarNameList() {
    return this.getCarList().map((car) => car.getName());
  }

  getMaxDistance() {
    return Math.max(...this.getCarList().map((car) => car.getDistance()));
  }

  getWinnerList(maxDistance) {
    return this.getCarList()
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  }

  setCarList(carNamesList) {
    validateCarNames(carNamesList);
    this.carList = carNamesList.map((carName) => new Car(carName));
  }

  setRacingCount(racingCount) {
    validateRacingCount(racingCount);
    this.racingCount = racingCount;
  }

  resetStatus() {
    this.carList = [];
    this.racingCount = 0;
  }

  tryMoveRacingCarList() {
    const movedRacingCarList = [];

    this.getCarList().forEach((car, index) => {
      const randomNumber = pickRandomNumber(RULES.RANDOM_MIN_NUMBER, RULES.RANDOM_MAX_NUMBER);

      if (randomNumber >= RULES.MOVE_CONDITION_NUMBER) {
        car.moveForward();
        movedRacingCarList.push(index);
      }
    });

    return movedRacingCarList;
  }
}

export default RacingCar;
