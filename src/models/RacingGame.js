const Car = require('./Car');

class RacingGame {
  #cars = [];

  constructor(names, tryCount) {
    this.#cars = names.map(name => new Car(name));

    this.race(tryCount);
  }

  race(tryCount) {
    for (let i = 0; i < tryCount; i++) this.moveAll();
  }

  moveAll() {
    this.#cars.forEach(car => car.move());
  }

  getWinners() {
    const winners = this.#cars
      .sort((a, b) => (a.position > b.position ? -1 : 1))
      .filter(car => this.#cars.position === car.position);

    return winners;
  }
}

module.exports = RacingGame;
