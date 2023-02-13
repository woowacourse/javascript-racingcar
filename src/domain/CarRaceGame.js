class CarRaceGame {
  #carNames;
  #carDistances;

  createRaceUsingCarNames(carNames) {
    this.#carNames = carNames;
    this.#carDistances = Array(carNames.length).fill(0);
  }

  performRaceOnce(raceRoundResult) {
    raceRoundResult.forEach((increasingDistance, index) => {
      this.#carDistances[index] += increasingDistance;
    });
  }

  getCarCount() {
    return this.#carNames.length;
  }

  getRaceResult() {
    return { carNames: this.#carNames, carDistances: this.#carDistances };
  }

  getWinners() {
    const winners = [];
    const maxDistance = Math.max(...this.#carDistances);

    this.#carNames.forEach((currentCarName, index) => {
      if (this.#carDistances[index] === maxDistance) {
        winners.push(currentCarName);
      }
    });

    return winners;
  }
}

module.exports = CarRaceGame;
