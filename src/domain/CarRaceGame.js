class CarRaceGame {
  #carNames;

  #carDistances;

  setCarNames(carNames) {
    this.#carNames = carNames;
    this.#carDistances = Array(this.#carNames.length).fill(0);
  }

  getCarNames() {
    return this.#carNames;
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
        winners.push(this.#carNames[i]);
      }
    }
    return winners.join(", ");
  }
}

module.exports = CarRaceGame;
