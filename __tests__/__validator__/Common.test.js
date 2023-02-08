const Common = require('../../src/validator/Common');

describe('Common 테스트', () => {
  test('문자열 체크', () => {
    expect(() => {
      Common.isString(123);
    }).toThrow('[ERROR]');
  });
});
