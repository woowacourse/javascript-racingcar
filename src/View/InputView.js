import { MESSAGE } from '../Constant/Constant.js';
import { readLineAsync } from '../Utils/MissionUtils.js';
import OutputView from './OutputView.js';
import carNames from '../Domain/CheckCarNames.js';
import tryNumber from '../Domain/CheckTrynumber.js';

const InputView = {
	async askCarNames() {
		const nameInput = await readLineAsync(MESSAGE.NAME_INPUT);
		const nameArray = nameInput.split(',');
		try {
			carNames.check(nameArray);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return this.askCarNames();
		}
		return nameArray;
	},

	async askTryNumber() {
		const input = await readLineAsync(MESSAGE.TRY_NUM_INPUT);
		const numberInput = Number(input);
		try {
			tryNumber.check(numberInput);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return this.askTryNumber();
		}
		return numberInput;
	},
};

export default InputView;
