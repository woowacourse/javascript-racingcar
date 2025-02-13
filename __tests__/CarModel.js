import { mockRandom } from '../src/helpers/testUtils.js';
import { CarModel } from '../src/models/index.js';

describe('CarModel', () => {
  let car;
  beforeEach(() => {
    car = new CarModel();
  });

  test('CarModel을 생성한다.', () => {
    expect(car).toBeDefined();
  });

  test('CarModel은 초기에 position은 0이다.', () => {
    expect(car.position).toBe(0);
  });

  test('CarModel은 랜덤 숫자가 4이상일 시 앞으로 전진한다.', () => {
    for (let value = 4; value <= 9; value++) {
      mockRandom(value);
      car.go();
      expect(car.position).toBe(1);
      car.position = 0;
    }
  });

  test('CarModel은 랜덤 숫자가 4이하일시 정지한다.', () => {
    for (let value = 0; value < 4; value++) {
      mockRandom(value);
      car.go();
      expect(car.position).toBe(0);
    }
  });
});
