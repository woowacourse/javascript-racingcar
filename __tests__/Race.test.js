import Car from '../src/Models/Car.js';
import Race from '../src/Models/Race.js';
import { mockRandom } from './Car.test.js';

describe('우승자 선별 테스트', () => {
  let carNames;
  let tryCount;
  let cars;
  let race;

  beforeEach(() => {
    carNames = ['재오', '앵버', '상추'];
    tryCount = 2;
    cars = carNames.map((name) => new Car(name, carNames));
    race = new Race(cars, tryCount);
  });

  test('이동 가능 여부 판단 테스트', () => {
    // given
    mockRandom([3]);

    // then
    expect(race.canMove()).toBe(false);
  });

  test('가장 많이 이동된 값 반환 테스트', () => {
    // given
    mockRandom([3, 4, 3, 3, 4, 3]);

    // when
    race.moveForward();

    // then
    expect(race.getMaxPosition()).toEqual(2);
  });

  test('우승자가 잘 선별되는지 테스트', () => {
    // given;
    mockRandom([3, 4, 3, 3, 4, 3]);

    // when
    race.moveForward();

    // then
    expect(race.getWinner()).toEqual(['앵버']);
  });
});
