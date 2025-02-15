import Car from '../src/domain/Car.js';
import Racing from '../src/domain/Racing.js';

describe('이동 여부(Boolean)에 따른 자동차 경주 테스트', () => {
  test.each([
    [[[true, false]], [[1, 0]]],
    [[[false, false]], [[0, 0]]],
    [[[true, true]], [[1, 1]]],
  ])(
    '매 turn의 자동차 이동 여부를 배열로 나타낸 totalRaceMoves가 %s 이면 자동차의 위치는 %s가 된다.',
    (totalRaceMoves, positions) => {
      const NAMES = ['jenna', 'mato'];

      const cars = NAMES.map((name) => new Car(name));
      const racing = new Racing(cars);

      const results = racing.runRace(totalRaceMoves);
      const currentPositions = results.map((turn) =>
        turn.map(({ position }) => position),
      );

      expect(currentPositions).toEqual(positions);
    },
  );
});

describe('우승자 판단 메서드 테스트', () => {
  test('우승자가 한 명일 수 있다.', () => {
    const car1 = new Car('jenna');
    const car2 = new Car('mato');

    const racing = new Racing([car1, car2]);

    car1.getCarInfo = jest.fn().mockReturnValue({ name: 'jenna', position: 3 });
    car2.getCarInfo = jest.fn().mockReturnValue({ name: 'mato', position: 2 });

    const winners = racing.decideWinner();

    const expectedWinner = [{ name: 'jenna', position: 3 }];

    expect(winners).toEqual(expectedWinner);
  });

  test('우승자가 두 명 이상일 수 있다.', () => {
    const car1 = new Car('jenna');
    const car2 = new Car('mato');

    const racing = new Racing([car1, car2]);

    car1.getCarInfo = jest.fn().mockReturnValue({ name: 'jenna', position: 2 });
    car2.getCarInfo = jest.fn().mockReturnValue({ name: 'mato', position: 2 });

    const winners = racing.decideWinner();

    const expectedWinner = [
      { name: 'jenna', position: 2 },
      { name: 'mato', position: 2 },
    ];

    expect(winners).toEqual(expectedWinner);
  });
});
