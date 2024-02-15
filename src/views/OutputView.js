import readLineAsyncSeperatedFromType from '../utils/readLineAsyncSeperatedFromType.js';
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
};

export default OutputView;
