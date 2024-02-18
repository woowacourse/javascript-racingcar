import AppError from '../../errors/AppError/module.js';
import CarNameValidator from './CarNameValidator.js';
import {
  ERROR_MESSAGE_CAR_LENGTH_MIN,
  ERROR_MESSAGE_CAR_NAME_RANGE,
  ERROR_MESSAGE_DUPLICATE,
  ERROR_MESSAGE_REGEX,
} from './constant.js';

describe('자동차 이름 유효성 검사 테스트', () => {
  const startValidation = (inputValue) => () => CarNameValidator.check(inputValue);

  describe('예외 테스트', () => {
    test.each([
      {
        input: 'A car.Another car.Yet another car',
        expectedErrorMessage: ERROR_MESSAGE_REGEX,
      },
      {
        input: 'car,car',
        expectedErrorMessage: ERROR_MESSAGE_DUPLICATE,
      },
      {
        input: 'car,123456',
        expectedErrorMessage: ERROR_MESSAGE_CAR_NAME_RANGE,
      },
      {
        input: 'car,',
        expectedErrorMessage: ERROR_MESSAGE_CAR_NAME_RANGE,
      },
      {
        input: 'car',
        expectedErrorMessage: ERROR_MESSAGE_CAR_LENGTH_MIN,
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
