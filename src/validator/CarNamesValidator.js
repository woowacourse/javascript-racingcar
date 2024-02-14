class CarNamesValidator {
  static isValidFormat(carNames) {
    if (!carNames.includes(',')) {
      throw new Error('[ERROR] 자동차 이름이 유효하지 않은 형식입니다.');
    }
  }

  static isValidCount(carNames) {
    if (carNames.length < 2) {
      throw new Error('[ERROR] 자동차 대수는 2대 이상만 가능하다.');
    }
  }

  static isValidRange(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능하다.');
    }
  }

  static isDuplicate(carNames) {
    if (new Set(carNames).size !== carNames.length) {
      throw new Error('[ERROR] 자동차 이름은 중복될 수 없다.');
    }
  }
}

export default CarNamesValidator;
