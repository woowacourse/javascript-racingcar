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
}
