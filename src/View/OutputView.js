import { MESSAGE } from '../Constant/Constant.js';

const OutputView = {
	printResultMessage() {
		console.log(MESSAGE.RESULT);
	},
	printBlank() {
		console.log('');
	},
	printNameAndResult(carNames, resultCounter, i) {
		console.log(
			`${carNames[i]} : ${MESSAGE.PRINT_CHAR.repeat(resultCounter[i])}`,
		);
	},
	printWinners(winners) {
		const winnersStr = winners.join(', ');
		console.log(`최종 우승자 : ${winnersStr}`);
	},
	printErrorMessage(e) {
		console.log(e.message);
	},
};

export default OutputView;
