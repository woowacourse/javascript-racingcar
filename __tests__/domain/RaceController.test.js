import Car from '../../src/domain/Car';
import RaceController from '../../src/service/RaceController';
import Random from '../../src/utils/Random';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('RaceController Test', () => {
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

  test('getCycleResult', () => {
    //given
    const randomsCase = [STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP];
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    mockRandoms([...randomsCase]);

    for (let i = 0; i < ATTEMPT_NUM; i++) {
      carsCase.forEach(car => car.move());
    }

    //then
    expect(RaceController.getCycleResult(carsCase)).toEqual({
      pobi: 2,
      jay: 1,
    });
  });

  test('getWinnersPosition', () => {
    //given
    const randomsCase = [STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP];
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    mockRandoms([...randomsCase]);

    for (let i = 0; i < ATTEMPT_NUM; i++) {
      carsCase.forEach(car => car.move());
    }

    //then
    expect(RaceController.getWinnersPosition(carsCase)).toEqual(2);
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

  test.each(randomCases)('getWinners', ({ randoms, winnersPosion, winners }) => {
    //given
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    mockRandoms([...randoms]);

    for (let i = 0; i < ATTEMPT_NUM; i++) {
      carsCase.forEach(car => car.move());
    }

    expect(RaceController.getWinners(carsCase, winnersPosion)).toEqual(winners);
  });
});
