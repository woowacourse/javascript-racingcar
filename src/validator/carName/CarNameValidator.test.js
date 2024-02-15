import AppError from '../../errors/AppError/module.js';
import CarNameValidator from './CarNameValidator.js';

describe('자동차 이름 유효성 검사 테스트', () => {
  const startValidation = (inputValue) => () => CarNameValidator.check(inputValue);

  describe('예외 테스트', () => {
    test.each([
      {
        input: 'A car.Another car.Yet another car',
        expectedErrorMessage: CarNameValidator.validationTypes.notCommaSeparated.errorMessage,
      },
      {
        input: 'car,car',
        expectedErrorMessage: CarNameValidator.validationTypes.duplicateCarNames.errorMessage,
      },
      {
        input: 'car,123456',
        expectedErrorMessage: CarNameValidator.validationTypes.invalidCarNameLength.errorMessage,
      },
      {
        input: 'car,',
        expectedErrorMessage: CarNameValidator.validationTypes.invalidCarNameLength.errorMessage,
      },
      {
        input: 'car',
        expectedErrorMessage: CarNameValidator.validationTypes.invalidCarLength.errorMessage,
      },
    ])(
      '입력값이 "$input"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ input, expectedErrorMessage }) => {
        // then
        expect(startValidation(input)).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        input: 'car1,car2',
      },
      {
        input: '12345,67890',
      },
    ])('입력값이 "$input"일 때 에러가 발생하지 않는다.', ({ input }) => {
      // then
      expect(startValidation(input)).not.toThrow();
    });
  });
});
