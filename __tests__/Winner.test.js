import Race from '../src/domain/Race.js';
import Car from '../src/domain/Car.js';
import { mockRandom } from './Car.test.js';

describe('우승자 선별 테스트', () => {
  test('우승자가 잘 선별되는지 테스트한다.', () => {
    // given
    const carNames = ['재오', '앵버', '상추'];
    const tryCount = 2;
    const cars = carNames.map((name) => new Car(name, carNames));
    const race = new Race(cars, tryCount);
    mockRandom([3, 4, 3, 3, 4, 3]);

    // when
    race.movePosition();

    // then
    expect(race.getWinner()).toEqual(['앵버']);
  });
});
