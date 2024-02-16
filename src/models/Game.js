import generateRandomNumber from '../utils/generateRandomNumber.js';

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
      const randomNumber = generateRandomNumber();
      if (randomNumber > 3) {
        this.#scoreBoard.set(key, this.#scoreBoard.get(key) + 1);
      }
    });
  }
}
