import OPT from '../constant/options.js';
import Car from './Car.js';

class CarGame {
  #tryCount;

  #carList = [];

  setCarNames(carNames) {
    carNames.forEach((carName) => {
      this.#carList.push(new Car(carName));
    });
  }

  setTryCount(tryCount) {
    this.#tryCount = tryCount;
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
