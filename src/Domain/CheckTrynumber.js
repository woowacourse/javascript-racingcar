import { ERROR, TRY_NUMBER } from '../Constant/Constant.js';
import validate from '../Utils/ValidateUtils.js';

const tryNumber = {
	check(number) {
		this.integer(number);
		this.notANum(number);
		this.empty(number);
		this.less(number);
	},

	integer(number) {
		if (!validate.isInteger(number)) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	},

	notANum(number) {
		if (validate.isNotANum(number)) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	},

	empty(number) {
		if (validate.isEmpty(number)) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	},

	less(number) {
		if (validate.isNumberLess(number, TRY_NUMBER.MAX_NUMBER)) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	},
};

export default tryNumber;
