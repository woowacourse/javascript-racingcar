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

  #validateCarNamesLength(carName) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5글자 이하만 가능합니다.');
    }
  }

  #validateCarNamesMulti(carNames) {
    this.validMulti = new Set(new Set(carNames)).size === carNames.length;

    if (!this.validMulti) {
      throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
    }
  }

  setTryCount(tryCount) {
    this.#validateTryCount(tryCount);
    this.#tryCount = tryCount;
  }

  #validateTryCount(tryCount) {
    if (!Number.isInteger(Number(tryCount))) {
      throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
    }
    if (tryCount < 1) {
      throw new Error('[ERROR] 1회 이상 시도해야합니다.');
    }
  }

  getTryCount() {
    return this.#tryCount;
  }

  moveCars() {
    this.#carList.forEach((car) => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber >= 4) {
        car.move();
      }
    });
  }

  // [{name: a, location: 1}, {}]
  getCurrentLocation() {
    let carInfos = [];

    this.#carList.forEach((car) => {
      carInfos.push({
        name: car.getName(),
        location: car.getLocation(),
      });
    });

    return carInfos;
  }

  findWinners() {
    const maxLocation = Math.max(
      ...this.#carList.map((car) => car.getLocation())
    );

    const winners = this.#carList
      .filter((car) => car.getLocation() === maxLocation)
      .map((car) => car.getName());

    return winners;
  }
}

export default CarGame;
