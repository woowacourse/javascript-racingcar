import RacingGame from './RacingGame';

describe('시도 횟수에 따른 자동차 경주 결과 테스트', () => {
  // given
  const testCases = [
    {
      description:
        "racingCarNames가 ['CarA', 'CarB'], \n tryCount가 2, \n randomMoveCounts이 [[1, 2], [3, 4]] 일 때, \n expectedRacingResult는 [[{ carName: 'CarA', moveCount: 0 }, { carName: 'CarB', moveCount: 0 }], [{ carName: 'CarA', moveCount: 0 }, { carName: 'CarB', moveCount: 1 }]] 이다.",
      racingCarNames: ['CarA', 'CarB'],
      tryCount: 2,
      randomMoveCounts: [
        [1, 2],
        [3, 4],
      ],
      expectedRacingResult: [
        [
          { carName: 'CarA', moveCount: 0 },
          { carName: 'CarB', moveCount: 0 },
        ],
        [
          { carName: 'CarA', moveCount: 0 },
          { carName: 'CarB', moveCount: 1 },
        ],
      ],
    },
    {
      description:
        "racingCarNames가 ['CarC', 'CarD', 'CarE', 'CarF', 'CarG'], \n tryCount가 1, \n randomMoveCounts가 [[5, 6, 7, 8, 9]]일 때, \n expectedRacingResult는 [[{ carName: 'CarC', moveCount: 1 },{ carName: 'CarD', moveCount: 1 },{ carName: 'CarE', moveCount: 1 },{ carName: 'CarF', moveCount: 1 },{ carName: 'CarG', moveCount: 1 }]]이다.",
      racingCarNames: ['CarC', 'CarD', 'CarE', 'CarF', 'CarG'],
      tryCount: 1,
      randomMoveCounts: [[5, 6, 7, 8, 9]], // 한 번의 시도에 대한 무작위 이동 횟수
      expectedRacingResult: [
        [
          { carName: 'CarC', moveCount: 1 },
          { carName: 'CarD', moveCount: 1 },
          { carName: 'CarE', moveCount: 1 },
          { carName: 'CarF', moveCount: 1 },
          { carName: 'CarG', moveCount: 1 },
        ],
      ],
    },
  ];

  test.each(testCases)('$description', ({ racingCarNames, tryCount, randomMoveCounts, expectedRacingResult }) => {
    // when
    const results = RacingGame.startRace({ racingCarNames, tryCount, randomMoveCounts });

    // then
    expect(results).toStrictEqual(expectedRacingResult);
  });
});
