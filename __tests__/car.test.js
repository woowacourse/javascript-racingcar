import Car from '../src/model/Car.js';

describe('자동차 전진 테스트', () => {
  test('랜덤값이 4 미만이면 정지한다', () => {
    const car = new Car('파슬리');
    car.updateAdvance(2);
    expect(car.getAdvance()).toEqual(0);
  });

  test('랜덤값이 4 이상이면 한 칸 전진한다', () => {
    const car = new Car('파슬리');
    car.updateAdvance(8);
    expect(car.getAdvance()).toEqual(1);
  });
});
