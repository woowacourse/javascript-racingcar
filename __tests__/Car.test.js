const Car = require('../src/domain/Car');

describe('Car - move() 기능 테스트', () => {
  test('move()의 인자가 4 이상의 숫자이면 전진한다.', () => {
    const name = 'test';
    const car = new Car(name);

    car.move(4);

    expect(car.getPosition()).toEqual(2);
  });

  test('move()의 인자가 3 이하의 숫자이면 전진하지 않는다.', () => {
    const name = 'test';
    const car = new Car(name);

    car.move(3);

    expect(car.getPosition()).toEqual(1);
  });
});
