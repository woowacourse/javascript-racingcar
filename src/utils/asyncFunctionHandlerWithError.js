import AppError from '../errors/AppError';
import ERROR_MESSAGE from '../constants/messages/errorMessage';
/**
 * 비동기 함수 핸들러 입니다.
 * 에러 발생시, 해당 에러 메세지를 출력하고 재귀적으로 비동기 함수를 다시 호출합니다.
 * @param { Function } asyncFn  실행할 비동기 함수
 * @param { object } context  함수가 실행될 컨텍스트
 * @returns {Promise<*>}
 */

const validateOfTypeFromInput = async (input, type) => {
  if (type === 'number') {
    const num = Number(input);
    if (Number.isNaN(num)) {
      throw new AppError(ERROR_MESSAGE.NOT_NUMBER);
    }
    return num;
  }
  return input;
};

const asyncFunctionHandlerWithError = (query, type, resolve, rl) => {
  rl.question(query, async (input) => {
    try {
      const validatedInput = await validateOfTypeFromInput(input, type);
      rl.close();
      resolve(validatedInput);
    } catch (error) {
      console.error(error.message);
      asyncFunctionHandlerWithError(query, type, resolve);
    }
  });
};

export default asyncFunctionHandlerWithError;
