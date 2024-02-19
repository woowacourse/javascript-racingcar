import Car from './Car.js';

describe('자동차 이동 테스트', () => {
  // given
  const carName = 'jiny';
  const NOT_MOVE = '안 움직인다.';
  const MOVE = '움직인다.';

  const car = new Car(carName);

  const testCases = [
    {
      randomMoveCount: 1,
      expectCarDetail: { carName, moveCount: 0 },
      resultString: NOT_MOVE,
    },
    {
      randomMoveCount: 2,
      expectCarDetail: { carName, moveCount: 0 },
      resultString: NOT_MOVE,
    },
    {
      randomMoveCount: 3,
      expectCarDetail: { carName, moveCount: 0 },
      resultString: NOT_MOVE,
    },
    {
      randomMoveCount: 4,
      expectCarDetail: { carName, moveCount: 1 },
      resultString: MOVE,
    },
    {
      randomMoveCount: 5,
      expectCarDetail: { carName, moveCount: 2 },
      resultString: MOVE,
    },
    {
      randomMoveCount: 6,
      expectCarDetail: { carName, moveCount: 3 },
      resultString: MOVE,
    },
    {
      randomMoveCount: 7,
      expectCarDetail: { carName, moveCount: 4 },
      resultString: MOVE,
    },
    {
      randomMoveCount: 8,
      expectCarDetail: { carName, moveCount: 5 },
      resultString: MOVE,
    },
    {
      randomMoveCount: 9,
      expectCarDetail: { carName, moveCount: 6 },
      resultString: MOVE,
    },
  ];

  test.each(testCases)(
    'randomMoveCount가 $randomMoveCount일 때, 자동차는 $resultString',
    ({ randomMoveCount, expectCarDetail }) => {
      // when
      const carDetail = car.move(randomMoveCount);

      // then
      expect(carDetail).toStrictEqual(expectCarDetail);
    },
  );
});
