import generateRandomNumber from '../../utils/generateRandomNumber';

export default class Game {
  #scoreBoard;

  #attempt;

  #totalResult = [];

  constructor(scoreBoard, attempt) {
    this.#scoreBoard = scoreBoard;
    this.#attempt = attempt;
  }

  getGameResult() {
    for (let i = 0; i < this.#attempt; i += 1) {
      this.rotateRound();
      const currentRoundResult = new Map(this.#scoreBoard);
      this.#totalResult.push(Object.fromEntries(currentRoundResult));
    }
    return this.#totalResult;
  }

  rotateRound() {
    this.#scoreBoard.forEach((value, key) => {
      const randomNumber = generateRandomNumber({ from: 0, to: 9 });
      if (randomNumber > 3) {
        this.#scoreBoard.set(key, this.#scoreBoard.get(key) + 1);
      }
    });
  }
}
