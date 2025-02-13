import { OUTPUT_MESSAGE } from '../helpers/constants.js';

export default class OutputView {
  static print(message) {
    console.log(message);
  }

  static printBlank() {
    this.print('');
  }

  static printResult() {
    OutputView.print(OUTPUT_MESSAGE.result);
  }

  static printEachGame(nameList, cars) {
    for (let i = 0; i < nameList.length; i++) {
      const carOutput = '-'.repeat(cars[i].position);
      this.print(`${nameList[i]} : ${carOutput}`);
    }
    this.printBlank();
  }

  static printWinner(winners) {
    const winnerOutput = winners.join(', ');
    this.print(`${winnerOutput}${OUTPUT_MESSAGE.winner}`);
  }
}
