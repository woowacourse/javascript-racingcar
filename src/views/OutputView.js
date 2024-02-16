import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import RESULT_MESSAGE from '../constants/messages/resultMessage.js';

const OutputView = {
  printStartGame() {
    console.log(RESULT_MESSAGE.result_start);
  },

  printResult(gameResult) {
    gameResult.forEach((round) => {
      for (const [key, value] of Object.entries(round)) {
        console.log(PROGRESS_MESSAGE.round_result(key, value));
      }
      console.log(' ');
    });
  },

  printWinner(gameResult, count) {
    const finalRound = gameResult[count - 1];
    const finalScore = Object.values(finalRound);
    const maxNumber = Math.max(...finalScore);
    const winnerCar = [];

    for (const key in finalRound) {
      if (finalRound.hasOwnProperty(key) && finalRound[key] === maxNumber) {
        winnerCar.push(key);
      }
    }

    console.log(PROGRESS_MESSAGE.final_winner(winnerCar));
  },
};

export default OutputView;
