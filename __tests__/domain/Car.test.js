import Car from '../../src/domain/Car';
import Random from '../../src/utils/Random';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Car Test', () => {
  test('move - 랜덤 값에 따라 postion 필드 값의 변경한다.', () => {
    // given
    const MOVING_FORWARD = 5;
    const STOP = 1;
    const randoms = [MOVING_FORWARD, MOVING_FORWARD, STOP, STOP];

    const ATTEMPT_NUM = randoms.length;

    // when
    mockRandoms([...randoms]);

    const car = new Car('pobi');
    for (let i = 0; i < ATTEMPT_NUM; i++) {
      car.move();
    }

    // then
    expect(car.position).toBe(2);
  });
});
