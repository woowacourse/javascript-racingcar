const { Car } = require("./Car");

class Service {
  #cars;

  constructor(names) {
    this.#cars = names.map((name) => new Car(name));
  }

  getMovingLog() {
    const roundLog = {};

    this.#cars.forEach((car) => {
      car.move();
      const { name, movingLog } = car.getCarInfo();
      roundLog[name] = movingLog;
    });

    return roundLog;
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
