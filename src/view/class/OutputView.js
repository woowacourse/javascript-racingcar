import CONSTANTS from '../../CONSTANTS';

const { message } = CONSTANTS;

class OutputView {
  static print(message) {
    console.log(message);
  }

  static lineBreak() {
    console.log();
  }

  static printRaceHeader(isLineBreak = true) {
    if (isLineBreak) OutputView.lineBreak();
    console.log(message.RESULT_OUTPUT);
  }

  static printProgressMapArray(progressMapArray) {
    progressMapArray.forEach(progressMap =>
      this.#printProgressMap(progressMap)
    );
  }
  static #printProgressMap(progressMap, isSpaceFooter = true) {
    progressMap.forEach((position, carName) => {
      console.log(this.#getOneCarProgressString(carName, position));
    });
    if (isSpaceFooter) this.lineBreak();
  }

  static printWinnersName(names) {
    console.log(
      `${message.WINNER_OUTPUT_HEADER}${names.join(
        message.WINNER_CONNECTION_MARK
      )}`
    );
  }

  static #getOneCarProgressString(carName, position) {
    return `${carName}${
      message.PROGRESS_CONNECTION_MARK
    }${message.DISTANCE_MARK.repeat(position)}`;
  }
}

export default OutputView;
