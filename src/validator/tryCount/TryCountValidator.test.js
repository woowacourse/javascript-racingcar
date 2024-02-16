import AppError from '../../errors/AppError/AppError.js';
import TryCountValidator from './TryCountValidator.js';

describe('자동차 시도 횟수 유효성 검사 테스트', () => {
  const startValidation = (inputValue) => () => TryCountValidator.check(inputValue);

  describe('예외 테스트', () => {
    test.each([
      {
        input: 'abc',
        expectedErrorMessage: TryCountValidator.validationTypes.typeOfNumber.errorMessage,
      },
      {
        input: '11',
        expectedErrorMessage: TryCountValidator.validationTypes.outOfRange.errorMessage,
      },
      {
        input: '0',
        expectedErrorMessage: TryCountValidator.validationTypes.outOfRange.errorMessage,
      },
      {
        input: '1.5',
        expectedErrorMessage: TryCountValidator.validationTypes.typeOfNumber.errorMessage,
      },
    ])(
      '입력값이 "$input"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ input, expectedErrorMessage }) => {
        expect(startValidation(input)).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        input: '1',
      },
      {
        input: '10',
      },
    ])('입력값이 "$input"일 때 에러가 발생하지 않는다.', ({ input }) => {
      expect(startValidation(input)).not.toThrow();
    });
  });
});
