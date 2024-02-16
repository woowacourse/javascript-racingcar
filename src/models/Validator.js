import REGEX_CONFIG from '../constants/configs/regexConfig.js';
import AppError from '../errors/AppError.js';
import ERROR_MESSAGE from '../constants/messages/errorMessage.js';

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

  // 중복된 이름이 존재할때
  static validateDuplication(carNames) {
    if (new Set(carNames).size !== carNames.length) {
      throw new AppError(ERROR_MESSAGE.have_duplication);
    }
  }

  // 자연수를 입력하지 않았을 때
  static validateNaturalNumber(count) {
    if (!Number.isInteger(count) || count < 1) {
      throw new AppError(ERROR_MESSAGE.not_natural_number);
    }
  }

  // 시도횟수가 20을 넘었을때
  static validateOverLimitCount(count) {
    if (count > 20) {
      throw new AppError(ERROR_MESSAGE.over_limit_count);
    }
  }
}
