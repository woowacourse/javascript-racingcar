const Car = require('../domain/Car.js');
const getRandomNumberInRange = require('../utils/getRandomNumberInRange.js');
const CONDITIONS = require('../constant/Conditions.js');

class CarService {
  #cars;
  #moveCount;
  #maxMoveCount;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#maxMoveCount = 0;
  }

  #racing() {
    const cars = this.#cars.map((car) => {
      const randomNumber = getRandomNumberInRange(CONDITIONS.minRandomNumberRange, CONDITIONS.maxRandomNumberRange);
      return car.tryMove(randomNumber);
    });

    this.#maxMoveCount = Math.max(...cars.map(({ distance }) => distance));

    return cars;
  }

  setMoveCount(moveCount) {
    this.#moveCount = moveCount;
  }

  startRacing() {
    return Array.from({ length: this.#moveCount }).map(() => this.#racing());
  }

  getRaceResult() {
    const winningCars = this.#cars.map((car) => car.isWinner(this.#maxMoveCount));
    return winningCars.filter((carName) => carName !== undefined);
  }
}

module.exports = CarService;
