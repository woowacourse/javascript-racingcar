import { CAR, ERROR } from '../Constant/Constant.js';

const CarListValidate = {
	validate(nameArray) {
		if (
			!this.isValidateCarNumber(nameArray) ||
			!this.isValidateDuplicate(nameArray)
		)
			throw new Error(ERROR.NAME);

		for (const name of nameArray) {
			if (!this.isValidateNameLength(name)) throw new Error(ERROR.NAME);
		}
	},

	isValidateCarNumber(nameArray) {
		return !(
			nameArray.length < CAR.MIN_CAR_LEN || nameArray.length > CAR.MAX_CAR_LEN
		);
	},

	isValidateDuplicate(nameArray) {
		const nameUniqueSet = new Set(nameArray);
		return nameArray.length === nameUniqueSet.size;
	},

	isValidateNameLength(name) {
		return name.length <= CAR.MAX_NAME_LEN && name.length > 0;
	},
};

export default CarListValidate;
