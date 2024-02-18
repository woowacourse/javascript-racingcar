import RandomMoveCountMaker from './module.js';

jest.mock('../../utils/random.js', () => ({
  pickUniqueNumbersInRange: jest.fn((min, max, length) => Array.from({ length }, (_, index) => index)),
}));

describe('시도 횟수와 총 자동차 대수가 주어졌을 때 알맞은 크기의 랜덤 이동 횟수 생성 테스트', () => {
  // given
  const testCases = [
    {
      tryCount: 2,
      racingCarNamesLength: 3,
      expectedRandomMoveCounts: [
        [0, 1, 2],
        [0, 1, 2],
      ],
    },
    {
      tryCount: 1,
      racingCarNamesLength: 5,
      expectedRandomMoveCounts: [[0, 1, 2, 3, 4]],
    },
  ];

  test.each(testCases)(
    'tryCount가 $tryCount이고, racingCarNamesLength가 $racingCarNamesLength일 때, racingCarNamesLength 길이의 tryCount개의 배열이 나와야 하며 예상한 결과 값 $expectedRandomMoveCounts이 도출된다.',
    ({ tryCount, racingCarNamesLength, expectedRandomMoveCounts }) => {
      // when
      const randomMoveCounts = RandomMoveCountMaker.execute(tryCount, racingCarNamesLength);

      // then
      expect(randomMoveCounts).toStrictEqual(expectedRandomMoveCounts);
    },
  );
});
