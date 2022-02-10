export default class Validator {
  static isCarNameBlank(carNames) {
    const filtered = carNames.filter((name) => name === '');
    if (filtered.length > 0) {
      alert('자동차 이름이 빈 칸입니다.');
      return true;
    }
  }

  static isInvalidCarNameLength(carNames) {
    const filtered = carNames.filter((name) => name.length >= 6);
    if (filtered.length > 0) {
      alert('자동차 이름을 5자 이하로 해주세요.');
      return true;
    }
  }

  static isInValidCarNamesInput(carNames) {
    if (this.isCarNameBlank(carNames)) {
      return true;
    }
    if (this.isInvalidCarNameLength(carNames)) {
      return true;
    }
    return false;
  }

  // Number.isInteger()

  static isFloat(number) {
    if (!Number.isInteger(Number(number))) {
      alert('시도 횟수를 자연수로 입력해주세요.');
      return true;
    }
  }

  static isNotNaturalNumber(number) {
    if (number <= 0) {
      alert('시도 횟수를 자연수로 입력해주세요.');
      return true;
    }
  }

  static isString(number) {
    if (typeof Number(number) !== 'number') {
      alert('시도 횟수를 자연수로 입력해주세요.');
      return true;
    }
  }

  static isInValidRacingCountInput(number) {
    if (this.isFloat(number)) {
      return true;
    }
    if (this.isNotNaturalNumber(number)) {
      return true;
    }
    if (this.isString(number)) {
      return true;
    }
    return false;
  }
}
