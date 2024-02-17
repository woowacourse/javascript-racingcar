import Car from '../../src/domain/Car';
import Random from '../../src/utils/Random';
import { RANDOMCASES, TEST_RULES } from '../../src/statics/test_constants';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Car Test', () => {
  test('move', () => {
    // given

    // when
    const car = new Car('pobi');
    
    for (let i = 0; i < TEST_RULES.attemptNum; i++) {
      car.move(true);
    }

    // then
    expect(car.position).toBe(3);
  });
});
