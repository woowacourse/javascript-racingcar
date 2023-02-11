const { Car } = require('../src/Car');
const { randomGenerator } = require('../src/randomGenerator');

const mockRandoms = (numbers) => {
  randomGenerator.generateNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, randomGenerator.generateNumber);
};

describe("Car 객체 기능 검사", () => {
  test('Car 객체 생성 테스트', () => {
    const car = new Car('testCar');
    const carInfo = car.getCarInfo();
    expect(carInfo.name).toEqual('testCar');
    expect(carInfo.moveCnt).toBe(0);
  });

  test('Car 객체 move 테스트', () => {
    const car = new Car('testCar');
    car.move();
    const carInfo = car.getCarInfo();
    expect(carInfo.name).toEqual('testCar');
    expect(carInfo.moveCnt).toBe(1);
  });
}


