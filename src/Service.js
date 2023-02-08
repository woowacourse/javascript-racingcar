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
    for (let round = 0; round < cnt; round++) {
      this.#cars.forEach((car) => {
        const canMove = randomGenerator() >= 4;
        if (canMove) {
          const { name, movingLog } = car.move();
        }
      });
    }
  }
}

module.exports = { Service };
