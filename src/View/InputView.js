import { MESSAGE } from '../Constant/Constant.js';
import { readLineAsync } from '../Utils/MissionUtils.js';
import OutputView from './OutputView.js';
import carListValidate from '../Validator/CarListValidator.js';
import tryNumberValidate from '../Validator/TryNumberValidator.js';

const InputView = {
	async askCarNames() {
		const nameInput = await readLineAsync(MESSAGE.NAME_INPUT);
		const nameArray = nameInput.trim().split(',');

		try {
			carListValidate.validate(nameArray);
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
			tryNumberValidate.validate(tryNumber);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return this.askTryNumber();
		}

		return tryNumber;
	},
};

export default InputView;
