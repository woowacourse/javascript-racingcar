import Car from '../../src/models/Car';
import Cars from '../../src/collection/Cars';
import gameUtils from '../../src/utils/gameUtils';

const mockRandoms = (numbers) => {
  gameUtils.pickRandomNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, gameUtils.pickRandomNumber);
};

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

      expect(cars instanceof Cars).toBeTruthy();
    });
  });
  describe('자동차 통합테스트', () => {
    test('썬데이가 3 쿠키가 4 랜덤 수를 받으면 스코어가 썬데이는 0, 쿠키는 1의 값이 나온다.', () => {
      // given
      const sundayCar = new Car('썬데이');
      const cookieCar = new Car('쿠키');
      const cars = new Cars([sundayCar, cookieCar]);
      const randomNumbers = [3, 4];
      mockRandoms(randomNumbers);
      const answer = [
        { name: '썬데이', score: 0 },
        { name: '쿠키', score: 1 },
      ];

      // when
      const roundResult = cars.roundStart();

      // then
      expect(roundResult).toEqual(answer);
    });
  });
});
