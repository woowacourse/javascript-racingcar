import Car from '../../src/domain/Car';
import RaceController from '../../src/service/RaceController';
import { RULES } from '../../src/statics/constants';
import Random from '../../src/utils/Random';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('RaceController 테스트', () => {
  // given

  const firstWinOfTwoCarRandomCase = [
    RULES.stop,
    RULES.stop,
    RULES.movingForward,
    RULES.movingForward,
    RULES.movingForward,
    RULES.stop,
  ];

  const ATTEMPT_NUM = 3;

  mockRandoms([...firstWinOfTwoCarRandomCase]);

  // when
  const carsCase = [new Car('pobi'), new Car('jay')];

  for (let i = 0; i < ATTEMPT_NUM; i++) {
    carsCase.forEach(car => car.move());
  }

  test('getCycleResult', () => {
    //given
    const firstWinOfTwoCarRandomCase = [RULES.stop, RULES.stop, RULES.movingForward, RULES.movingForward, RULES.movingForward, RULES.stop];
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    mockRandoms([...firstWinOfTwoCarRandomCase]);

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
    const firstWinOfTwoCarRandomCase = [RULES.stop, RULES.stop, RULES.movingForward, RULES.movingForward, RULES.movingForward, RULES.stop];
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    mockRandoms([...firstWinOfTwoCarRandomCase]);

    for (let i = 0; i < ATTEMPT_NUM; i++) {
      carsCase.forEach(car => car.move());
    }

    //then
    expect(RaceController.getWinnersPosition(carsCase)).toEqual(2);
  });

  //given
  const randomCases = [
    {
      randoms: [RULES.stop, RULES.stop, RULES.movingForward, RULES.movingForward, RULES.movingForward, RULES.stop],
      winnersPosion: 2,
      winners: ['pobi'],
    },
    {
      randoms: [RULES.stop, RULES.movingForward, RULES.movingForward, RULES.movingForward, RULES.movingForward, RULES.stop],
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
