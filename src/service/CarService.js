import Car from '../domain/Car.js';

class CarService {
  #cars;
  #moveCount;
  #maxMoveCount;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#maxMoveCount = 0;
  }

  #racing() {
    const cars = this.#cars.map((car) => car.tryMove());
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
    return this.#cars.map((car) => car.isWinner(this.#maxMoveCount)).filter((carName) => carName !== undefined);
  }
}

export default CarService;
