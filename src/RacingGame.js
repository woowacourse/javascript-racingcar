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
  }
}

module.exports = RacingGame;
