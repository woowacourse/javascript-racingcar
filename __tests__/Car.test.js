import Car from '../src/domains/Car';

describe('자동차 도메인 테스트', () => {
  it('숫자가 4 이상인 경우에 자동차는 전진한다.', () => {
    // given
    const randomNumber = 4;
    const expectedPosition = 1;

    // when
    const car = new Car('bing');
    car.move(randomNumber);

    // then
    expect(car.position).toBe(expectedPosition);
  });

  it('숫자가 4 미만인 경우 자동차는 전진하지 못한다.', () => {
    // given
    const randomNumber = 3;
    const expectedPosition = 0;

    // when
    const car = new Car('bong');
    car.move(randomNumber);

    // then
    expect(car.position).toBe(expectedPosition);
  });
});
