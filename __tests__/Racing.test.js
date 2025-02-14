import Car from '../src/Car.js';
import Racing from '../src/Racing.js';

describe('랜덤 숫자에 따른 자동차 경주 테스트', () => {
  test.each([
    [
      [true, false],
      [1, 0],
    ],
    [
      [false, false],
      [0, 0],
    ],
    [
      [true, true],
      [1, 1],
    ],
  ])(
    '랜덤 숫자가 %s 이면 자동차의 위치는 %s가 된다.',
    (carsMoveList, positions) => {
      const NAMES = ['jenna', 'mato'];
      const cars = NAMES.map((name) => new Car(name));
      const racing = new Racing(cars);
      racing.raceTurn(carsMoveList);

      const positionResult = cars.map((car) => car.getCarPosition());
      expect(positionResult).toEqual(positions);
    },
  );

  test.each([
    [
      [
        [true, true],
        [true, true],
        [true, true],
      ],
      3,
    ],
    [
      [
        [true, true],
        [true, true],
      ],
      2,
    ],
  ])(
    '시도 횟수만큼 raceTurn을 호출하는지 runRace 메서드를 테스트한다.',
    (totalRaceMoves, expectedCalledTimes) => {
      const NAMES = ['jenna', 'mato'];
      const cars = NAMES.map((name) => new Car(name));

      const racing = new Racing(cars);
      const raceTurnSpy = jest.spyOn(racing, 'raceTurn');
      racing.runRace(totalRaceMoves);

      expect(raceTurnSpy).toHaveBeenCalledTimes(expectedCalledTimes);
    },
  );
});

describe('우승자 판단 메서드 테스트', () => {
  test('우승자가 한 명일 수 있다.', () => {
    const NAMES = ['jenna', 'mato'];
    const cars = NAMES.map((name) => new Car(name));

    const racing = new Racing(cars);
    racing.getCarInfo = jest.fn().mockReturnValue([
      { name: 'jenna', position: 3 },
      { name: 'mato', position: 2 },
    ]);

    const winners = racing.decideWinner();

    const expectedWinner = [{ name: 'jenna', position: 3 }];

    expect(winners).toEqual(expectedWinner);
  });

  test('우승자가 두 명 이상일 수 있다.', () => {
    const NAMES = ['jenna', 'mato'];
    const cars = NAMES.map((name) => new Car(name));

    const racing = new Racing(cars);
    racing.getCarInfo = jest.fn().mockReturnValue([
      { name: 'jenna', position: 2 },
      { name: 'mato', position: 2 },
    ]);
    const winners = racing.decideWinner();

    const expectedWinner = [
      { name: 'jenna', position: 2 },
      { name: 'mato', position: 2 },
    ];

    expect(winners).toEqual(expectedWinner);
  });
});
