const { Car } = require("./Car");
const { randomGenerator } = require("./randomGenerator");

class Service {
  #cars;

  constructor(names) {
    this.#cars = Array.from(
      { length: names.length },
      (_, index) => new Car(names[index])
    );
  }

  getMovingLog(cnt) {
    // const logOfEachRound = Array.from({ length: cnt }, () => );
    for (let i = 0; i < cnt; i++) {
      this.#cars.forEach((car) => {
        const canMove = randomGenerator() >= 4;
        if (canMove) car.move();
      });
    }
    const { name, movingLog } = this.#cars.getCarInfo();
  }
}

module.exports = { Service };
