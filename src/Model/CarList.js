import CAR, { ERROR, MESSAGE } from '../Constant/Constant.js';

class CarList {
	async ask() {
		const nameInput = await readLineAsync(MESSAGE.NAME_INPUT);
		const nameArray = nameInput.split(',');
		this.#reaskUtilValidateSuccess(nameArray);
		return nameArray;
	}

	#reaskUtilValidateSuccess(nameArray) {
		try {
			this.validate(nameArray);
		} catch (e) {
			print(e.message);
			return this.ask();
		}
	}

	validate(nameArray) {
		this.#validateCarNumber(nameArray);
		for (const name of nameArray) {
			this.#validateNameLength(name);
			this.#validateEmpty(name);
		}
	}

	#validateCarNumber(nameArray) {
		if (nameArray.length === CAR.MIN_CAR_LEN) {
			throw new Error(ERROR.NAME);
		}
	}

	#validateNameLength(name) {
		if (name.length >= CAR.MAX_NAME_LEN) {
			throw new Error(ERROR.NAME);
		}
	}

	#validateEmpty(name) {
		if (!name) {
			throw new Error(ERROR.NAME);
		}
	}
}

export default CarList;
