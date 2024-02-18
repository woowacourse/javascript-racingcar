const validate = {
	isArrLenLess(array, maxLen) {
		if (array.length <= maxLen) {
			return true;
		}
		return false;
	},

	isArrDuplicated(array) {
		const set = new Set(array);
		if (array.length !== set.size) {
			return true;
		}
		return false;
	},

	isStrLenMore(value, minLen) {
		if (value.length >= minLen) {
			return true;
		}
		return false;
	},

	isStrLenLess(value, minLen) {
		if (value.length <= minLen) {
			return true;
		}
		return false;
	},

	isNumberLess(value, maxValue) {
		if (value <= maxValue) {
			return true;
		}
		return false;
	},

	isEmpty(value) {
		if (!value) {
			return true;
		}
		return false;
	},

	isInteger(value) {
		if (Number.isInteger(value)) {
			return true;
		}
		return false;
	},

	isNotANum(value) {
		if (isNaN(value)) {
			return true;
		}
		return false;
	},
};

export default validate;
