import Cars from '../src/domain/Cars';

describe('Cars 클래스 함수 검사', () => {
  test.each([
    [
      [0, 9, 9],
      ['b', 'c'],
    ],
    [
      [9, 9, 0],
      ['a', 'b'],
    ],
    [[4, 1, 0], ['a']],
    [[0, 2, 8], ['c']],
  ])('랜덤 값에 따른 우승자 배열 확인', (number, expected) => {
    const cars = new Cars(['a', 'b', 'c']);
    cars.moveAllCars();
    expect(cars.findWinners()).toEqual(expected);
  });
});
