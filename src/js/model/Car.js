export default class Car {
  constructor(name) {
    this.name = name;
    this.movesPerTurn = [];
    this.score = 0;
  }

  recodeMove(isMove) {
    this.movesPerTurn = [...this.movesPerTurn, isMove];
  }

  getScore() {
    if (this.score) {
      return this.score;
    }

    return this.movesPerTurn.reduce(
      (accumulatedScore, isMove) => (isMove ? accumulatedScore + 1 : accumulatedScore),
      0
    );
  }

  getScoreWithTurn(turn) {
    let score = 0;

    for (let i = 0; i < turn; i++) {
      if (this.movesPerTurn[i]) {
        score = score + 1;
      }
    }

    return score;
  }
}
