const Car = require('../src/domain/Car');

describe('Car 이동 테스트', () => {
  test('자동차가 이동하면 distance가 1 증가한다.', () => {
    const car = new Car('abcd');

    car.move();
    const { distance } = car.getInfo();

    expect(distance).toEqual(2);
  });
});

describe('Car 유효성 테스트', () => {
  test.each(['', ' ', undefined])(
    '이름에 공백만 있거나 아무것도 입력하지 않을 시 에러가 발생한다.',
    (input) => {
      expect(() => {
        console.log(input);
        new Car(input);
      }).toThrow();
    },
  );

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
});
