class CommonValidator {
  static inputEmpty(input) {
    if (input === '') {
      throw new Error('[ERROR] 입력은 공백이 될 수 없습니다.');
    }
  }
}

export default CommonValidator;
