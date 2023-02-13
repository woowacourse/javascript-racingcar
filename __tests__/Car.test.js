import Car from '../src/domain/Car.js';

describe('Car.js에 대한 테스트 코드', () => {
  test.each([
    [
      [4, 3, 1, 8, 0, 9],
      [1, 0, 0, 1, 0, 1],
    ],
    [
      [1, 2, 3, 3, 2, 1],
      [0, 0, 0, 0, 0, 0],
    ],
    [
      [4, 5, 6, 7, 8, 1],
      [1, 1, 1, 1, 1, 0],
    ],
  ])(
    '4보다 클 때 자동차는 움직인다. 4보다 작으면 움직이지 않는다.',
    (randomNumbers, expectPosition) => {
      // given
      const car = new Car('noah');
      car.move(randomNumbers);

      // when
      const { position } = car.getStatus();

      // then
      expect(position).toEqual(expectPosition);
    }
  );

  test.each([
    [[4, 3, 1, 8, 0, 9], 3],
    [[1, 2, 3, 3, 2, 1], 0],
    [[4, 5, 6, 7, 8, 1], 5],
  ])('최종 위치를 계산한다.', (randomNumbers, expectFinalPosition) => {
    //given
    const car = new Car('noah');
    car.move(randomNumbers);

    //when
    const finalPosition = car.getFinalPosition();

    //then
    expect(expectFinalPosition).toBe(finalPosition);
  });

  test.each([
    [[4, 3, 1, 8, 0, 9], 3, true],
    [[1, 2, 3, 3, 2, 1], 3, false],
    [[4, 5, 6, 7, 8, 1], 6, false],
  ])(
    '가장 멀리 이동한 경우 자동차 경주 게임의 우승자이다.',
    (randomNumbers, highestPosition, expectIsWinner) => {
      //given
      const car = new Car('noah');
      car.move(randomNumbers);

      //when
      const isWinner = car.isWinner(highestPosition);

      //then
      expect(expectIsWinner).toBe(isWinner);
    }
  );

  test.each([
    [[4, 3, 1, 8, 0, 9], 3, 'noah'],
    [[1, 2, 3, 3, 2, 1], 3, undefined],
    [[4, 5, 6, 7, 8, 1], 6, undefined],
  ])(
    '우승자라면 자동차의 이름을 받는다.',
    (randomNumbers, highestPosition, expectName) => {
      //given
      const car = new Car('noah');
      car.move(randomNumbers);

      //when
      const winnerName = car.getWinnerName(highestPosition);

      //then
      expect(winnerName).toBe(expectName);
    }
  );
});
