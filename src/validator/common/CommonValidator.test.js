import AppError from '../../errors/AppError/module.js';
import CommonValidator from './CommonValidator.js';
import { ERROR_MESSAGE_EMPTY, ERROR_MESSAGE_SPACE } from './constant.js';

describe('공통 유효성 검사 테스트', () => {
  const startValidation = (inputValue) => () => CommonValidator.check(inputValue);
  describe('예외 테스트', () => {
    test.each([
      {
        input: '',
        expectedErrorMessage: ERROR_MESSAGE_EMPTY,
      },
      {
        input: 'Some text with space',
        expectedErrorMessage: ERROR_MESSAGE_SPACE,
      },
    ])(
      '입력값이 "$input"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ input, expectedErrorMessage }) => {
        // then
        expect(startValidation(input)).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('정상 작동 테스트', () => {
    test.each([
      {
        input: 'abc',
      },
      {
        input: '123',
      },
    ])('입력값이 "$input"일 때 에러가 발생하지 않는다.', ({ input }) => {
      // then
      expect(startValidation(input)).not.toThrow();
    });
  });
});
