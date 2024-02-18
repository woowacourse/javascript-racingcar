import OPT from '../constant/options.js';
import Cars from './Cars.js';

class CarGame {
  #cars;

  #tryCount;

  constructor() {
    this.#cars = new Cars();
  }

  setCars(carNames) {
    this.#cars.makeCars(carNames);
  }

  setTryCount(tryCount) {
    this.#tryCount = tryCount;
  }

  getTryCount() {
    return this.#tryCount;
  }

  moveCars() {
    this.#cars.cars.forEach((car) => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber >= OPT.CAR.leastMoveCondition) {
        car.move();
      }
    });
  }

  getCurrentLocation() {
    const carInfos = this.#cars.cars.map((car) => ({
      name: car.getName(),
      location: car.getLocation()
    }));

    return carInfos;
  }

  findWinners() {
    const maxLocation = this.findMaxLocation();

    const winners = this.#cars.cars
      .filter((car) => car.getLocation() === maxLocation)
      .map((car) => car.getName());

    return winners;
  }

  findMaxLocation() {
    return Math.max(...this.#cars.cars.map((car) => car.getLocation()));
  }
}

export default CarGame;
