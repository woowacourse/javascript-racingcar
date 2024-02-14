import CAR, { ERROR } from '../Constant/Constant.js';

class CarList {
	async ask() {
		const nameInput = await readLineAsync('사용자 이름을 입력하세요.');
		const nameArray = nameInput.split(',');
		this.#reaskUtilValidateSuccess(nameArray);
		return nameArray;
	}

	#reaskUtilValidateSuccess(nameArray) {
		try {
			for (const name of nameArray) {
				this.#validate(name);
			}
		} catch (e) {
			print(e.message);
			return this.ask();
		}
	}

	#validate(name) {
		this.#validateNameLength(name);
		this.#validateEmpty(name);
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
