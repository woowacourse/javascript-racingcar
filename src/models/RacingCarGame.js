const GAME_RULE = require('../constants/gameRule');
const Random = require('../utils/Random');

class RacingCarGame {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  moveCars() {
    const carsMovingSuccesses = this.getCarsMovingSuccesses();
    this.#cars.forEach((car, index) => {
      if (carsMovingSuccesses[index]) car.move();
    });
  }

  getCarsMovingSuccesses() {
    return Array.from(
      { length: this.#cars.length },
      () =>
        Random.pickNumberInRange(
          GAME_RULE.RANDOM_LOWER_INCLUSIVE,
          GAME_RULE.RANDOM_UPPER_INCLUSIVE,
        ) >= GAME_RULE.MOVING_CONDITION_NUMBER,
    );
  }

  getCarsInfo() {
    return this.#cars.map((car) => car.getInfo());
  }

  getWinner() {
    const carsInfo = this.getCarsInfo();
    const maxDistance = Math.max(...carsInfo.map((carInfo) => carInfo.distance));
    return carsInfo.filter(({ distance }) => distance === maxDistance).map(({ name }) => name);
  }
}

module.exports = RacingCarGame;
