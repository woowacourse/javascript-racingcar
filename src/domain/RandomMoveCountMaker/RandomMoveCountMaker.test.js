import RandomMoveCountMaker from './RandomMoveCountMaker';

describe('시도 횟수와 총 자동차 대수가 주어졌을 때 알맞은 크기의 랜덤 이동 횟수 생성 테스트', () => {
  // given
  const testCases = [
    {
      tryCount: 2,
      racingCarNamesLength: 3,
    },
    {
      tryCount: 1,
      racingCarNamesLength: 5,
    },
  ];

  test.each(testCases)(
    '총 자동차 수가 $racingCarNamesLength대 일 때, randomMoveCounts 내 존재하는 모든 배열 길이도 $racingCarNamesLength이다.',
    ({ tryCount, racingCarNamesLength }) => {
      // when
      const randomMoveCounts = RandomMoveCountMaker.execute(tryCount, racingCarNamesLength);

      // then
      expect(
        randomMoveCounts.every((randomMoveCountRow) => randomMoveCountRow.length === racingCarNamesLength),
      ).toBeTruthy();
    },
  );

  test.each(testCases)(
    'tryCount가 $tryCount 일 때, randomMoveCounts의 길이도 $tryCount다.',
    ({ tryCount, racingCarNamesLength }) => {
      // when
      const randomMoveCounts = RandomMoveCountMaker.execute(tryCount, racingCarNamesLength);

      // then
      expect(randomMoveCounts.length).toBe(tryCount);
    },
  );
});
