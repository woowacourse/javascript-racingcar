import { MESSAGE } from '../Constant/Constant.js';
import { readLineAsync } from '../Utils/MissionUtils.js';

const InputView = {
	async askCarNames() {
		const nameInput = await readLineAsync(MESSAGE.NAME_INPUT);
		const nameArray = nameInput.split(',');
		return nameArray;
	},

	async askTryNumber() {
		const input = await readLineAsync(MESSAGE.TRY_NUM_INPUT);
		const numberInput = Number(input);
		return numberInput;
	},
};

export default InputView;
