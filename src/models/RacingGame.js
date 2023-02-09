const Car = require('./Car');

class RacingGame {
  #cars = [];

  constructor(names) {
    this.#cars = names.map(name => new Car(name));
  }

  #moveAll() {
    this.#cars.forEach(car => car.move());
  }

  race() {
    this.#moveAll();
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const max = Math.max(...this.#cars.map(car => car.getPosition()));
    const winners = this.#cars
      .filter(car => car.getPosition() === max)
      .map(car => car.getName());

    return winners;
  }
}

module.exports = RacingGame;
