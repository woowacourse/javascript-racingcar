import REGEX_CONFIG from '../constants/configs/regexConfig.js';
import AppError from '../errors/AppError.js';
import ERROR_MESSAGE from '../constants/messages/errorMessage.js';
import VALID_LIMIT_CONSTANTS_CONFIG from '../constants/configs/validLimitConstantsConfig.js';
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

	// 문자열에 특수문자가 존재하면 error 발생
	static validateSpecialCharacter(car) {
		if (REGEX_CONFIG.SPECIAL_CHARACTER.test(car)) {
			throw new AppError(ERROR_MESSAGE.HAVE_SPECIAL_CHARACTERS);
		}
	}

	// 5글자 초과일떄
	static validateOutOfRange(car) {
		if (car.length > VALID_LIMIT_CONSTANTS_CONFIG.CAR_NAME_LIMIT_RANGE) {
			throw new AppError(ERROR_MESSAGE.OUT_OF_RANGE);
		}
	}

	// 중복된 이름이 존재할때
	static validateDuplication(carNames) {
		if (new Set(carNames).size !== carNames.length) {
			throw new AppError(ERROR_MESSAGE.HAVE_DUPLICATION);
		}
	}

	// 자연수를 입력하지 않았을 때
	static validateNaturalNumber(count) {
		if (!Number.isInteger(count) || count < 1) {
			throw new AppError(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
		}
	}

	// 시도횟수가 20을 넘었을때
	static validateOverLimitCount(count) {
		if (count > VALID_LIMIT_CONSTANTS_CONFIG.ATTEMPT_LIMIT_RANGE) {
			throw new AppError(ERROR_MESSAGE.OVER_LIMIT_COUNT);
		}
	}
}
