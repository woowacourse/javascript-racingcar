const CarValidator = require('../../src/validator/Car');

describe('자동차 예외 처리 테스트', () => {
  test('자동차 이름은 1~5자만 들어갈 수 있다.', () => {
    const names = ['', '1,2,3,4,5', 'a,b,c,d,e,f', 123, null, undefined];

    names.forEach(name => {
      expect(() => {
        CarValidator.checkName(name);
      }).toThrow('[ERROR]');
    });
  });

  test('자동차 이름은 쉼표를 기준으로 나눠져 있다.', () => {
    const names = ['', '1', 'abcdef', 123, null, undefined];

    names.forEach(name => {
      expect(() => {
        CarValidator.checkName(name);
      }).toThrow('[ERROR]');
    });
  });
});
