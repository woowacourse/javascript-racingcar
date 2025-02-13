import Car from '../src/Car.js';

describe('자동차 객체 테스트', () => {
  test.each([4, 5, 6, 7, 8, 9, 10])(
    '자동차는 주어지는 값이 %s 이상인 경우 움직여야 한다.',
    (value) => {
      // given
      const car = new Car('자동차', 0);

      // when
      car.move(value);

      // then
      expect(car.position).toBe(1);
    },
  );

  test.each([1, 2, 3])('그 외의 경우 움직이지 않는다.', (value) => {
    const car = new Car('자동차', 0);

    car.move(value);

    expect(car.position).toBe(0);
  });

  test('자동차의 현재 이동 거리를 문자열로 반환한다.', () => {
    const car = new Car('car', 0);

    car.move(4);
    car.move(4);
    car.move(3);

    expect(car.getRacingStatus()).toBe('car : --');
  });
});
