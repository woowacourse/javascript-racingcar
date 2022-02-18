import Car from './Car.js';
import { checkValidCarNames, checkValidRacingCount } from './validation.js';

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
    checkValidCarNames(carNamesList);
    this.carList = carNamesList.map((carName) => new Car(carName));
  }

  setRacingCount(racingCount) {
    checkValidRacingCount(racingCount);
    this.racingCount = racingCount;
  }

  resetStatus() {
    this.carList = [];
    this.racingCount = 0;
  }
}

export default RacingCar;
