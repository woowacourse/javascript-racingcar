const Car = require("./Car");
const RandomNumberGenerator = require("./RandomNumberGenerator");

class RacingGame {
  #cars;
  #tryCount;

  constructor(carNames, tryCount) {
    const carNamesArray = carNames.split(",");
    this.#cars = carNamesArray.map((name) => new Car(name));
    this.#tryCount = tryCount;
  }

  moveOneTurn() {
    this.#cars.forEach((car) => {
      const randomNumber = RandomNumberGenerator.generate();
      car.move(randomNumber);
    });
    this.#tryCount -= 1;
  }

  isGameComplete() {
    return this.#tryCount === 0;
  }

  getCarsResultOfOneTurn() {
    return this.#cars.map((car) => ({ name: car.getName(), currentPosition: car.getCurrentPosition() }));
  }
}

module.exports = RacingGame;
