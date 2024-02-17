import Car from '../src/domain/Car';
import RandomNumberGenerator from '../src/utils/RandomNumberGenerator';

const mockRandom = (number) => {
  RandomNumberGenerator.pickRandomNumber = jest.fn();
  RandomNumberGenerator.pickRandomNumber.mockReturnValueOnce(number);
};

const mockRandoms = (numbers) => {
  RandomNumberGenerator.pickRandomNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomNumberGenerator.pickRandomNumber);
};

describe('Car 클래스 함수 검사', () => {
  test.each([
    [[0], false],
    [[3], false],
    [[4], true],
    [[9], true],
  ])('랜덤 값에 따른 자동차 이동 여부 테스트', (number, expected) => {
    mockRandoms(number);

    expect(Car.canMove()).toEqual(expected);
  });
});
