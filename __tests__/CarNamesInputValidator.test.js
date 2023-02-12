const CarNamesInputValidator = require('../src/domain/validators/CarNamesInputValidator');

describe('자동차 이름에 대한 입력값의 유효성을 검사하는 객체 테스트', () => {
  describe('자동차 이름에 포함된 문자에 대한 유효성 검사 테스트', () => {
    test.each(['!@#', 'pobi.crong.honux', '포비,크롱,호눅스!'])(
      '영어, 한글, 쉼표(,) 이외의 문자가 포함된 경우 예외 처리',
      (input) => {
        expect(() => CarNamesInputValidator.validate(input)).toThrow();
      },
    );

    test.each([
      'pobi,crong,honux',
      '포비,크롱,호눅스',
      '가나다라마,바사아자차,카타파하가',
    ])('영어, 한글, 쉼표(,)로만 이루어진 입력값인 경우 정상 동작', (input) => {
      expect(() => CarNamesInputValidator.validate(input)).not.toThrow();
    });
  });

  describe('자동차 이름의 길이에 대한 유효성 검사 테스트', () => {
    test.each(['pobi,crong,', ',crong,honux', '포비,크롱,호눅스호눅스', ',,'])(
      '자동차 이름의 길이가 1글자 이상 5글자 이하가 아닌 경우 예외 처리',
      (input) => {
        expect(() => CarNamesInputValidator.validate(input)).toThrow();
      },
    );

    test.each([
      'pobi,crong,honux',
      '포비,크롱,호눅스',
      '가나다라마,바사아자차,카타파하가',
    ])('자동차 이름의 길이가 1글자 이상 5글자 이하인 경우 정상 동작', (input) => {
      expect(() => CarNamesInputValidator.validate(input)).not.toThrow();
    });
  });
});
