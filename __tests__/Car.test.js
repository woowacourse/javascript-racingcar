const Car = require('../src/Car');

const mockRandoms = (numbers) => {
  Car.generateRandomNumber = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Car.generateRandomNumber,
  );
};

describe('자동차 이동 테스트', () => {
  test.each([[[3]], [[2]]])('이동 불가', (randoms) => {
    mockRandoms(randoms);
    const car = new Car('A');
    car.move();

    expect(car.position).toEqual(1);
  });

  test.each([[[4]], [[9]]])('한칸 이동', (randoms) => {
    mockRandoms(randoms);
    const car = new Car('A');
    car.move();

    expect(car.position).toEqual(2);
  });
});
