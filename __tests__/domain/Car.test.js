import Car from '../../src/domain/Car';
import Random from '../../src/utils/Random';
import { RANDOMCASES } from '../../src/statics/test_constants';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Car Test', () => {
  test('move', () => {
    // given
    const randomCase = RANDOMCASES.moveTwoTimeOfOneCarRandomCase;

    const ATTEMPT_NUM = randomCase.length;

    // when
    mockRandoms([...randomCase]);

    const car = new Car('pobi');
    for (let i = 0; i < ATTEMPT_NUM; i++) {
      car.move();
    }

    // then
    expect(car.position).toBe(2);
  });
});
