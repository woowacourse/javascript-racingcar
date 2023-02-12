const RACE_MOVING_RULE = require("./constants/raceMovingRule");
const RandomNumberGenerator = require("./utils/Random");

class ScoreMap extends Map {
  constructor(carList) {
    super();
    carList.forEach((car) => {
      this.set(car, 1);
    })
  }

  updateScoreOnce() {
    [...this.keys()].forEach((car) => {
      const randomNumber = RandomNumberGenerator.between(RACE_MOVING_RULE.minPoint, RACE_MOVING_RULE.maxPoint);
      
      if (this.#determineCanMove(randomNumber)) {
        this.set(car, this.get(car) + 1);
      }
    })
  }

  getRoundResult() {
    return new Map(this);
  }

  getWinnerList() {
    const maxScore = Math.max(...this.values());
    
    return [...this.keys()].filter((car) => this.get(car) === maxScore);
  }

  #determineCanMove(randomNumber) {
    return randomNumber >= 4;
  }
}

module.exports = ScoreMap;