import Cars from './Cars.js';

describe('랜덤 값에 따른 자동차 이동 테스트', () => {
  // given
  const testCases = [
    {
      description:
        "입력 받은 자동차 이름 들이 ['CarA', 'CarB'] 이고, 그에 대한 moveCounts가 [1, 2]일 때, \n racingCarDetails는[ { carName: 'CarA', moveCount: 0 }, { carName: 'CarB', moveCount: 0 } ] \n 과 같이 반환 된다.",
      racingCarNames: ['CarA', 'CarB'],
      randomMoveCounts: [1, 2],
      expectedRacingCarDetails: [
        { carName: 'CarA', moveCount: 0 },
        { carName: 'CarB', moveCount: 0 },
      ],
    },
    {
      description:
        "입력 받은 자동차 이름 들이 ['CarC', 'CarD', 'CarE']이고, 그에 대한 moveCounts가 [3, 4, 5]일 때, \n racingCarDetails는 [{ carName: 'CarC', moveCount: 0 }, { carName: 'CarD', moveCount: 1 }, { carName: 'CarE', moveCount: 1 }] \n 과 같이 반환 된다.",
      racingCarNames: ['CarC', 'CarD', 'CarE'],
      randomMoveCounts: [3, 4, 5],
      expectedRacingCarDetails: [
        { carName: 'CarC', moveCount: 0 },
        { carName: 'CarD', moveCount: 1 },
        { carName: 'CarE', moveCount: 1 },
      ],
    },
    {
      description:
        "입력 받은 자동차 이름 들이 ['CarF', 'CarG', 'CarH', 'CarI']이고, 그에 대한 moveCounts가 [6, 7, 8, 9]일 때, \n racingCarDetails는 [{ carName: 'CarF', moveCount: 1 }, { carName: 'CarG', moveCount: 1 }, { carName: 'CarH', moveCount: 1 }, { carName: 'CarI', moveCount: 1 }] \n 과 같이 반환 된다.",
      racingCarNames: ['CarF', 'CarG', 'CarH', 'CarI'],
      randomMoveCounts: [6, 7, 8, 9],
      expectedRacingCarDetails: [
        { carName: 'CarF', moveCount: 1 },
        { carName: 'CarG', moveCount: 1 },
        { carName: 'CarH', moveCount: 1 },
        { carName: 'CarI', moveCount: 1 },
      ],
    },
  ];
  test.each(testCases)('$description', ({ racingCarNames, randomMoveCounts, expectedRacingCarDetails }) => {
    const cars = new Cars(racingCarNames);

    // when
    const racingCarDetails = cars.moveCars(randomMoveCounts);

    // then
    expect(racingCarDetails).toStrictEqual(expectedRacingCarDetails);
  });
});
