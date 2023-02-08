const Random = require('../utils/Random');

class Race {
  #carNames;
  #tryCount;
  #currentRace = [];
  constructor(carNames, tryCount) {
    this.#carNames = carNames;
    this.#tryCount = tryCount;
  }

  start() {
    while (true) {
      const race = Random.makeRandomNumbers(this.#tryCount);
      this.#currentRace.push(race);
      if (this.#carNames.length === this.#currentRace.length) break;
    }
  }

  makeResult() {
    const distanceArray = this.#currentRace.map((race) => {
      return race.filter((el) => el === 1).length;
    });
    const maxDistance = Math.max(...distanceArray);
    const winner = distanceArray.reduce((arr, distance, index) => {
      if (distance === maxDistance) arr.push(index);
      return arr;
    }, []);
    return winner;
  }
}

module.exports = Race;
