class Cars {
  #cars;
  #winnerCarScore;
  #winnerCar;

  constructor(cars) {
    this.#cars = cars;
    this.#winnerCar = [];
    this.#winnerCarScore = 0;
  }

  getCars() {
    return this.#cars;
  }

  getWinnerCar() {
    return this.#winnerCar;
  }

  decideWinnerCar() {
    this.decideWinnerCarScore();
    this.#cars
      .filter((car) => car.getScore() === this.#winnerCarScore)
      .forEach((car) => {
        this.#winnerCar.push(car.getCarName());
      });
  }

  decideWinnerCarScore() {
    this.#cars.forEach((car) => {
      this.#winnerCarScore = Math.max(this.#winnerCarScore, car.getScore());
    });
  }
}

module.exports = Cars;
