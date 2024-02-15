import CONDITIONS from '../src/constants/Conditions';
import Cars from '../src/entities/Cars';

describe('Cars', () => {
  test.each(['jade,Fe', 'jade,Fe, pen, ruler'])('정상 입력', carsStr => {
    // Arrange
    const CAR_NAMES = carsStr.split(',').map(car => car.trim());
    const CAR_POSITIONS = [...Array(CAR_NAMES.length)].map(() => 0);
    const cars = new Cars(carsStr);

    // Act
    const [carNames, carPositions] = cars.getState();

    // Assert
    expect(carNames).toEqual(CAR_NAMES);
    expect(carPositions).toEqual(CAR_POSITIONS);
  });

  test.each(['pencil', 'pen, woowacourse'])('5자 이하만 가능하다', carsStr => {
    expect(() => new Cars(carsStr)).toThrow('[ERROR]');
  });

  test.each(['', ' ', 'pen, , apple', 'pen,,apple'])(
    '공백만 입력은 불가능하다',
    carsStr => {
      expect(() => new Cars(carsStr)).toThrow('[ERROR]');
    },
  );

  test('랜덤값에 따른 전진 여부', ()=>{
    // Arrange
    const RANDOM_NUMBERS = [0,1,3,4,5,9];
    const POSITIONS = RANDOM_NUMBERS.map(number=>number>=CONDITIONS.progressRandomThreshold?1:0);
    const carsStr = 'pen, apple, car3, car4,car5,car6';
    const cars = new Cars(carsStr);
    cars.progress(RANDOM_NUMBERS);
    // Act
    const [_, positions] = cars.getState();
    // Assert
    expect(positions).toEqual(POSITIONS);
  })
});
