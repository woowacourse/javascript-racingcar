import { MESSAGE } from '../Constant/Constant.js';
import { readLineAsync } from '../Utils/MissionUtils.js';
import { validateCarList, validateTryNumber } from '../Utils/validate.js';
import OutputView from './OutputView.js';

const InputView = {
	async askCarNames() {
		const nameInput = await readLineAsync(MESSAGE.NAME_INPUT);
		const nameArray = nameInput.split(',');
		try {
			validateCarList.validate(nameArray);
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
			validateTryNumber.validate(numberInput);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return this.askTryNumber();
		}
		return numberInput;
	},
};

export default InputView;
