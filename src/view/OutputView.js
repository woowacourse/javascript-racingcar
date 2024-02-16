import { SYMBOLS } from '../statics/constants';
import { OUTPUTS } from '../statics/messages';
import Console from '../utils/Console';

class OutputView {
  static printResultMessage() {
    Console.print(OUTPUTS.resultGuide);
  }

  static printNameAndCarPosition(result) {
    for (const carNameAndPosition of Object.entries(result)) {
      Console.print(OUTPUT_MESSAGE_GENERATORS.nameAndCarPosition(carNameAndPosition));
    }
    Console.print(SYMBOLS.whiteSpace);
  }

  static printWinners(names) {
    const winners = names.join(SYMBOLS.winnerSeperator);
    Console.print(OUTPUT_MESSAGE_GENERATORS.gameResult(winners));
  }
}

export default OutputView;
