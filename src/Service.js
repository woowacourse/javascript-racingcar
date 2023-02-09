const { Car } = require('./Car');

class Service {
  #cars;

  constructor(names) {
    this.#cars = Array.from(
      { length: names.length },
      (_, index) => new Car(names[index])
    );
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
    const cars = Array.from({ length: this.#cars.length }, (_, index) =>
      this.#cars[index].getCarInfo()
    );
    const max = cars.sort((a, b) => b.movingLog - a.movingLog)[0].movingLog;
    const winner = [];
    cars.forEach((car) => {
      if (car.movingLog === max) winner.push(car.name);
    });

    return winner;
  }
}

module.exports = { Service };
