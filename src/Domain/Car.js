const { MOVE_FORWARD, FLAG, NOT_MOVED } = require("../constants");

class Car {
  #raceResult;
  constructor(raceResult) {
    this.#raceResult = this.convertResults(raceResult);
  }

  convertResults(race) {
    return race.map((step) => (step >= FLAG ? MOVE_FORWARD : NOT_MOVED));
  }

  getRaceResult() {
    return this.#raceResult;
  }
}

module.exports = Car;
