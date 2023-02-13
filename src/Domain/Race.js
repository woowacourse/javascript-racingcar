const Random = require("../utils/Random");
const Car = require("../Domain/Car");
const { MOVE_FORWARD } = require("../constants");

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
      const race = Random.makeRandomNumbers(this.#countOfTrial);
      const car = new Car(race);
      this.#currentRace = [...this.#currentRace, car.getRaceResult()];
    });
    return this.#currentRace;
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
