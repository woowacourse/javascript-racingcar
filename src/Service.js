const { Car } = require("./Car");
const { GAME_VALUE } = require("./constants");
const { randomGenerator } = require("./randomGenerator");

class Service {
  #cars;

  constructor(names) {
    this.#cars = names.map((name) => new Car(name));
  }

  getmoveCnt() {
    const roundLog = {};

    this.#cars.forEach((car) => {
      this.decideMove(car);
      const { name, moveCnt } = car.getCarInfo();
      roundLog[name] = moveCnt;
    });

    return roundLog;
  }

  decideMove(car) {
    const randomNumber = randomGenerator.generateNumber();
    if (randomNumber >= GAME_VALUE.MOVING_BOUNDARY_VALUE) return car.move();
  }

  getWinners() {
    const cars = this.#cars.map((car) => car.getCarInfo());
    const max = cars.sort((a, b) => b.moveCnt - a.moveCnt)[0].moveCnt;
    const winner = cars
      .filter((car) => car.moveCnt === max)
      .map((car) => car.name);
    return winner;
  }
}

module.exports = { Service };
