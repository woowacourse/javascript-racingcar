import { MESSAGE } from '../Constant/Constant.js';
import { print } from '../Utils/MissionUtils.js';

const OutputView = {
	printResultMessage() {
		print(MESSAGE.RESULT);
	},
	printBlank() {
		print('');
	},
	printNameAndResult(carName, result) {
		print(`${carName} : ${MESSAGE.PRINT_CHAR.repeat(result)}`);
	},
	printWinners(winners) {
		const winnersStr = winners.join(', ');
		print(`최종 우승자 : ${winnersStr}`);
	},
	printErrorMessage(e) {
		print(e.message);
	},
};

export default OutputView;
