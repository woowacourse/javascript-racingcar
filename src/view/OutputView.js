import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import RESULT_MESSAGE from '../constants/messages/resultMessage.js';

const OutputView = {
	printStartGame() {
		console.log(RESULT_MESSAGE.RESULT_START);
	},

	printResult(gameResult) {
		gameResult.forEach((round) => {
			for (const [key, value] of Object.entries(round)) {
				console.log(`${key} : ${'-'.repeat(value)}`);
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

		console.log(PROGRESS_MESSAGE.FINAL_WINNER, winnerCar.join(','));
	},
};

export default OutputView;
