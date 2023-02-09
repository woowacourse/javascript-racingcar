const { Car } = require('../src/Car');
const { randomGenerator } = require('../src/randomGenerator');

const mockRandoms = (numbers) => {
  randomGenerator.generateNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, randomGenerator.generateNumber);
};

test('Car 모델 테스트', () => {
  const randomNumbers = [3, 7];
  const results = [0, 1];
  mockRandoms(randomNumbers);

  randomNumbers.forEach((_, index) => {
    const car = new Car('testCar');
    car.move();

    const carInfo = car.getCarInfo();
    expect(carInfo.name).toEqual('testCar');
    expect(carInfo.movingLog).toBe(results[index]);
  });
});
