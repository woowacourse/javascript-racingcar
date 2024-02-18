import PROGRESS_MESSAGE from '../constants/messages/progressMessage';
import RESULT_MESSAGE from '../constants/messages/resultMessage';

const OutputView = {
  printStartGame() {
    console.log(RESULT_MESSAGE.RESULT_START);
  },

  printResult(gameResult) {
    gameResult.map((round) => {
      Object.keys(round).forEach((key) => {
        const value = round[key];
        console.log(`${key} : ${'-'.repeat(value)}`);
      });
      console.log(' ');
    });
  },

  printWinner(gameResult, count) {
    const finalRound = gameResult[count - 1];
    const maxNumber = Math.max(...Object.values(finalRound));
    const winnerCar = Object.keys(finalRound).filter((key) => finalRound[key] === maxNumber);

    console.log(PROGRESS_MESSAGE.FINAL_WINNER, winnerCar.join(','));
  },
};

export default OutputView;
