import { ERROR, CAR } from '../Constant/Constant.js';

export const validateCarList = {
	validate(nameArray) {
		this.validateCarNumber(nameArray);
		this.validateDuplicate(nameArray);
		for (const name of nameArray) {
			this.validateEmpty(name);
			this.validateNameLength(name);
		}
	},

	validateCarNumber(nameArray) {
		if (nameArray.length <= 1) {
			throw new Error(ERROR.NAME);
		}
	},

	validateDuplicate(nameArray) {
		const set = new Set(nameArray);
		if (nameArray.length !== set.size) {
			throw new Error(ERROR.NAME);
		}
	},

	validateNameLength(name) {
		if (name.length >= CAR.MAX_NAME_LEN) {
			throw new Error(ERROR.NAME);
		}
	},

	validateEmpty(name) {
		if (!name) {
			throw new Error(ERROR.NAME);
		}
	},
};

export const validateTryNumber = {
	validate(numberInput) {
		this.validateIntegerNumber(numberInput);
		this.validateNotANum(numberInput);
		this.validateOverZero(numberInput);
	},

	validateIntegerNumber(numberInput) {
		if (!Number.isInteger(numberInput)) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	},

	validateNotANum(numberInput) {
		if (isNaN(numberInput)) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	},

	validateOverZero(numberInput) {
		if (numberInput <= 0) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	},
};
