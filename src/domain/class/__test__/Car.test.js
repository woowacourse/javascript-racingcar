import Car from '../Car';

const moveCase = [
  [
    [1, 2, 3, 4, 5, 6],
    [1, 3, 6, 10, 15, 21],
  ],
  [
    [0, 1, 1],
    [0, 1, 2],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
];

describe('Car 테스트', () => {
  test.each(moveCase)(
    'grantTry에 특정한 값을 줬을 경우, 그 값만큼 마지막 위치 값이 움직이는지 확인한다.',
    (moveDistance, expectedPostion) => {
      //Arrange
      const car = new Car();

      //Act
      moveDistance.forEach(distance => car.grantTry(distance));

      //Assert
      expectedPostion.forEach((position, tryCount) => {
        expect(car.getPositionWhen(tryCount)).toBe(position);
      });
    }
  );

  test.each(moveCase)(
    'getPositionWhen에 큰 수가 들어왔을 때 마지막 값 반환하는지 확인',
    (moveDistance, expectedPostion) => {
      //Arrange
      const car = new Car();

      //Act
      moveDistance.forEach(distance => car.grantTry(distance));

      //Assert
      expect(car.getPositionWhen(Infinity)).toBe(
        expectedPostion[expectedPostion.length - 1]
      );
    }
  );
});
