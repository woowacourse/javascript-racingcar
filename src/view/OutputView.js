import { OUTPUT_MESSAGES } from '../constant/messages.js';
import numberToDistanceSymbol from '../utils/numberToDistanceSymbol.js';

const OutputView = {
  // 추후 수정
  printNewLine() {
    console.log();
  },

  printGameResultMessage() {
    console.log(OUTPUT_MESSAGES.result);
  },

  printCarInformation(carName, distance) {
    console.log(`${carName} : ${numberToDistanceSymbol(distance)}`);
  },

  printGameResult(gameResult) {
    gameResult.forEach(({ carName, distance }) => {
      this.printCarInformation(carName, distance);
    });
    this.printNewLine();
  },
};

export default OutputView;
