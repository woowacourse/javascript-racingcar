const Car = require("./Car");
const RandomNumberGenerator = require("../util/RandomNumberGenerator");

class RacingGame {
  #cars;
  #tryCount;

  constructor(carNames, tryCount) {
    const carNamesArray = carNames.split(",");
    this.#cars = carNamesArray.map((name) => new Car(name));
    this.#tryCount = tryCount;
  }

  moveOneTurn() {
    this.#cars.forEach((car) => {
      const randomNumber = RandomNumberGenerator.generate();
      car.move(randomNumber);
    });
    this.#tryCount -= 1;
  }

  isGameComplete() {
    return this.#tryCount === 0;
  }

  getCarsResultOfOneTurn() {
    return this.#cars.map((car) => ({ name: car.getName(), currentDistance: car.getCurrentDistance() }));
  }

  #calculateWinners(car, winners, maxDistance) {
    if (car.getCurrentDistance() === maxDistance) winners.push(car.getName());
    if (car.getCurrentDistance() > maxDistance) {
      winners = [];
      winners.push(car.getName());
      maxDistance = car.getCurrentDistance();
    }
    return { newWinners: winners, newMaxDistance: maxDistance };
  }

  getWinners() {
    let winners = [];
    let maxDistance = 0;
    this.#cars.forEach((car) => {
      const { newWinners, newMaxDistance } = this.#calculateWinners(car, winners, maxDistance);
      winners = newWinners;
      maxDistance = newMaxDistance;
    });
    return winners;
  }
}

module.exports = RacingGame;
