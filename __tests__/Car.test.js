const Random = require('../src/utils/Random');
const Car = require('../src/domain/Car');

const mockMathRandoms = (number) => {
  Math.random = jest.fn();

  return Math.random.mockReturnValueOnce(number);
};

describe('Car - move() 기능 테스트', () => {
  test('(전진 경우)', () => {
    jest.useFakeTimers();
    const name = 'test';
    const car = new Car(name);

    mockMathRandoms(0.523);

    const result = Random.pickNumberInRange(0, 9);

    car.move(result);

    expect(car.getLast()).toEqual(2);
  });

  test('(전진하지 않는 경우)', () => {
    jest.useFakeTimers();
    const name = 'test';
    const car = new Car(name);

    mockMathRandoms(0.123);

    const result = Random.pickNumberInRange(0, 9);
    car.move(result);

    expect(car.getLast()).toEqual(1);
  });
});
