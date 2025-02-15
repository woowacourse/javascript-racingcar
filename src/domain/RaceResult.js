class RaceResult {
  constructor(cars) {
    this.cars = cars;
  }

  determineWinners() {
    const carsPosition = this.cars.map((car) => car.position);

    const maxPosition = Math.max(...carsPosition);

    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    return winners;
  }
}
export default RaceResult;
