const Random = require('../utils/Random');
const { MOVE_FORWARD } = require('../utils/constants');

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
    return this.#currentRace;
  }

  makeResult() {
    const distanceArray = this.#currentRace.map((race) => {
      return race.filter((el) => el === MOVE_FORWARD).length;
    });
    const maxDistance = Math.max(...distanceArray);
    const winner = distanceArray.reduce((arr, distance, index) => {
      if (distance === maxDistance) arr.push(this.#carNames[index]);
      return arr;
    }, []);
    return winner;
  }
}

module.exports = Race;
