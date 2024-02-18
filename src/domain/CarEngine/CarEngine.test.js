import CarEngine from './module.js';

describe('자동차 이동 테스트', () => {
  // given
  const testCases = [
    { carDetail: { carName: 'A', moveCount: 2 }, randomMoveCount: 3, expectedMoveCount: 2 },
    { carDetail: { carName: 'B', moveCount: 3 }, randomMoveCount: 4, expectedMoveCount: 4 },
  ];
  test.each(testCases)(
    '주어진 randomMoveCount가 $randomMoveCount 일 때, randomMoveCount는 4 이상일 때만 자동차가 전진하므로 moveCount는 $expectedMoveCount 이어야 한다.',
    ({ carDetail, randomMoveCount, expectedMoveCount }) => {
      // when
      const { moveCount } = CarEngine.triggerMove(carDetail, randomMoveCount);

      // then
      expect(moveCount).toBe(expectedMoveCount);
    },
  );
});
