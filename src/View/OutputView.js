import { MESSAGE } from '../Constant/Constant.js';
import { print } from '../Utils/MissionUtils.js';

const OutputView = {
	printResultMessage() {
		print(MESSAGE.RESULT);
	},
	printBlank() {
		print(MESSAGE.BLANK);
	},
	printNameAndResult(carNames, resultCounter, i) {
		print(`${carNames[i]} : ${MESSAGE.PRINT_CHAR.repeat(resultCounter[i])}`);
	},
	printWinners(winnersStr) {
		print(`최종 우승자 : ${winnersStr}`);
	},
};

export default OutputView;
