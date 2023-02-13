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

  moveCar() {
    this.#cars.forEach((car) => {
      car.move(this.#tryCount);
    });
  }

  getCarsStatus() {
    return {
      tryCount: this.#tryCount,
      carsStatus: this.#cars.map((car) => car.getStatus()),
    };
  }
}

export default GameManager;
