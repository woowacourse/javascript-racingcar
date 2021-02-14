export default class Car {
  constructor(name) {
    this.name = name;
    this.movesPerTurn = [];
  }

  recodeMove(isMove) {
    this.movesPerTurn = [...this.movesPerTurn, isMove];
  }

  getScore() {
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
