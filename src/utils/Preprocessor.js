const Preprocessor = {
  /**
   * 배열에서 빈 문자열('')을 제거하는 함수.
   * @param {Array<string>} input - 처리할 배열.
   * @returns {Array<string>} 빈 문자열이 제거된 배열.
   */
  filterOutEmptyStrings(input) {
    return input.filter((str) => str !== '');
  },

  /**
   * 문자열 또는 배열의 모든 문자열에서 앞뒤 공백을 제거하는 함수.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @returns {string|Array<string>} 앞뒤 공백이 제거된 입력값.
   */
  trimEdgeWhitespaces(input) {
    return this.applyFunctionToInput(input, (str) => str.trim());
  },
};

export default Preprocessor;
