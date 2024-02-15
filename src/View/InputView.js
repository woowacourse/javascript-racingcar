import { MESSAGE } from '../Constant/Constant.js';
import CarList from '../Model/CarList.js';
import TryNumber from '../Model/TryNumber.js';
import { readLineAsync } from '../Utils/MissionUtils.js';
import OutputView from './OutputView.js';

const InputView = {
	async askCarNames() {
		const nameInput = await readLineAsync(MESSAGE.NAME_INPUT);
		const nameArray = nameInput.split(',');
		try {
			new CarList().validate(nameArray);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return this.askCarNames();
		}
		return nameArray;
	},

	async askTryNumber() {
		let numberInput = await readLineAsync(MESSAGE.TRY_NUM_INPUT);
		numberInput = Number(numberInput);
		try {
			new TryNumber().validate(numberInput);
		} catch (e) {
			OutputView.printErrorMessage(e);
			return this.askTryNumber();
		}
		return numberInput;
	},
};

export default InputView;
