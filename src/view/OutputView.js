import {
  DEFAULT_ERROR_MESSAGE,
  OUTPUT_MESSAGES,
  POSITION_STRING,
  WINNER_SEPERATOR,
} from '../helpers/constants.js';

export default class OutputView {
  static #print(message) {
    console.log(message);
  }

  static printBlank() {
    this.#print('');
  }

  static printResultOutput() {
    OutputView.#print(OUTPUT_MESSAGES.result);
  }

  static printEachGame(cars) {
    cars.forEach(car => {
      const carOutput = POSITION_STRING.repeat(car.position);
      this.#print(`${car.name} : ${carOutput}`);
    });

    this.printBlank();
  }

  static printWinner(winners) {
    const winnerOutput = winners.join(WINNER_SEPERATOR);
    this.#print(`${OUTPUT_MESSAGES.winner}${winnerOutput}`);
  }

  static printErrorMessage(error) {
    this.#print(`${DEFAULT_ERROR_MESSAGE} ${error.message}`);
  }
}
