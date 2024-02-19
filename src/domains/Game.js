import generateRandomNumberFromRange from '../utils/generateRandomNumberFromRange.js';
import GAME_CONDITION from '../constants/configs/gameCondition.js';

export default class Game {
  #scoreBoard;
  #attempt;
  #totalResult = [];

  constructor(scoreBoard, attempt) {
    this.#scoreBoard = scoreBoard;
    this.#attempt = attempt;
  }

  getGameResult() {
    for (let i = 0; i < this.#attempt; i++) {
      this.rotateRound();
      const currentRoundResult = new Map(this.#scoreBoard);
      this.#totalResult.push(Object.fromEntries(currentRoundResult));
    }
    return this.#totalResult;
  }

  rotateRound() {
    this.#scoreBoard.forEach((value, key) => {
      const randomNumber = generateRandomNumberFromRange(
        GAME_CONDITION.MIN_RANDOM_NUMBER,
        GAME_CONDITION.MAX_RANDOM_NUMBER,
      );
      if (randomNumber >= GAME_CONDITION.MOVE_FORWARD) {
        this.#scoreBoard.set(key, this.#scoreBoard.get(key) + 1);
      }
    });
  }

  static getFinalWinners(totalResult) {
    const finalScores = totalResult[totalResult.length - 1];
    const maxScore = Math.max(...Object.values(finalScores));
    return Object.keys(finalScores).filter((name) => finalScores[name] === maxScore);
  }
}
