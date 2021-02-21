import { GAME_SETTINGS } from "./constants.js";

class CountValidator {
	static isAlreadyRegistered(count) {
		return count !== 0;
	}

	static isNotNaturalNumber(count) {
		return count < 1 || !Number.isInteger(count);
	}

	static isTooBigCount(count) {
		return count > GAME_SETTINGS.MAX_COUNT;
	}
}

export default CountValidator;
