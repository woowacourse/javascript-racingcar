import Car from '../../src/domain/Car';
import RaceCalculator from '../../src/domain/RaceCalculator';
import Random from '../../src/utils/Random';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('RaceGameCalculator Test', () => {
  // given
  const MOVING_FORWARD = 5;
  const STOP = 1;
  const randomsCase = [STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP];

  const ATTEMPT_NUM = 3;

  mockRandoms([...randomsCase]);

  // when
  const carsCase = [new Car('pobi'), new Car('jay')];

  for (let i = 0; i < ATTEMPT_NUM; i++) {
    carsCase.forEach(car => car.move());
  }

  test('getCycleResult - 자동차의 이름과 위치를 매핑하여 반환한다.', () => {
    expect(RaceCalculator.getCycleResult(carsCase)).toEqual({
      pobi: 2,
      jay: 1,
    });
  });

  test('getWinnersPosition - 가장 멀리 나간 자동차의 위치를 계산한다.', () => {
    expect(RaceCalculator.getWinnersPosition(carsCase)).toEqual(2);
  });

  //given
  const randomCases = [
    {
      randoms: [STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP],
      winnersPosion: 2,
      winners: ['pobi'],
    },
    {
      randoms: [STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP],
      winnersPosion: 2,
      winners: ['pobi', 'jay'],
    },
  ];

  test.each(randomCases)(
    'getWinners - 가장 멀리 나간 자동차의 위치를 받아 이와 동일한 위치의 자동차의 이름을 반환한다.',
    ({ randoms, winnersPosion, winners }) => {
      //given
      const carsCase = [new Car('pobi'), new Car('jay')];

      //when
      mockRandoms([...randoms]);

      for (let i = 0; i < ATTEMPT_NUM; i++) {
        carsCase.forEach(car => car.move());
      }

      expect(RaceCalculator.getWinners(carsCase, winnersPosion)).toEqual(winners);
    },
  );
});
