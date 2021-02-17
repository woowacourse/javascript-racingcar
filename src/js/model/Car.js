import { MIN_NUMBER, MAX_NUMBER, MOVE_BOUNDED_NUMBER } from '../util/constants.js';
import { getRandomNumber } from '../util/general.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.movesPerTurn = [];
  }

  recordMoves(tryCount) {
    for (let i = 0; i < tryCount; i++) {
      const isMove = getRandomNumber({ min: MIN_NUMBER, max: MAX_NUMBER }) >= MOVE_BOUNDED_NUMBER;
      this.movesPerTurn = [...this.movesPerTurn, isMove];
    }
  }

  getScore() {
    return this.movesPerTurn.filter((isMove) => isMove).length;
  }

  getScoreBy(turn) {
    return this.movesPerTurn.filter((isMove, index) => index < turn && isMove).length;
  }
}
