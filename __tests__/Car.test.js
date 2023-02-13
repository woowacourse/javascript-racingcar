const { RACE_ERROR_MESSAGE } = require('../src/Constant/ErrorMessage');
const Car = require('../src/Models/Car');

describe('Car Class 테스트', () => {
  test('move 테스트', () => {
    // given
    const car = new Car('garam');
    const numbers = [1, 3, 4, 5, 6, 2, 0];
    const resultPosition = 3;

    // when
    numbers.forEach(number => {
      car.move(number);
    });

    // then
    expect(car.position).toEqual(resultPosition);
  });

  test.each([['yeopto'], ['garame']])(
    '이름이 5자를 초과하는 경우 예외처리한다.',
    input => {
      expect(() => {
        new Car(input);
      }).toThrow(RACE_ERROR_MESSAGE.LENGTH_OF_NAME);
    },
  );
});
