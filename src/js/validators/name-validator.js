import { SETTING } from "../constants.js"

class NameValidator {
	static isAlreadyRegistered(previousCars) {
		return previousCars.length !== 0
	}

	static isNamesTooMany(names) {
		return names.length > SETTING.MAX_TOTAL_NUMBER_OF_NAMES
	}

	static isNameTooLong(names) {
		return names.some((name) => name.length > SETTING.MAX_NAME_LENGTH)
	}

	static isDuplicated(names) {
		return [...new Set(names)].length !== names.length
	}
}

export default NameValidator
