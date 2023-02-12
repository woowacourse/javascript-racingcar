const RACE_MOVING_RULE = require("./constants/raceMovingRule");
const RandomNumberGenerator = require("./utils/Random");

class RacingScoreMap {
  #scoreMap;
  #resultByRound;

  constructor(carList) {
    this.#scoreMap = carList.reduce((scoreMap, car) => {
      const score = RACE_MOVING_RULE.startPosition;
      return scoreMap.set(car, score);
    }, new Map())
  }

  updateScoreOnce() {
    [...this.#scoreMap.keys()]
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