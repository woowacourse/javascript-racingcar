import { SETTING } from "../constants.js"

class CountValidator {
	static isAlreadyRegistered(count) {
		return count !== 0
	}

	static isTooBigCount(count) {
		return count > SETTING.MAX_COUNT
	}
}

export default CountValidator
