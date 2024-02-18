import OPT from '../constant/options.js';
import { ERROR } from '../constant/strings.js';
import Car from './Car.js';

class CarGame {
  #tryCount;

  #carList = [];

  setCars(carNames) {
    this.#validateCarNamesMulti(carNames);

    carNames.reduce((carList, name) => {
      this.#validateCarNamesLength(name);
      carList.push(new Car(name));
      return carList;
    }, this.#carList);
  }

  // eslint-disable-next-line class-methods-use-this
  #validateCarNamesLength(carName) {
    if (carName.length > OPT.CAR_NAME_MAX_LENGTH) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }
  }

  #validateCarNamesMulti(carNames) {
    this.validMulti = new Set(new Set(carNames)).size === carNames.length;

    if (!this.validMulti) {
      throw new Error(ERROR.isNotUnique);
    }
  }

  setTryCount(tryCount) {
    this.#validateTryCount(tryCount);
    this.#tryCount = tryCount;
  }

  // eslint-disable-next-line class-methods-use-this
  #validateTryCount(tryCount) {
    if (!Number.isInteger(tryCount)) {
      throw new Error(ERROR.TRY_COUNT_NUMBER);
    }
    if (tryCount < 1) {
      throw new Error(ERROR.TRY_COUNT_MIN);
    }
  }

  getTryCount() {
    return this.#tryCount;
  }

  moveCars() {
    this.#carList.forEach((car) => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber >= OPT.CAR.leastMoveCondition) {
        car.move();
      }
    });
  }

  getCurrentLocation() {
    const carInfos = this.#carList.map((car) => ({
      name: car.getName(),
      location: car.getLocation()
    }));

    return carInfos;
  }

  findWinners() {
    const maxLocation = this.findMaxLocation();

    const winners = this.#carList
      .filter((car) => car.getLocation() === maxLocation)
      .map((car) => car.getName());

    return winners;
  }

  findMaxLocation() {
    return Math.max(...this.#carList.map((car) => car.getLocation()));
  }
}

export default CarGame;
