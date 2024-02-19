import CarMover from '../CarMover';
import Car from '../Car';

const onlyGo = () => true;
const manyTryCase = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const moveDistances = [1, 2, 3, 4, 5, 6];

describe('CarMover 테스트', () => {
  test('giveManyTry에 1을 인자로 줬을 경우', () => {
    //Arrange
    const car = new Car();
    const carMover = new CarMover(onlyGo, 1);

    //Act
    carMover.giveManyTry(car, 1);

    //Assert
    expect(car.getLastPosition()).toBe(1);
  });

  test.each(manyTryCase)(
    'giveManyTry에 1 이상의 값을 인자로 줬을 경우',
    maxTryCount => {
      //Arrange
      const car = new Car();
      const carMover = new CarMover(onlyGo, 1);

      //Act
      carMover.giveManyTry(car, maxTryCount);

      //Assert
      expect(car.getLastPosition()).toBe(maxTryCount);
    }
  );

  test.each([manyTryCase, moveDistances])(
    'moveDistance에 다른 값을 인자로 줬을 경우',
    (maxTryCount, moveDistance) => {
      //Arrange
      const car = new Car();
      const carMover = new CarMover(onlyGo, moveDistance);

      //Act
      carMover.giveManyTry(car, maxTryCount);

      //Assert
      expect(car.getLastPosition()).toBe(maxTryCount * moveDistance);
    }
  );
});
