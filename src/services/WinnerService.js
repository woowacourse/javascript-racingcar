class WinnerService {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  findWinners() {
    const maxPosition = Math.max(...this.#cars.map(car => car['position']));
    return this.#cars.filter(car => car['position'] === maxPosition).map(car => car['name']);
  }
}

export default WinnerService;
