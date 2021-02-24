import { MESSAGE } from "../constants.js"
import { includesEmptyString, isNotNaturalNumber } from "../utils.js"
import CountValidator from "./count-validator.js"
import NameValidator from "./name-validator.js"

export const checkNameError = (names, previousCars) => {
	if (NameValidator.isAlreadyRegistered(previousCars)) {
		return { error: false, message: MESSAGE.NAME_ALREADY_REGISTERED }
	}

	if (includesEmptyString(names)) {
		return { error: false, message: MESSAGE.EMPTY_NAME }
	}

	if (NameValidator.isNamesTooMany(names)) {
		return { error: false, message: MESSAGE.TOO_MANY_NAMES }
	}

	if (NameValidator.isNameTooLong(names)) {
		return { error: false, message: MESSAGE.TOO_LONG_NAME }
	}

	if (NameValidator.isDuplicated(names)) {
		return { error: false, message: MESSAGE.OVERWRITTEN }
	}

	return { error: true, message: null }
}

export const checkCountError = (count, previousCount) => {
	if (CountValidator.isAlreadyRegistered(previousCount)) {
		return { error: false, message: MESSAGE.COUNT_ALREADY_REGISTERED }
	}

	if (isNaN(count)) {
		return { error: false, message: MESSAGE.NAN }
	}

	if (isNotNaturalNumber(count)) {
		return { error: false, message: MESSAGE.NOT_NATURAL_NUMBER }
	}

	if (CountValidator.isTooBigCount(count)) {
		return { error: false, message: MESSAGE.TOO_BIG_COUNT }
	}

	return { error: true, message: null }
}
