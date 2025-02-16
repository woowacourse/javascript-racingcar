import { RACE } from '../../src/constants/race.js';
import Car from '../../src/domains/Car.js';

describe('자동차 클래스 테스트', () => {
  describe('정상 케이스', () => {
    const name = '행성이';
    let car;

    beforeEach(() => {
      car = new Car(name);
    });

    test('자동차를 생성할 수 있다.', () => {
      expect(car).not.toBeUndefined();
    });

    test('자동차가 3번 이동하면 position은 3이 된다.', () => {
      const moveCount = 3;

      for (let i = 0; i < moveCount; i++) {
        car.move();
      }

      expect(car.position).toBe(moveCount * RACE.FOWARD_UNIT);
    });

    test('comparePosition 메서드는 현재 위치와 주어진 위치 중 큰 값을 반환한다.', () => {
      car.move();

      expect(car.comparePosition(0)).toBe(1);
      expect(car.comparePosition(2)).toBe(2);
      expect(car.comparePosition(1)).toBe(1);
    });
  });
});
