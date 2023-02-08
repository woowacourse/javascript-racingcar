const MovingDecider = require('../utils/MovingDecider');
const RandomNumberGenerator = require('../utils/RandomNumberGenerator');

class RacingCarGame {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  moveCars() {
    const d = MovingDecider.decide(
      this.#cars.length,
      RandomNumberGenerator.generate
    );
    this.#cars.forEach((car, i) => {
      if (!d[i]) return;
      car.move();
    });
  }

  getCarsInfo() {
    return new Map(this.#cars.map((car) => car.getInfo()));
  }

  getWinner() {
    const carsInfo = this.getCarsInfo();
    const max = Math.max(...carsInfo.values());
    const winners = [...carsInfo.entries()]
      .filter((carInfo) => carInfo[1] === max)
      .map((c) => c[0]);
    return winners;
  }
}

module.exports = RacingCarGame;
