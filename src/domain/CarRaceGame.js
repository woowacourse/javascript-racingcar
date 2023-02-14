class CarRaceGame {
  #cars;

  #carDistances;

  setCarNames(cars) {
    this.#cars = cars;
    this.#carDistances = Array(this.#cars.length).fill(0);
  }

  getCarNames() {
    return this.#cars;
  }

  updateRace(carRaceResult) {
    const newDistances = this.#carDistances;
    for (let i = 0; i < this.#carDistances.length; i += 1) {
      newDistances[i] += carRaceResult[i];
    }
    return newDistances;
  }

  judgeWinners() {
    const winners = [];
    const maxDistance = Math.max(...this.#carDistances);
    for (let i = 0; i < this.#carDistances.length; i += 1) {
      if (this.#carDistances[i] === maxDistance) {
        winners.push(this.#cars[i]);
      }
    }
    return winners.join(", ");
  }
}

module.exports = CarRaceGame;
