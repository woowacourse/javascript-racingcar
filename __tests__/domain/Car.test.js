import { Car } from "../../src/domain";

describe('자동차 테스트', () => {
  describe('자동차 생성 테스트', () => {
    test('자동차 이름이 비었으면 에러를 발생시킨다.', () => {
      // given
      const invalidInput = '';
      
      expect(() => {
        // when
        new Car(invalidInput);
        // then
      }).toThrow();
    });
    test('자동차 이름이 5자 초과되면 에러를 발생시킨다.', () => {
      // given
      const invalidInput = 'cookie';
      
      expect(() => {
        // when
        new Car(invalidInput);
        // then
      }).toThrow();
    });
    test('자동차 이름이 한글 또는 영어가 아니면 에러를 발생시킨다.', () => {
      // given
      const invalidInput = 'pobi1';
      
      expect(() => {
        // when
        new Car(invalidInput);
        // then
      }).toThrow();
    });
    test('자동차 이름을 정상적으로 입력하면 자동차가 생성된다.', () => {
      // given
      const validInput = '썬데이';

      // when
      const car = new Car(validInput);

      // then
      expect(car instanceof Car).toBeTruthy();
    });
  });
  describe('자동차 전진테스트, (4이상이면 전진)', () => {
    const sundayCar = new Car('썬데이');

    test('랜덤한 수를 3을 받으면 전진하지 않습니다.', () => {
      // given
      const randomNumber = 3;
      const answer = 0;

      // when
      const actResult = sundayCar.actCar(randomNumber);

      // then
      expect(actResult.score).toEqual(answer);
    });
    test('랜덤한 수를 4을 받으면 전진합니다.', () => {
      // given
      const randomNumber = 4;
      const answer = 1;

      // when
      const actResult = sundayCar.actCar(randomNumber);

      // then
      expect(actResult.score).toEqual(answer);
    });
  });
});
