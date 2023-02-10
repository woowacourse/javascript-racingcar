const { Car } = require("./Car");
const { GAME_VALUE } = require("./constants");
const { randomGenerator } = require("./randomGenerator");

class Service {
  #cars;

  constructor(names) {
    this.#cars = names.map((name) => new Car(name));
  }

  getMovingLog() {
    const roundLog = {};

    this.#cars.forEach((car) => {
      this.decideMove(car);
      const { name, movingLog } = car.getCarInfo();
      roundLog[name] = movingLog;
    });

    return roundLog;
  }
  decideMove(car) {
    const randomNumber = randomGenerator.generateNumber();
    if (randomNumber >= GAME_VALUE.MOVING_BOUNDARY_VALUE) return car.move();
  }
  getWinners() {
    const cars = this.#cars.map((car) => car.getCarInfo());
    const max = cars.sort((a, b) => b.movingLog - a.movingLog)[0].movingLog;
    const winner = cars
      .filter((car) => car.movingLog === max)
      .map((car) => car.name);
    return winner;
  }
}

module.exports = { Service };
