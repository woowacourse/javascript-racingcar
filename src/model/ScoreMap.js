const RACE_MOVING_RULE = require('./utils/constants/raceMovingRule');
const RandomNumberGenerator = require('./utils/RandomNumberGenerator');

class ScoreMap extends Map {
  constructor(carList) {
    super();
    carList.forEach((car) => {
      this.set(car, RACE_MOVING_RULE.startPosition);
    });
  }

  updateScoreOnce() {
    [...this.keys()].forEach(this.#updateMoving.bind(this));
  }

  #updateMoving(car) {
    const randomNumber = RandomNumberGenerator.between(
      RACE_MOVING_RULE.minPoint,
      RACE_MOVING_RULE.maxPoint
    );

    if (this.#determineCanMove(randomNumber)) {
      this.set(car, this.get(car) + RACE_MOVING_RULE.stepSize);
    }
  }

  getRoundResult() {
    return new Map(this);
  }

  getWinnerList() {
    const maxScore = Math.max(...this.values());

    return [...this.keys()].filter((car) => this.get(car) === maxScore);
  }

  #determineCanMove(randomNumber) {
    return randomNumber >= RACE_MOVING_RULE.criticalPoint;
  }
}

module.exports = ScoreMap;
