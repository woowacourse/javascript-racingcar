const Validator = require('../src/utils/Validator.js');

describe('입력값의 유효성을 검사하는 객체 테스트', () => {
  test.each([['!@#'], ['pobi.crong.honux'], ['포비,크롱,호눅스!']])(
    '영어, 한글, 쉼표(,) 이외의 문자가 포함된 경우 예외 처리',
    (input) => {
      expect(() => Validator.validateNameInput(input)).toThrow('invalid character');
    },
  );
});
