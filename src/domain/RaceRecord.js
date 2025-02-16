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
      .map(([raceCarName, result]) => {
        return `${raceCarName} : ${result[step - 1]}`;
      })
      .join("\n");
  }
}

export default RaceRecord;
