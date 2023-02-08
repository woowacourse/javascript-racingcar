class Validator {
  static validateCarName(name) {
    if (name.length < 1 || name.length > 5) {
      throw new Error('[ERROR] 자동차의 이름은 5글자 이하로 입력해주세요.');
    }

    if (!/^[A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/.test(name)) {
      throw new Error('[ERROR] 자동차의 이름을 다시 입력해주세요.');
    }
  }

  static valdateTryCount(count) {
    if (!/^[0-9]+$/.test(count)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }
}

module.exports = Validator;
