import Car from '../src/Car.js';
import Racing from '../src/Racing.js';
import getRandomNumber from '../src/utils/getRandomNumber.js';

jest.mock('../src/utils/getRandomNumber');

describe('랜덤 숫자에 따른 자동차 경주 테스트', () => {
  test.each([
    [4, [1, 1]],
    [0, [0, 0]],
  ])(
    '랜덤 숫자가 %s 이면 자동차의 위치는 %s가 된다.',
    (randomNumber, positions) => {
      getRandomNumber.mockReturnValue(randomNumber);

      getRandomNumber();
      getRandomNumber();

      const NAMES = ['jenna', 'mato'];
      const cars = NAMES.map((name) => new Car(name));
      const racing = new Racing(cars);
      racing.raceTurn();

      const positionResult = cars.map((car) => car.getCarPosition());
      expect(positionResult).toEqual(positions);
    },
  );

  test('시도 횟수만큼 raceTurn을 호출하는지 runRace 메서드를 테스트한다.', () => {
    const NAMES = ['jenna', 'mato'];
    const TRY_COUNT = 5;
    const cars = NAMES.map((name) => new Car(name));

    const racing = new Racing(cars);
    const raceTurnSpy = jest.spyOn(racing, 'raceTurn');
    racing.runRace(TRY_COUNT);

    expect(raceTurnSpy).toHaveBeenCalledTimes(TRY_COUNT);
  });
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
