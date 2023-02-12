const RacingScoreMap = require("./RacingScoreMap");
const RandomNumberGenerator = require("./utils/Random");

class RacingCarGame {
  #numberOfTrial;
  #racingCarMap;

  constructor(carList, totalTrial) {
    if (carList.every((car) => typeof car === 'string') && isNaN(totalTrial)){
      throw new Error(`TypeError`)
    }

    this.#RacingCarMap = new RacingScoreMap(carList);
    this.totalTrial = totalTrial;
  }

  tryOnce () {
    RacingScoreMap.updateScoreOnce();
  }
  
}

module.exports = RacingCarGame;
