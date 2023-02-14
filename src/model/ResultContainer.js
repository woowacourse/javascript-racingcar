class ResultContainer {
  constructor(roundResultList, winnerList) {
    if (!Array.isArray(roundResultList) || !Array.isArray(winnerList)) {
      throw new Error('TypeError');
    }

    this.roundResultList = roundResultList;
    this.winnerList = winnerList;
  }
}

module.exports = ResultContainer;
