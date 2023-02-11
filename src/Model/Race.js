const Random = require("../utils/Random");
const { MOVE_FORWARD, FLAG, NOT_MOVED } = require("../constants");

class Race {
  #carNames;
  #countOfTrial;
  #currentRace = [];

  constructor(carNames, countOfTrial) {
    this.#carNames = carNames;
    this.#countOfTrial = countOfTrial;
  }

  start() {
    while (true) {
      const race = this.convertResults(
        Random.makeRandomNumbers(this.#countOfTrial)
      );
      this.#currentRace.push(race);
      if (this.#carNames.length === this.#currentRace.length) break;
    }
    return this.#currentRace;
  }

  convertResults(race) {
    return race.map((step) => (step >= FLAG ? MOVE_FORWARD : NOT_MOVED));
  }

  makeResult() {
    const distanceArray = this.#currentRace.map(
      (race) => race.filter((el) => el === MOVE_FORWARD).length
    );
    const maxDistance = Math.max(...distanceArray);
    const winners = distanceArray.reduce((arr, distance, index) => {
      if (distance === maxDistance) arr.push(this.#carNames[index]);
      return arr;
    }, []);
    return winners;
  }
}

module.exports = Race;
