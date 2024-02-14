const Preprocessor = {
  /**
   * 입력값에 함수 리스트를 순차적으로 적용하는 함수.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @param {Array<function>} funcs - 순차적으로 적용할 함수들의 리스트.
   * @returns {string|Array<string>} 함수들이 순차적으로 적용된 결과.
   */
  process(input, funcs) {
    return funcs.reduce((value, func) => {
      if (Array.isArray(func)) {
        const [f, ...args] = func;
        return f.apply(this, [value, ...args]);
      } else {
        return func.call(this, value);
      }
    }, input);
  },

  /**
   * 입력값에 주어진 함수를 적용하는 함수.
   * 입력값이 배열인 경우, 각 원소에 함수를 적용한다.
   * @param {string|Array<string>} input - 처리할 입력값.
   * @param {function} func - 적용할 함수.
   * @returns {string|Array<string>} 처리된 입력값.
   */
  applyFunctionToInput(input, func) {
    return Array.isArray(input) ? input.map(func) : func(input);
  },

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
