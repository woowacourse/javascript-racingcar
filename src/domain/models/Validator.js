import REGEX_CONFIG from '../../constants/configs/regexConfig.js';
import AppError from '../../errors/AppError.js';
import ERROR_MESSAGE from '../../constants/messages/errorMessage.js';
import VALID_CONSTANTS_CONFIG from '../../constants/configs/validConstantsConfig.js';

export class Validator {
	static validateCarNames(carNames) {
		carNames.forEach((car) => {
			Validator.validateSpecialCharacter(car);
			Validator.validateOutOfRange(car);
		});
		Validator.validateDuplication(carNames);

		return carNames;
	}

	static validateCountOfAttempt(count) {
		Validator.validateNaturalNumber(count);
		Validator.validateOverLimitCount(count);
		return count;
	}

	static validateSpecialCharacter(car) {
		if (REGEX_CONFIG.SPECIAL_CHARACTER.test(car)) {
			throw new AppError(ERROR_MESSAGE.HAVE_SPECIAL_CHARACTERS);
		}
	}

	static validateOutOfRange(car) {
		if (car.length > VALID_CONSTANTS_CONFIG.CAR_NAME_LIMIT_RANGE) {
			throw new AppError(ERROR_MESSAGE.OUT_OF_RANGE);
		}
	}

	static validateDuplication(carNames) {
		if (new Set(carNames).size !== carNames.length) {
			throw new AppError(ERROR_MESSAGE.HAVE_DUPLICATION);
		}
	}

	static validateNaturalNumber(count) {
		if (!Number.isInteger(count)) {
			throw new AppError(ERROR_MESSAGE.NOT_INTEGER);
		}
	}

	static validateOverLimitCount(count) {
		if (
			count < VALID_CONSTANTS_CONFIG.ATTEMPT_MIN_LIMIT_RANGE ||
			count > VALID_CONSTANTS_CONFIG.ATTEMPT_MAX_LIMIT_RANGE
		) {
			throw new AppError(ERROR_MESSAGE.OVER_LIMIT_COUNT_RANGE);
		}
	}
}
