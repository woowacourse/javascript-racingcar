import REGEX_CONFIG from '../constants/configs/regexConfig.js';
import AppError from '../errors/AppError.js';
import ERROR_MESSAGE from '../constants/messages/errorMessage.js';

export class Validator {
	static validateCarNames(carNames) {
		carNames.forEach((car) => {
			Validator.validateSpecialCharacter(car);
			Validator.validateOutOfRange(car);
		});
		return carNames;
	}

	// 문자열에 특수문자가 존재하면 error 발생
	static validateSpecialCharacter(car) {
		if (REGEX_CONFIG.special_character.test(car)) {
			throw new AppError(ERROR_MESSAGE.have_special_characters);
		}
	}

	// 5글자 초과일떄
	static validateOutOfRange(car) {
		if (car.length > 5) {
			throw new AppError(ERROR_MESSAGE.out_of_range);
		}
	}
}
