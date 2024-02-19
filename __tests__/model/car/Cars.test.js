import Car from '../../../src/model/car/Car.js';
import Cars from '../../../src/model/car/Cars.js';

/* eslint-disable max-lines-per-function */
describe('[단위 테스트] Cars', () => {
  let cars;

  beforeEach(() => {
    cars = new Cars();
  });

  describe('[함수] makeCars', () => {
    test('주어진 자동차 이름들로 자동차를 생성하는지 확인', () => {
      const carNames = ['Car1', 'Car2', 'Car3'];
      cars.makeCars(carNames);

      const createdCars = cars.getCars();

      expect(createdCars.length).toEqual(carNames.length);
      carNames.forEach((carName, index) => {
        expect(createdCars[index]).toBeInstanceOf(Car);
        expect(createdCars[index].getName()).toEqual(carName);
      });
    });
  });

  describe('[함수] moveCars', () => {
    test('주어진 이동 가능 여부에 따라 자동차들이 이동하는지 확인', () => {
      const carNames = ['Car1', 'Car2', 'Car3'];
      cars.makeCars(carNames);

      const canMoveCars = [true, false, true];
      cars.moveCars(canMoveCars);

      const locations = cars.getLocations();
      expect(locations[0].location).toEqual(1);
      expect(locations[1].location).toEqual(0);
      expect(locations[2].location).toEqual(1);
    });
  });

  describe('[함수] getLocations', () => {
    test('자동차들의 위치 정보를 반환하는지 확인', () => {
      const carNames = ['Car1', 'Car2', 'Car3'];
      cars.makeCars(carNames);

      const locations = cars.getLocations();
      expect(locations.length).toEqual(carNames.length);
      expect(locations[0].name).toEqual(carNames[0]);
      expect(locations[0].location).toEqual(0);
    });
  });
});
