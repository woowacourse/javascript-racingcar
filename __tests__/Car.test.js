import Car from '../src/domain/Car';

describe('Car 클래스 함수 검사', () => {
  test.each([
    [0, false],
    [3, false],
    [4, true],
    [9, true],
  ])('랜덤 값에 따른 자동차 이동 여부 테스트', (number, expected) => {
    const car = new Car();
    expect(car.canMove(number)).toEqual(expected);
  });
});
