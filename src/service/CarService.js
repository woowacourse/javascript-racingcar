import Car from '../domain/Car.js';

class CarService {
  #cars;
  #moveCount;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  setMoveCount(moveCount) {
    this.#moveCount = moveCount;
  }
}

export default CarService;
