import { DELIMITER, NONE, OUTPUT_MESSAGE, SPACE } from '../constant/index.js';
import { OutputView } from '../view/index.js';

const OutputController = {
  printParticipantList(nameArray) {
    OutputView.printMessage(
      `\n${OUTPUT_MESSAGE.participantList}${nameArray.join(
        `${DELIMITER}${SPACE}`,
      )}`,
    );
  },

  printTotalRound(totalRound) {
    OutputView.printMessage(`\n${OUTPUT_MESSAGE.totalRound}${totalRound}`);
  },

  printMovement(name, step) {
    const message = `${name} : ${OUTPUT_MESSAGE.movement.repeat(step)} `;

    OutputView.printMessage(message);
  },

  printRoundResultHeader() {
    OutputView.printMessage(`\n${OUTPUT_MESSAGE.roundResult}`);
  },

  printCurrentRound(currentRound) {
    OutputView.printMessage(`\n라운드:${currentRound}\n`);
  },

  printWinner(winnerList) {
    const winners = winnerList.join(`${DELIMITER}${SPACE}`);
    const message = `\n${OUTPUT_MESSAGE.winner}: ${winners || NONE}`;

    OutputView.printMessage(message);
  },
};

export default OutputController;
