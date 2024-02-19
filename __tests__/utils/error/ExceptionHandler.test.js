/* eslint-disable max-lines-per-function */
import { ERROR } from '../../../src/constant/strings.js';
import Handler from '../../../src/utils/error/ExceptionHandler.js';

const throwError = Handler.throwError.bind(Handler);
const throwErrorIfInvalid = Handler.throwErrorIfInvalid.bind(Handler);
const retryAsyncWithErrorLogging = Handler.retryAsyncWithErrorLogging.bind(Handler);

describe('[단위 테스트] ExceptionHandler', () => {
  const errorMessage = 'Test error message';

  describe('[함수] throwError', () => {
    test('주어진 에러 메시지로 Error를 던지는지 확인', () => {
      expect(() => throwError(errorMessage)).toThrow(`${ERROR.prefix} ${errorMessage}`);
    });
  });

  describe('[함수] throwErrorIfInvalid', () => {
    test('조건이 유효하지 않을 경우 에러를 던지는지 확인', () => {
      expect(() => throwErrorIfInvalid(false, errorMessage)).toThrow(
        `${ERROR.prefix} ${errorMessage}`
      );
    });

    test('조건이 유효할 경우 에러를 던지지 않는지 확인', () => {
      expect(() => throwErrorIfInvalid(true, errorMessage)).not.toThrow();
    });
  });

  describe('[함수] retryAsyncWithErrorLogging', () => {
    test('비동기 함수가 실패하는 경우 주어진 횟수만큼 재시도하는지 확인', async () => {
      const errorFunc = jest.fn(async () => {
        throw new Error(errorMessage);
      });

      await expect(retryAsyncWithErrorLogging(errorFunc, 3)).rejects.toThrow(
        `${ERROR.prefix} ${errorMessage}`
      );
      expect(errorFunc).toHaveBeenCalledTimes(4);
    });

    test('비동기 함수가 성공하는 경우 바로 반환하는지 확인', async () => {
      const successFunc = jest.fn(async () => 'success');

      await expect(retryAsyncWithErrorLogging(successFunc, 3)).resolves.toBe('success');
      expect(successFunc).toHaveBeenCalledTimes(1);
    });
  });
});
