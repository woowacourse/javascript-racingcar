const ResultContainer = require('./ResultContainer');
const ScoreMap = require('./ScoreMap');

class RacingCarGame {
  #totalTrial;
  #scoreMap;
  #roundResultList;

  constructor(carList, totalTrial) {
    if (carList.some((car) => typeof car !== 'string') && isNaN(totalTrial)) {
      throw new Error(`TypeError`);
    }

    this.#scoreMap = new ScoreMap(carList);
    this.#roundResultList = [this.#scoreMap.getRoundResult()];
    this.#totalTrial = totalTrial;
  }

  getGameResult() {
    const roundResultList = [...this.#roundResultList];
    const winnerList = this.#scoreMap.getWinnerList();

    return new ResultContainer(roundResultList, winnerList);
  }

  play() {
    for (let i = 0; i < this.#totalTrial; i++) {
      this.#tryOnce();
    }
  }

  #tryOnce() {
    this.#scoreMap.updateScoreOnce();
    this.#addRoundResult(this.#scoreMap.getRoundResult());
  }

  #addRoundResult(roundResult) {
    this.#roundResultList.push(roundResult);
  }
}

module.exports = RacingCarGame;
