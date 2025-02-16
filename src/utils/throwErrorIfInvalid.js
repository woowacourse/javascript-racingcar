/**
 * 유효성 검사 함수가 true를 반환하면 해당 에러 메시지와 함께 예외 던짐
 * @param {boolean} condition
 * @param {string} errorMessage
 */
const throwErrorIfInvalid = (condition, errorMessage) => {
  if (condition) {
    throw new Error(errorMessage);
  }
};

export default throwErrorIfInvalid;
