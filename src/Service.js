const { Car } = require('./Car');
const { randomGenerator } = require('./randomGenerator');

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
      const randomNumber = randomGenerator();
      car.move(randomNumber);
      const { name, distance } = car.getCarInfo();
      roundLog[name] = distance;
    });

    return roundLog;
  }

  getWinners() {
    const cars = Array.from({ length: this.#cars.length }, (_, index) =>
      this.#cars[index].getCarInfo()
    );
    const max = cars.sort((a, b) => b.distance - a.distance)[0].distance;
    const winner = cars
      .filter((car) => car.distance === max)
      .map(({ name }) => name);

    return winner;
  }
}

module.exports = { Service };
