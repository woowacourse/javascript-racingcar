import { ERROR } from '../Constant/Constant.js';

class TryNumber {
	validate(numberInput) {
		this.validateIntegerNumber(numberInput);
		this.validateNotANum(numberInput);
		this.validateOverZero(numberInput);
	}

	validateIntegerNumber(numberInput) {
		if (!Number.isInteger(numberInput)) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	}

	validateNotANum(numberInput) {
		if (isNaN(numberInput)) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	}

	validateOverZero(numberInput) {
		if (numberInput <= 0) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	}
}

export default TryNumber;
