const CarValidator = require('../../src/validator/Car');

describe('자동차 예외 처리 테스트', () => {
  test('자동차 이름은 1~5자만 들어갈 수 있다.', () => {
    const names = ['', '1,2,3,4,5', 'a,b,c,d,e,f', 123, '123', null, undefined];

    names.forEach(name => {
      expect(() => {
        CarValidator.checkName(name);
      }).toThrow('[ERROR]');
    });
  });

  test('입력 가능한 전진 시도 횟수는 1부터 10이하이다.', () => {
    const tryCount = [0, 11, 100, 1000000, -1, null, undefined, ''];

    tryCount.forEach(each => {
      expect(() => {
        CarValidator.checkTryCount(each);
      }).toThrow('[ERROR]');
    });
  });
});
