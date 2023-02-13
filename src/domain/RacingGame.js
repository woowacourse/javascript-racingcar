import Car from "./Car.js";
import RandomNumberGenerator from "../util/RandomNumberGenerator.js";
import Validator from "./Validator.js";

class RacingGame {
  #cars;
  #leftTryCount;

  constructor(carNames, tryCount) {
    const carNamesArray = carNames.split(",");
    this.#cars = carNamesArray.map((name) => new Car(name));

    Validator.validateTryCount(tryCount);
    this.#leftTryCount = tryCount;
  }

  raceOneTurn() {
    this.#cars.forEach((car) => {
      const randomNumber = RandomNumberGenerator.generate();
      if (randomNumber >= 4) car.move();
    });
    this.#leftTryCount -= 1;
  }

  isGameComplete() {
    return this.#leftTryCount === 0;
  }

  getCarsResultOfOneTurn() {
    return this.#cars.map((car) => ({ name: car.getName(), currentDistance: car.getCurrentDistance() }));
  }

  getWinners() {
    const maxDistance = Math.max(...this.#cars.map((car) => car.getCurrentDistance()));
    const winners = this.#cars.filter((car) => car.getCurrentDistance() === maxDistance).map((car) => car.getName());

    return winners;
  }
}

export default RacingGame;
