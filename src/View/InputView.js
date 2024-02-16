import { MESSAGE } from '../Constant/Constant.js';
import TryNumber from '../Domain/TryNumber.js';
import { readLineAsync } from '../Utils/MissionUtils.js';
import OutputView from './OutputView.js';
import CarList from '../Domain/CarList.js';

const InputView = {
	async askCarNames() {
		const nameInput = await readLineAsync(MESSAGE.NAME_INPUT);
		const nameArray = nameInput.trim().split(',');
		try {
			new CarList(nameArray);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return this.askCarNames();
		}
		return nameArray;
	},

	async askTryNumber() {
		const tryNumberInput = await readLineAsync(MESSAGE.TRY_NUM_INPUT);
		const tryNumber = Number(tryNumberInput);

		try {
			new TryNumber().validate(tryNumber);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return this.askTryNumber();
		}
		return tryNumber;
	},
};

export default InputView;
