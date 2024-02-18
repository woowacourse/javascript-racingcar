import Validator from '../src/validator/Validator.js';

describe('어플리케이션내의 자동차이름 입력값에 대한 유효성 검증을 수행한다.', () => {
  test.each([[['pobi', 'jun']], [['공원', '준']]])(
    '유효한 자동차 이름값이 입력되면 에러를 반환하지 않는다.',
    (validInput) => {
      expect(() => {
        Validator.validateCarNames(validInput);
      }).not.toThrow();
    },
  );

  test.each([[['!soha', 'jun']], [['brgndy', '준']], [['공원', '왼손', '공원']]])(
    '유효한 자동차 이름값이 입력되지 않는다면 에러를 반환한다.',
    (validInput) => {
      expect(() => {
        Validator.validateCarNames(validInput);
      }).toThrow();
    },
  );
});
