import Car from './Car';

class GameManager {
  #cars = [];
  #tryCount;

  addCars(carNames) {
    carNames.split(',').forEach((carName) => this.#cars.push(new Car(carName)));
  }

  saveTryCount(tryCount) {
    this.#tryCount(tryCount);
  }
}

export default GameManager;
