class RacingScoreMap {
  #scoreMap;

  constructor(carList) {
    this.#scoreMap = carList.reduce((scoreMap, car) => {
      const score = 0;
      scoreMap.set(car, score);
    }, new Map())
  }

}

module.exports = RacingScoreMap;