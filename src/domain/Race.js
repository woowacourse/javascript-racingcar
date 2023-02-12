const Random = require('../utils/Random');
const { MOVE_FORWARD } = require('../constants');
const Car = require('./Car');

class Race {
  #carNames;
  #tryCount;
  #currentRace = [];
  constructor(carNames, tryCount) {
    this.#carNames = carNames;
    this.#tryCount = tryCount;
  }

  start() {
    this.#currentRace = this.#carNames.map((carName) => {
      const car = new Car(carName);
      const race = Random.generateRandomNumbers(this.#tryCount);
      const convertedRace = race.map((step) => car.move(step));
      return convertedRace;
    });
    return this.#currentRace;
  }

  makeResult() {
    const distanceArray = this.#currentRace.map(
      (race) => race.filter((el) => el === MOVE_FORWARD).length
    );
    const maxDistance = Math.max(...distanceArray);
    const winners = distanceArray.reduce((arr, distance, index) => {
      if (distance === maxDistance) return [...arr, this.#carNames[index]];
      return arr;
    }, []);
    return winners;
  }
}

module.exports = Race;
