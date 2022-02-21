export default class Game {
  #racingCount = 0;
  #winner = [];

  init() {
    this.#racingCount = 0;
    this.#winner = [];
  }

  getRacingCount() {
    return this.#racingCount;
  }

  setRacingCount(racingCount) {
    this.#racingCount = racingCount;
  }

  getWinner() {
    return this.#winner;
  }

  setWinner(winner) {
    this.#winner = winner;
  }
}