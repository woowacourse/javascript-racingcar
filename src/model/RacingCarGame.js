const RacingScoreMap = require("./RacingScoreMap");

class RacingCarGame {
  #numberOfTrial;
  #racingCarMap;

  constructor(carList, totalTrial) {
    if ((!Array.isArray(carList)) || isNaN(totalTrial)) {
      throw new Error(`type error.`)
    } 
    
    this.#RacingCarMap = new RacingScoreMap(carList);
    this.totalTrial = totalTrial;
  }
}

module.exports = RacingCarGame;
