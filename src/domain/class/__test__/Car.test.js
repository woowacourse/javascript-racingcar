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
    '지시한 특정한 값 만큼 마지막 위치 값이 움직인다.',
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
    'getPositionWhen에 기존 진행횟수보다 큰 수가 들어왔을 때 마지막 위치 값을 반환한다.',
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
