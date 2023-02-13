const Car = require('../src/models/Car');

describe('Car 이동 테스트', () => {
  test('자동차가 이동하면 distance가 1 증가한다.', () => {
    const car = new Car('abcd');

    car.move();
    const { distance } = car.getInfo();

    expect(distance).toEqual(2);
  });
});

describe('Car 유효성 테스트', () => {
  test('이름의 길이가 5 이하일 때 정상적으로 작동한다.', () => {
    expect(() => {
      new Car('abcd');
    }).not.toThrow();
  });

  test('이름의 길이가 5 초과일 때 에러가 발생한다.', () => {
    expect(() => {
      new Car('abcdef');
    }).toThrow();
  });

  test('이름의 길이가 0일 때 에러가 발생한다.', () => {
    expect(() => {
      new Car('');
    }).toThrow();
  });

  test('이름이 공백만 있을 때 에러가 발생한다.', () => {
    expect(() => {
      new Car('  ');
    }).toThrow();
  });
});
