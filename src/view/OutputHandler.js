import { CONSOLE_MESSAGE } from '../constant/message.js';

class OutputHandler {
  static printEachResult(carName, position) {
    const positionString = '-'.repeat(position);

    console.log(`${carName} : ${positionString}`);
  }

  static printResultStartMessage() {
    console.log(CONSOLE_MESSAGE.resultStartMessage);
  }

  static printEmptyLine() {
    console.log('');
  }

  static printWinner(winnerNames) {
    console.log(`${CONSOLE_MESSAGE.winnerStartMessage}${winnerNames.join(', ')}`);
  }
}

export default OutputHandler;
