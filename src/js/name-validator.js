import { GAME_SETTINGS } from "./constants.js"

class NameValidator {
	static isAlreadyRegistered(previousCars) {
		return previousCars.length !== 0
	}

	static isEmptyName(names) {
		return names.includes("")
	}

	static isNamesTooMany(names) {
		return names.length > GAME_SETTINGS.MAX_TOTAL_NUMBER_OF_NAMES
	}

	static isNameTooLong(names) {
		return names.some((name) => name.length > GAME_SETTINGS.MAX_NAME_LENGTH)
	}

	static isNameOverwritten(names) {
		return [...new Set(names)].length !== names.length
	}
}

export default NameValidator
