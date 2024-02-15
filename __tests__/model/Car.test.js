import Car from "../../src/models/Car";

describe('자동차 생성테스트', () => {
  describe('자동차가 생성되지 않는 경우', () => {
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
  });
  describe('자동차 정상 생성테스트', () => {
    test('자동차 이름을 정상적으로 입력하면 자동차가 생성된다.', () => {
      // given
      const validInput = '썬데이';

      // when
      const car = new Car(validInput);

      // then
      expect(typeof car === 'object').toBeTruthy();
    });
  });
});
