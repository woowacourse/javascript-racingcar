import Car from './Car';

class GameManager {
  #cars = [];

  addCars(carNames) {
    carNames.split(',').forEach((carName) => this.#cars.push(new Car(carName)));
  }
}

export default GameManager;
