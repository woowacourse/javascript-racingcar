import { SYMBOLS } from '../statics/constants';
import { OUTPUT_MESSAGES } from '../statics/messages';
import Console from '../utils/Console';

class OutputView {
  static printResultMessage() {
    Console.print(OUTPUT_MESSAGES.resultGuide);
  }

  static printNameAndCarPosition(result) {
    for (const carNameAndPosition of Object.entries(result)) {
      Console.print(OUTPUT_MESSAGES.nameAndCarPosition(carNameAndPosition));
    }
    Console.print(SYMBOLS.whiteSpace);
  }

  static printWinners(names) {
    const winners = names.join(SYMBOLS.winnerSeperator);
    Console.print(OUTPUT_MESSAGES.gameResult(winners));
  }
}

export default OutputView;
