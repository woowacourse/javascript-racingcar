class RacingCarGame {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  getCarCount() {
    return this.#cars.length;
  }

  moveCars(carMoveSuccesses) {
    this.#cars.forEach((car, index) => {
      if (carMoveSuccesses[index]) {
        car.move();
      }
    });
  }

  getCarsInfo() {
    return new Map(this.#cars.map((car) => car.getInfo()));
  }

  getWinner() {
    const carsInfo = this.getCarsInfo();
    const maxDistance = Math.max(...carsInfo.values());
    return [...carsInfo.entries()]
      .filter(([, distance]) => distance === maxDistance)
      .map(([name]) => name);
  }
}

module.exports = RacingCarGame;
