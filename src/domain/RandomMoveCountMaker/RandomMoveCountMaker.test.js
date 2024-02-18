import RandomMoveCountMaker from './module.js';

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
    'tryCount가 $tryCount이고, racingCarNamesLength가 $racingCarNamesLength일 때, randomMoveCounts 각 배열의 길이는 racingCarNamesLength 길이인 $racingCarNamesLength와 같다.',
    ({ tryCount, racingCarNamesLength }) => {
      // when
      const randomMoveCounts = RandomMoveCountMaker.execute(tryCount, racingCarNamesLength);

      // then
      randomMoveCounts.forEach((moveCountArray) => {
        expect(moveCountArray.length).toBe(racingCarNamesLength);
      });
    },
  );

  test.each(testCases)(
    'tryCount가 $tryCount이고, racingCarNamesLength가 $racingCarNamesLength일 때, randomMoveCounts의 길이는 tryCount 길이인 $tryCount 와 같다.',
    ({ tryCount, racingCarNamesLength }) => {
      // when
      const randomMoveCounts = RandomMoveCountMaker.execute(tryCount, racingCarNamesLength);

      // then
      expect(randomMoveCounts.length).toBe(tryCount);
    },
  );
});
