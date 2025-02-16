export default class Winners {
  constructor(cars) {
    this.cars = cars;
  }

  getWinners() {
    const max = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars.filter((car) => car.position === max);

    return winners.map((winner) => winner.name);
  }
}
