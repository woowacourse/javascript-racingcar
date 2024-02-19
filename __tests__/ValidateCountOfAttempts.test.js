import Validator from '../src/validator/Validator.js';

describe('어플리케이션내의 시도횟수 입력값에 대한 유효성 검증을 수행한다.', () => {
  test.each([[1], [5], [19]])(
    '유효한 시도 횟수 입력값이 입력 된다면, 에러를 반환하지 않는다.',
    (validInput) => {
      expect(() => {
        Validator.validateCountOfAttempts(validInput);
      }).not.toThrow();
    },
  );

  test.each([[21], [-4], [1.4], ['pobi'], [''], [0]])(
    '유효하지 않은 시도 횟수 입력값을 넣으면 에러를 발생시킨다.',
    (invalidInput) => {
      expect(() => {
        Validator.validateCountOfAttempts(invalidInput);
      }).toThrow();
    },
  );
});
