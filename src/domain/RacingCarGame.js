class RacingCarGame {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  moveCars(carsMovingSuccesses) {
    this.#cars.forEach((car, index) => {
      if (carsMovingSuccesses[index]) car.move();
    });
  }

  getCarsInfo() {
    return this.#cars.map((car) => car.getInfo());
  }

  getWinner() {
    const carsInfo = this.getCarsInfo();
    const maxDistance = Math.max(...carsInfo.map((carInfo) => carInfo.distance));
    return carsInfo.filter(({ distance }) => distance === maxDistance).map(({ name }) => name);
  }

  getCountOfCars() {
    return this.#cars.length;
  }
}

module.exports = RacingCarGame;
