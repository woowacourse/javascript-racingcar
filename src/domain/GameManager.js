import Car from './Car.js';

class GameManager {
  #cars = [];
  #tryCount;

  addCars(carNames) {
    carNames.split(',').forEach((carName) => this.#cars.push(new Car(carName)));
  }

  saveTryCount(tryCount) {
    this.#tryCount = tryCount;
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

  getWinner() {
    const highestPosition = this.getHighestPosition();
    return this.#cars
      .map((car) => car.getWinnerName(highestPosition))
      .filter((car) => car);
  }

  getHighestPosition() {
    const carsPosition = this.#cars.map((car) => car.getFinalPosition());
    return Math.max(...carsPosition);
  }
}

export default GameManager;
