import Car from "./Car.js";
import RandomNumberGenerator from "../util/RandomNumberGenerator.js";

class RacingGame {
  #cars;
  #leftTryCount;

  constructor(carNames, leftTryCount) {
    const carNamesArray = carNames.split(",");
    this.#cars = carNamesArray.map((name) => new Car(name));
    this.#leftTryCount = leftTryCount;
  }

  raceOneTurn() {
    this.#cars.forEach((car) => {
      const randomNumber = RandomNumberGenerator.generate();
      car.move(randomNumber);
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
