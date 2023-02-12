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
    this.#carNames.map(() => {
      const race = this.convertResults(
        Random.makeRandomNumbers(this.#countOfTrial)
      );
      this.#currentRace = [...this.#currentRace, race];
    });

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
      return distance === maxDistance ? [...arr, this.#carNames[index]] : arr;
    }, []);
    return winners;
  }
}

module.exports = Race;
