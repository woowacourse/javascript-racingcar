import GAME_CONDITION from '../constants/configs/gameCondition.js';
import RANDOM_CAR_NAME_CONFIG from '../constants/configs/randomCarNameConfig.js';

export default class ScoreBoard {
  #initializedScoreBoard = new Map();
  #randomUserNameCount = 1;

  constructor(carNames) {
    this.#initializeScoreBoard(carNames);
  }

  #initializeScoreBoard(carNames) {
    carNames.forEach((carName) => {
      carName = carName.length
        ? carName
        : `${RANDOM_CAR_NAME_CONFIG.DEFAULT}${this.#randomUserNameCount++}`;
      this.#initializedScoreBoard.set(carName, GAME_CONDITION.INITIALIZED_SCORE);
    });
  }

  getScoreBoard() {
    return this.#initializedScoreBoard;
  }
}
