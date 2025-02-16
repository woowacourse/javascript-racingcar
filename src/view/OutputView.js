import { GAME_MESSAGE } from '../constants/systemMessages.js';

class OutputView {
  static #print(message) {
    console.log(message);
  }

  static printResultMessage() {
    this.#print(GAME_MESSAGE.RACING_RESULT);
  }

  static printCarState(result) {
    this.#print(result);
  }

  static printNewLine() {
    this.#print('');
  }

  static printWinner(winner) {
    this.#print(`${GAME_MESSAGE.WINNER} ${winner}`);
  }
}

export default OutputView;
