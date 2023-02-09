const Car = require('../src/models/Car');

describe('자동차 클래스 유효성 테스트', () => {
  test('이름의 길이가 5 이하일 때', () => {
    expect(() => {
      new Car('abcd');
    }).not.toThrow();
  });

  test('이름의 길이가 5 초과일 때', () => {
    expect(() => {
      new Car('abcdef');
    }).toThrow();
  });

  test('이름의 길이가 0일 때', () => {
    expect(() => {
      new Car('');
    }).toThrow();
  });

  test('이름이 공백만 있을 때', () => {
    expect(() => {
      new Car('  ');
    }).toThrow();
  });
});
