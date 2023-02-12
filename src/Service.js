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
    return this.#cars.reduce((roundLog, car) => {
      const randomNumber = randomGenerator();
      car.move(randomNumber);

      const { name, position } = car.getCarInfo();
      roundLog[name] = position;
      return roundLog;
    }, {});
  }

  getWinners() {
    const carsInfo = Array.from({ length: this.#cars.length }, (_, index) =>
      this.#cars[index].getCarInfo()
    );
    const max = Math.max(...carsInfo.map((carInfo) => carInfo.position));

    return carsInfo
      .filter((car) => car.position === max)
      .map(({ name }) => name);
  }
}

module.exports = { Service };
