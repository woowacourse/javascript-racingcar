import Console from '../utils/Console';

import { SYMBOLS } from '../statics/constants';
import { OUTPUTS, OUTPUT_MESSAGE_GENERATORS } from '../statics/messages';

const OutputView = {
  printResultMessage() {
    Console.print(OUTPUTS.resultGuide);
  },

  printNameAndCarPosition(result) {
    for (const carNameAndPosition of Object.entries(result)) {
      Console.print(OUTPUT_MESSAGE_GENERATORS.nameAndCarPosition(carNameAndPosition));
    }
    Console.print(SYMBOLS.whiteSpace);
  },

  printWinners(names) {
    const winners = names.join(SYMBOLS.winnerSeperator);
    Console.print(OUTPUT_MESSAGE_GENERATORS.gameResult(winners));
  },
};

export default OutputView;
