import Car from '../../src/domain/Car';
import { TEST_RULES } from '../constants/test_constants';

describe('Car Test', () => {
  test('move', () => {
    // given
    const car = new Car('pobi');

    // when
    for (let i = 0; i < TEST_RULES.attemptNum; i++) {
      car.move();
    }

    // then
    expect(car.position).toBe(3);
  });
});
