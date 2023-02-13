const Car = require('./Car');
const Utils = require('../utils/Utils');
const { StaticValue } = require('../constants/constants');

class RacingGame {
  #cars = [];

  constructor(carNames) {
    this.#cars = carNames.map((car) => new Car(car));
  }

  getCarsMovement() {
    const MOVEMENT = [];

    this.#cars.forEach((car) => {
      this.moveCar(car);

      MOVEMENT.push([car.getName(), car.getCurrentDistance()]);
    });

    return MOVEMENT;
  }

  getWinners() {
    const CARS_DISTANCE = this.#cars.map((car) => car.getCurrentDistance());
    const MAX_DISTANCE = Math.max(...CARS_DISTANCE);
    return this.#cars
      .filter((car) => car.getCurrentDistance() === MAX_DISTANCE)
      .map((car) => car.getName());
  }

  moveCar(car) {
    const RANDOM_NUMBER = Utils.generateRandomNumber();

    if (RANDOM_NUMBER >= StaticValue.MOVE_CONDITION) car.move();
  }
}

module.exports = RacingGame;
