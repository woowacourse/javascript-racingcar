import { RACE } from '../../src/constants/race';
import Cars from '../../src/domains/Cars';
import getRandomNumber from '../../src/utils/getRandomNumber';

describe('자동차 리스트 클래스 테스트', () => {
  const names = ['목성이', '화성이', '금성이'];

  describe('정상 케이스', () => {
    let cars;

    beforeEach(() => {
      cars = new Cars(names, getRandomNumber);
    });

    test('자동차 리스트를 생성할 수 있다.', () => {
      expect(cars).not.toBeUndefined();
    });

    test('자동차 경주를 한 라운드 실행하면, 전진 또는 멈춘다.', () => {
      cars.moveCars();
      cars.cars.forEach((car) => {
        expect([0, 1]).toContain(car.position);
      });
    });

    test('자동차 경주를 한 라운드 실행하면, 최대 위치가 1이다.', () => {
      expect(cars.getMaxPosition()).toBeGreaterThanOrEqual(0);
      expect(cars.getMaxPosition()).toBeLessThanOrEqual(1);
    });
  });

  describe('이동 테스트', () => {
    test('자동차들이 번갈아가며 이동한다.', () => {
      let idx = 0;
      const moveStrategy = () => {
        idx++;
        return idx % 2 === 0 ? RACE.FOWARD_THRESHOLD + 1 : RACE.FOWARD_THRESHOLD - 1;
      };

      const cars = new Cars(names, moveStrategy);
      cars.moveCars();

      expect(cars.cars[0].position).toBe(0);
      expect(cars.cars[1].position).toBe(1);
      expect(cars.cars[2].position).toBe(0);
    });
  });
});
