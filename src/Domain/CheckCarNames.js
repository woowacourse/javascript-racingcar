import { CAR, ERROR } from '../Constant/Constant.js';
import validate from '../Utils/ValidateUtils.js';

const carNames = {
	check(nameArray) {
		this.duplicateName(nameArray);
		this.nameArrLen(nameArray);
		for (const name of nameArray) {
			this.nameLen(name);
		}
	},

	duplicateName(nameArr) {
		if (validate.isArrDuplicated(nameArr)) {
			throw new Error(ERROR.NAME);
		}
	},

	nameArrLen(nameArr) {
		if (validate.isArrLenLess(nameArr, CAR.MIN_CAR_ARRAY_LEN)) {
			throw new Error(ERROR.NAME);
		}
	},

	nameLen(name) {
		this.nameLenLess(name);
		this.nameLenMore(name);
	},

	nameLenMore(name) {
		if (validate.isStrLenMore(name, CAR.MAX_NAME_LEN)) {
			throw new Error(ERROR.NAME);
		}
	},

	nameLenLess(name) {
		if (validate.isStrLenLess(name, CAR.MIN_NAME_LEN)) {
			throw new Error(ERROR.NAME);
		}
	},
};

export default carNames;
