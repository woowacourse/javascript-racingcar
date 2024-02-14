import Car from '../domain/Car.js';

class CarService {
  #cars;
  #moveCount;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  #racing() {
    return this.#cars.map((car) => car.tryMove());
  }

  setMoveCount(moveCount) {
    this.#moveCount = moveCount;
  }

  startRacing() {
    return Array.from({ length: this.#moveCount }).map(() => this.#racing());
  }
}

export default CarService;
