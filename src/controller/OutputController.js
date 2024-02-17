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
    const message = `${name}${SPACE}:${SPACE}${OUTPUT_MESSAGE.movement.repeat(
      step,
    )} `;

    OutputView.printMessage(message);
  },

  printRoundResultHeader() {
    OutputView.printMessage(`\n${OUTPUT_MESSAGE.roundResult}`);
  },

  printCurrentRound(currentRound) {
    OutputView.printMessage(`\n라운드:${currentRound}\n`);
  },

  printWinner(winnerList) {
    const message = `\n${OUTPUT_MESSAGE.winner}:${SPACE}${
      winnerList.join(`${DELIMITER}${SPACE}`) || NONE
    }`;

    OutputView.printMessage(message);
  },
};

export default OutputController;
