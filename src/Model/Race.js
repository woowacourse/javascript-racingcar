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
}

module.exports = Race;
