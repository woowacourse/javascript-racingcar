const Car = require('./Car');
const RandomNumberGenerator = require('../util/RandomNumberGenerator');

class RacingGame {
  #cars;
  #tryCount;

  constructor(carNames, tryCount) {
    const carNamesArray = carNames.split(',');
    this.#cars = carNamesArray.map((name) => new Car(name));
    this.#tryCount = tryCount;
  }

  raceOneTurn() {
    this.#cars.forEach((car) => {
      const randomNumber = RandomNumberGenerator.generate();
      this.moveCar(randomNumber, car);
    });
    this.#tryCount -= 1;
  }

  moveCar(randomNumber, car) {
    car.move(randomNumber);
  }

  isGameComplete() {
    return this.#tryCount === 0;
  }

  getAccumulatedDistancern() {
    return this.#cars.map((car) => ({
      name: car.getName(),
      currentDistance: car.getCurrentDistance(),
    }));
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
