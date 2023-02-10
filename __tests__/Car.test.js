const Car = require('../src/model/Car');
const common = require('../src/utils/common');
const { GAME } = require('../src/constant/constants');

const mockRandoms = (numbers) => {
  common.generateRandomNumberInRange = jest.fn();
  numbers.reduce((acc, cur) => {
    return acc.mockReturnValueOnce(cur);
  }, common.generateRandomNumberInRange);
};

describe('Car 클래스', () => {
  test(`자동차는 ${GAME.MOVE_CONDITION.min}와 ${GAME.MOVE_CONDITION.max - 1} 사이에서 무작위 값이 ${
    GAME.MOVE_CONDITION.satisfaction
  } 이상일 경우 전진한다.`, () => {
    const car = new Car('name');
    const randomNumbers = [4, 5];

    console.log('hh' + mockRandoms);
    mockRandoms(randomNumbers);
    randomNumbers.forEach(() => {
      car.move();
    });

    expect(car.getDistance()).toBe(2);
  });

  test(`자동차는 ${GAME.MOVE_CONDITION.min}와 ${GAME.MOVE_CONDITION.max - 1} 사이에서 무작위 값이 ${
    GAME.MOVE_CONDITION.satisfaction
  } 미만일 경우 멈춘다.`, () => {
    const car = new Car('name');
    const randomNumbers = [3, 2];

    mockRandoms(randomNumbers);
    randomNumbers.forEach(() => {
      car.move();
    });

    expect(car.getDistance()).toBe(0);
  });
});
