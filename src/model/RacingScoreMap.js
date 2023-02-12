const RACE_MOVING_RULE = require("./constants/raceMovingRule");
const RandomNumberGenerator = require("./utils/Random");

class RacingScoreMap {
  #scoreMap;

  constructor(carList) {
    this.#scoreMap = carList.reduce((scoreMap, car) => {
      const score = 0;
      scoreMap.set(car, score);
    }, new Map())
  }

  #updateScoreOnce() {
    this.#scoreMap
      .filter(() => this.#determineCanMove())
      .forEach((car) => {
        this.#scoreMap.set(car, this.#scoreMap.get(car) + 1);
      })
  }

  #determineCanMove() {
    return RandomNumberGenerator.between(RACE_MOVING_RULE.minPoint, RACE_MOVING_RULE.maxPoint) >= 4;
  }

}

module.exports = RacingScoreMap;