import { OUTPUT_MESSAGE } from '../helpers/constants.js';

export default class OutputView {
  static #print(message) {
    console.log(message);
  }

  static printBlank() {
    this.#print('');
  }

  static printResultOutput() {
    OutputView.#print(OUTPUT_MESSAGE.result);
  }

  static printEachGame(cars) {
    cars.forEach(car => {
      const carOutput = '-'.repeat(car.position);
      this.#print(`${car.name} : ${carOutput}`);
    });

    this.printBlank();
  }

  static printWinner(winners) {
    const winnerOutput = winners.join(', ');
    this.#print(`${OUTPUT_MESSAGE.winner}${winnerOutput}`);
  }
}
