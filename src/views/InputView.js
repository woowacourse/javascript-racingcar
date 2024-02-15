import readLineAsyncSeperatedFromType from '../utils/readLineAsyncSeperatedFromType.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const InputView = {
	async inputCarNames() {
		const names = await readLineAsyncSeperatedFromType(PROGRESS_MESSAGE.input_car_names);
		return names.split(',');
	},

	async inputCountOfAttempt() {
		const count = await readLineAsyncSeperatedFromType(PROGRESS_MESSAGE.input_attempt_numbers, 'number');
		return Number(count);
	},
};

export default InputView;
