import { Validator } from './Validator.js';

export default class ScoreBoard {
  board = new Map();

  constructor(carNames) {
    Validator.validateCarNames(carNames);
    this.initializeScoreBoard(carNames);
  }

  initializeScoreBoard(carNames) {
    carNames.forEach((car) => {
      this.board.set(car, 0);
    });
  }

  getScoreBoard() {
    return this.board;
  }
}
