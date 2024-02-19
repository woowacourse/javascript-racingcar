/* eslint-disable max-lines-per-function */
import Car from '../../../src/model/car/Car.js';

describe('[단위 테스트] Car', () => {
  let car;

  beforeEach(() => {
    car = new Car();
  });

  describe('[함수] setName', () => {
    test('주어진 이름으로 이름을 설정하는지 확인', () => {
      const newName = 'New Car Name';
      car.setName(newName);

      expect(car.getName()).toEqual(newName);
    });
  });

  describe('[함수] getLocation', () => {
    test('현재 위치를 반환하는지 확인', () => {
      const location = car.getLocation();

      expect(location).toEqual(0);
    });
  });

  describe('[함수] move', () => {
    test('canMove가 true일 때 차량이 이동하는지 확인', () => {
      car.move(true);

      expect(car.getLocation()).toEqual(1);
    });

    test('canMove가 false일 때 차량이 이동하지 않는지 확인', () => {
      car.move(false);

      expect(car.getLocation()).toEqual(0);
    });
  });
});
