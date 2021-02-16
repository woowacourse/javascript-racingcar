import { MIN_NUMBER, MAX_NUMBER, MOVE_BOUNDED_NUMBER } from '../util/constants.js';
import { getRandomNumber } from '../util/general.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.movesPerTurn = [];
  }

  recodeMoves(tryCount) {
    for (let i = 0; i < tryCount; i++) {
      const isMove = getRandomNumber({ min: MIN_NUMBER, max: MAX_NUMBER }) >= MOVE_BOUNDED_NUMBER;
      this.movesPerTurn = [...this.movesPerTurn, isMove];
    }
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
