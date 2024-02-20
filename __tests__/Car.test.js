import { Car } from '../src/domain/index.js'
import { mockRandoms } from '../testUtils/index.js';

describe('자동차 테스트', () => {
  test('랜덤 숫자가 4이상 일때 전진 ', () => {
    const carNameArray = ['a', 'b', 'c'];

    mockRandoms([3, 4, 5]);

    carNameArray.forEach((name, index) => {
      const car = new Car(name);
      car.movement();
      const { step } = car.getCarInfo();

      const pass = index >= 1 ? step === 1 : step === 0;

      expect(pass).toBeTruthy();
    });
  });
});
