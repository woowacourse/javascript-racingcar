import { ERROR_MESSAGE, ROUND_RULE } from '../constant/index.js';

class Round {
  #totalRound = 0;

  #currentRound = 1;

  constructor(string) {
    this.#validateRound(string);
    this.#totalRound = Number(string);
  }
  // eslint-disable-next-line
  #validateRound(string) {
    const { min, max } = ROUND_RULE;
    const regex = new RegExp(`^[${min}-${max}]$`);

    if (!regex.test(string)) {
      throw new Error(ERROR_MESSAGE.round);
    }
  }

  isEnd() {
    return this.#totalRound < this.#currentRound;
  }

  moveToNextRound() {
    this.#currentRound += 1;
  }

  getData() {
    return { totalRound: this.#totalRound, currentRound: this.#currentRound };
  }
}

export default Round;
