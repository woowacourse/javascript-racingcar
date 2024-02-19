import GAME_CONDITION from '../constants/configs/gameCondition.js';

export default class ScoreBoard {
  #initializedScoreBoard = new Map();

  constructor(carNames) {
    this.#initializeScoreBoard(carNames);
  }

  #initializeScoreBoard(carNames) {
    carNames.forEach((carName) => {
      this.#initializedScoreBoard.set(carName, GAME_CONDITION.INITIALIZED_SCORE);
    });
  }

  getScoreBoard() {
    return this.#initializedScoreBoard;
  }
}
