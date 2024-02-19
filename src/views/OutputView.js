import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import RESULT_MESSAGE from '../constants/messages/resultMessage.js';
import DELIMITER from '../constants/delimiter.js';

const OutputView = {
  printStartGame() {
    console.log(RESULT_MESSAGE.START_PREFIX);
  },

  /**
   * 게임 라운드마다의 누적 결과를 출력합니다.
   * @param { Map } gameResult
   */
  printResult(gameResult) {
    gameResult.forEach((round) => {
      Object.entries(round).forEach(([key, value]) =>
        console.log(key + DELIMITER.COLON + DELIMITER.SCORE_MARK.repeat(value)),
      );
      this.divideLine();
    });
  },

  /**
   * 총 게임 결과의 최종 승자를 출력합니다.
   * @param { Map } gameResult
   * @param { Number } count
   */
  printWinner(finalWinnerArr) {
    console.log(
      PROGRESS_MESSAGE.FINAL_WINNER_PREFIX +
        finalWinnerArr.join(DELIMITER.CAR_NAME_SEPARATOR + DELIMITER.SPACE),
    );
  },

  divideLine() {
    console.log(DELIMITER.SPACE);
  },
};

export default OutputView;
