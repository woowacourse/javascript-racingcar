import { CAR, ERROR, MESSAGE } from '../Constant/Constant.js';
import { readLineAsync, print } from '../Utils/MissionUtils.js';
class CarList {
	async ask() {
		const nameInput = await readLineAsync(MESSAGE.NAME_INPUT);
		const nameArray = nameInput.split(',');
		this.#reaskUntilValidateSuccess(nameArray);
		return nameArray;
	}

	#reaskUntilValidateSuccess(nameArray) {
		try {
			this.validate(nameArray);
		} catch (e) {
			print(e.message);
			return this.ask();
		}
	}

	validate(nameArray) {
		this.validateCarNumber(nameArray);
		for (const name of nameArray) {
			this.validateNameLength(name);
			this.validateEmpty(name);
		}
	}

	validateCarNumber(nameArray) {
		if (nameArray.length <= 1) {
			throw new Error(ERROR.NAME);
		}
	}

	validateNameLength(name) {
		if (name.length >= CAR.MAX_NAME_LEN) {
			throw new Error(ERROR.NAME);
		}
	}

	validateEmpty(name) {
		if (!name) {
			throw new Error(ERROR.NAME);
		}
	}
}

export default CarList;
