import CarMover from '../CarMover';
import Car from '../Car';
import onlyMove from './onlyMove';

const manyTryCase = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const moveDistances = [1, 2, 3, 4, 5, 6];

describe('CarMover 테스트', () => {
  test('giveManyTry에 1을 인자로 줬을 경우 ', () => {
    //Arrange
    const car = new Car();
    const carMover = new CarMover(onlyMove, 1);

    //Act
    carMover.giveManyTry(car, 1);

    //Assert
    expect(car.getLastPosition()).toBe(1);
  });

  test.each(manyTryCase)(
    'giveManyTry에 1 이상의 값을 인자로 줬을 경우 여러 번 반복 테스트 한다',
    maxTryCount => {
      //Arrange
      const car = new Car();
      const carMover = new CarMover(onlyMove, 1);

      //Act
      carMover.giveManyTry(car, maxTryCount);

      //Assert
      expect(car.getLastPosition()).toBe(maxTryCount);
    }
  );

  test.each([manyTryCase, moveDistances])(
    'moveDistance에 다른 값을 인자로 줬을 경우 그에 맞는 값을 이동한다',
    (maxTryCount, moveDistance) => {
      //Arrange
      const car = new Car();
      const carMover = new CarMover(onlyMove, moveDistance);

      //Act
      carMover.giveManyTry(car, maxTryCount);

      //Assert
      expect(car.getLastPosition()).toBe(maxTryCount * moveDistance);
    }
  );
});
