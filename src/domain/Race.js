const Random = require('../utils/Random');
const { MOVE_FORWARD, FLAG, NOT_MOVED } = require('../constants');

class Race {
  #carNames;
  #tryCount;
  #currentRace = [];
  constructor(carNames, tryCount) {
    this.#carNames = carNames;
    this.#tryCount = tryCount;
  }

  start() {
    this.#currentRace = this.#carNames.map(() => {
      const race = this.convertResults(
        Random.generateRandomNumbers(this.#tryCount)
      );
      return race;
    });
    return this.#currentRace;
  }

  convertResults(race) {
    const convertedRace = race.map((step) => {
      return step >= FLAG ? MOVE_FORWARD : NOT_MOVED;
    });
    return convertedRace;
  }

  makeResult() {
    const distanceArray = this.#currentRace.map((race) => {
      return race.filter((el) => el === MOVE_FORWARD).length;
    });
    const maxDistance = Math.max(...distanceArray);
    const winner = distanceArray.reduce((arr, distance, index) => {
      if (distance === maxDistance) return [...arr, this.#carNames[index]];
      return arr;
    }, []);
    return winner;
  }
}

module.exports = Race;
