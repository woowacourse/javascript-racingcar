import Car from '../../src/domain/Car';
import RaceCalculator from '../../src/domain/RaceCalculator';
import Random from '../../src/utils/Random';
import { RANDOMCASES, TEST_RULES } from '../../src/statics/test_constants';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('RaceCalculator 테스트', () => {
  // given
  mockRandoms([...RANDOMCASES.firstWinOfTwoCarRandomCase]);

  // when
  const carsCase = [new Car('pobi'), new Car('jay')];

  for (let i = 0; i < TEST_RULES.attemptNUM; i++) {
    carsCase.forEach(car => car.move());
  }

  test('getCycleResult', () => {
    //given
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    mockRandoms([...RANDOMCASES.firstWinOfTwoCarRandomCase]);

    for (let i = 0; i < TEST_RULES.attemptNUM; i++) {
      carsCase.forEach(car => car.move());
    }

    //then
    expect(RaceCalculator.getCycleResult(carsCase)).toEqual({
      pobi: 2,
      jay: 1,
    });
  });

  test('getWinnersPosition', () => {
    //given
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    mockRandoms([...RANDOMCASES.firstWinOfTwoCarRandomCase]);

    for (let i = 0; i < TEST_RULES.attemptNUM; i++) {
      carsCase.forEach(car => car.move());
    }

    //then
    expect(RaceCalculator.getWinnersPosition(carsCase)).toEqual(2);
  });

  //given
  const testCases = [
    {
      randomCase: RANDOMCASES.firstWinOfTwoCarRandomCase,
      winnersPosion: 2,
      winners: ['pobi'],
    },
    {
      randomCase: RANDOMCASES.drawOfTwoCarRandomCase,
      winnersPosion: 2,
      winners: ['pobi', 'jay'],
    },
  ];

  test.each(testCases)('getWinners', ({ randomCase, winnersPosion, winners }) => {
    //given
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    mockRandoms([...randomCase]);

    for (let i = 0; i < TEST_RULES.attemptNUM; i++) {
      carsCase.forEach(car => car.move());
    }

    expect(RaceCalculator.getWinners(carsCase, winnersPosion)).toEqual(winners);
  });
});
