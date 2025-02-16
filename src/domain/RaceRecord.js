import { getLongestString } from "../util.js";

class RaceRecord {
  #record = {};

  constructor(names) {
    names.forEach((name) => (this.#record[name] = []));
  }

  recordStep(car) {
    this.#record[car.raceCarName].push(car.getPositionStatus());
  }

  toStringStep(step) {
    return Object.entries(this.#record)
      .map(([raceCarName, record]) => {
        return `${raceCarName} : ${record[step - 1]}`;
      })
      .join("\n");
  }

  #getLastPositions() {
    return Object.values(this.#record).map((arr) => arr.at(-1));
  }

  getWinner() {
    const longestString = getLongestString(...this.#getLastPositions());
    const winnerList = [];

    for (let raceCarName in this.#record) {
      if (this.#record[raceCarName].at(-1) === longestString) {
        winnerList.push(raceCarName);
      }
    }

    return winnerList;
  }
}

export default RaceRecord;
