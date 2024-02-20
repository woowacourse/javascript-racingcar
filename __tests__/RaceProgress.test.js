import Car from '../src/domain/Car';
import RaceProgress from '../src/domain/RaceProgress';

describe('RaceProgress 클래스 함수 검사', () => {
  test.each([
    [
      [0, 1, 1],
      ['b', 'c'],
    ],
    [
      [1, 1, 0],
      ['a', 'b'],
    ],
    [[2, 0, 0], ['a']],
    [[3, 2, 5], ['c']],
  ])('move호출 횟수에 따른 우승자 배열 확인', (number, expected) => {
    const carArray = [new Car('a'), new Car('b'), new Car('c')];
    const cars = new RaceProgress(carArray);
    carArray.forEach((car, index) => {
      for (let i = 0; i < number[index]; i += 1) {
        car.move();
      }
    });
    expect(cars.findWinners()).toEqual(expected);
  });
});
