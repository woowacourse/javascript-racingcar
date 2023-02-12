const MovingDecider = require('../utils/MovingDecider');
const RandomNumberGenerator = require('../utils/RandomNumberGenerator');

class RacingCarGame {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  moveCars() {
    const isMovable = MovingDecider.decide(this.#cars.length, RandomNumberGenerator.generate);
    this.#cars.forEach((car, index) => {
      if (!isMovable[index]) return;
      car.move();
    });
  }

  getCarsInfo() {
    return new Map(this.#cars.map((car) => car.getInfo()));
  }

  getWinner() {
    const carsInfo = this.getCarsInfo();
    const maxDistance = Math.max(...carsInfo.values());
    const winners = [...carsInfo.entries()]
      .filter(([, distance]) => distance === maxDistance)
      .map(([name]) => name);
    return winners;
  }
}

module.exports = RacingCarGame;
