export default class Winners {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  getWinners() {
    const max = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars.filter((car) => car.getPosition() === max);

    return winners.map((winner) => winner.getName());
  }
}
