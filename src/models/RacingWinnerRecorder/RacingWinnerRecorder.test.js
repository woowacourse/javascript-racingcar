import RacingWinnerRecorder from './RacingWinnerRecorder';

describe('레이싱 게임 우승자 생성 테스트', () => {
  // given
  const testCases = [
    {
      description: '여러 차량이 동일한 최대 이동 횟수를 가질 때, 모든 해당 차량의 이름을 반환해야 한다',
      finalRacingResults: [
        { carName: 'CarA', moveCount: 4 },
        { carName: 'CarB', moveCount: 4 },
        { carName: 'CarC', moveCount: 2 },
      ],
      expectedRacingWinners: ['CarA', 'CarB'],
    },
    {
      description: '단일 차량만 최대 이동 횟수를 가질 때, 해당 차량의 이름만 반환해야 한다',
      finalRacingResults: [
        { carName: 'CarD', moveCount: 1 },
        { carName: 'CarE', moveCount: 1 },
        { carName: 'CarF', moveCount: 3 },
      ],
      expectedRacingWinners: ['CarF'],
    },
  ];

  const racingWinnerRecorder = new RacingWinnerRecorder();

  test.each(testCases)('$description', ({ finalRacingResults, expectedRacingWinners }) => {
    // when
    const racingWinners = racingWinnerRecorder.createRacingWinners(finalRacingResults);

    // then
    expect(racingWinners).toStrictEqual(expectedRacingWinners);
  });
});
