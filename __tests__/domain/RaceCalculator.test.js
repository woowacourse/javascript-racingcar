import Car from '../../src/domain/Car';
import RaceCalculator from '../../src/domain/RaceCalculator';

const MOVE = true;
const STOP = false;

function simulateCarMovements(cars, movements) {
  movements.forEach((canMove, canMoveIdx) => {
    const carIdx = canMoveIdx % cars.length;
    cars[carIdx].move(canMove);
  });
}

describe('RaceGameCalculator Unit Test - pobi는 2번, jay는 1번 움직인다', () => {
  const CARS = [new Car('pobi'), new Car('jay')];
  const MOVEMENTS = [MOVE, STOP, STOP, MOVE, MOVE, STOP];

  beforeAll(() => {
    simulateCarMovements(CARS, MOVEMENTS);
  });

  test('getCycleResult - 자동차의 이름과 위치를 매핑하여 반환한다', () => {
    const RESULT = {
      pobi: 2,
      jay: 1,
    };

    expect(RaceCalculator.getCycleResult(CARS)).toEqual(RESULT);
  });

  test('getWinnersPosition - pobi의 위치를 반환한다', () => {
    const MAX_POSITION = 2;

    expect(RaceCalculator.getWinnersPosition(CARS)).toEqual(MAX_POSITION);
  });

  test("getWinners - 'pobi'가 담긴 배열을 반환한다", () => {
    const WINNER_POSITION = RaceCalculator.getWinnersPosition(CARS);
    const WINNERS = ['pobi'];

    expect(RaceCalculator.getWinners(CARS, WINNER_POSITION)).toEqual(WINNERS);
  });
});

describe('RaceGameCalculator Unit Test - pobi와 jay 모두 2번 움직인다', () => {
  const CARS = [new Car('pobi'), new Car('jay')];
  const MOVEMENTS = [MOVE, STOP, STOP, MOVE, MOVE, MOVE];

  beforeAll(() => {
    simulateCarMovements(CARS, MOVEMENTS);
  });

  test('getCycleResult - 자동차의 이름과 위치를 매핑하여 반환한다', () => {
    const RESULT = {
      pobi: 2,
      jay: 2,
    };

    expect(RaceCalculator.getCycleResult(CARS)).toEqual(RESULT);
  });

  test('getWinnersPosition - pobi와 jay의 위치인 2를 반환한다', () => {
    const MAX_POSITION = 2;

    expect(RaceCalculator.getWinnersPosition(CARS)).toEqual(MAX_POSITION);
  });

  test("getWinners - 'pobi'와 'jay'가 담긴 배열을 반환한다", () => {
    const WINNER_POSITION = RaceCalculator.getWinnersPosition(CARS);
    const WINNERS = ['pobi', 'jay'];

    expect(RaceCalculator.getWinners(CARS, WINNER_POSITION)).toEqual(WINNERS);
  });
});
