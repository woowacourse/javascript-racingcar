const Car = require('../../src/models/Car');
const Random = require('../../src/utils/Random');

const mockRandomGenerateNumber = randomNumber => {
  Random.generateNumber = jest.fn();

  Random.generateNumber.mockImplementationOnce(() => {
    return randomNumber;
  });
};

describe('Car', () => {
  let car;

  beforeEach(() => {
    car = new Car('sy');
  });
  test('무작위 값이 4 이상일 때 전진한다', () => {
    mockRandomGenerateNumber(4);
    car.move();

    expect(car.getPosition()).toBe(1);

    mockRandomGenerateNumber(3);
    car.move();

    expect(car.getPosition()).toBe(1);
  });
});
