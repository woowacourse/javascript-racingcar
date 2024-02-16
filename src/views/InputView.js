import readLineAsyncSeperatedFromType from '../utils/readLineAsyncSeperatedFromType.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const InputView = {
	async inputCarNames() {
		const names = await readLineAsyncSeperatedFromType(PROGRESS_MESSAGE.INPUT_CAR_NAMES);
		return names.split(',');
	},

	async inputCountOfAttempt() {
		const count = await readLineAsyncSeperatedFromType(PROGRESS_MESSAGE.INPUT_ATTEMPT_NUMBERS, 'number');
		return Number(count);
	},
};

export default InputView;
