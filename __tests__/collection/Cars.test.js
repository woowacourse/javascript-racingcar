import Car from "../../src/models/Car";
import Cars from './../../src/collection/Cars';

describe('자동차 콜렉션 검증', () => {
  describe('자동차 이름 중복 검증', () => {
    test('자동차 이름이 중복되는 경우 에러를 발생시킨다.', () => {
      // given
      const sundayCar = new Car('썬데이');
      const duplicatedCar = new Car('썬데이');

      expect(() => {
        // when
        new Cars([sundayCar, duplicatedCar]);
        
        // then
      }).toThrow();
    });
    test('자동차 이름이 중복되지 않은 경우 콜렉션이 정상적으로 생성된다.', () => {
      // given
      const sundayCar = new Car('썬데이');
      const cookieCar = new Car('쿠키');

      // when
      const cars = new Cars([sundayCar, cookieCar]);

      expect(typeof cars === 'object').toBeTruthy();
    });
  });
});
