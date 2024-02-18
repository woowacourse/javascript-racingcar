import Car from '../src/domain/entities/Car.js';

describe('자동차 이름 테스트', () => {
  test.each(['jade', ' Fe', 'car1 ', ' car2 '])('정상 입력', carName => {
    // Arrange
    const CAR_NAME = carName.trim();
    // Act
    const car = new Car(CAR_NAME);
    // Assert
    expect(car.getName()).toEqual(CAR_NAME);
    expect(car.getPosition()).toEqual(0);
  });

  test.each(['pencil', 'woowacourse'])('5자를 초과할 경우 에러를 발생시킨다', carName => {
    const CAR_NAME = carName.trim();
    expect(() => new Car(CAR_NAME)).toThrow('[ERROR]');
  });

  test.each(['', ' '])('공백일 경우 에러를 발생시킨다', carName => {
    const CAR_NAME = carName.trim();
    expect(() => new Car(CAR_NAME)).toThrow('[ERROR]');
  });
});
