import Car from '../../src/domain/Car';
import RaceCalculator from '../../src/domain/RaceCalculator';
import Random from '../../src/utils/Random';
import { TEST_RULES } from '../constants/test_constants';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('RaceCalculator 테스트', () => {

  test('getCycleResult', () => {
    //given
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    const moveCases = [true,false,true,false,false,true];

    for (let i = 0; i < TEST_RULES.attemptNum; i++) {
      carsCase.forEach((car, idx) => car.move(moveCases[i * carsCase.length + idx]));
    }
    console.log(carsCase[0].position, carsCase[1].position);

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
    const moveCases = [true, false, true, false, false, true];

    for (let i = 0; i < TEST_RULES.attemptNum; i++) {
      carsCase.forEach((car, idx) => car.move(moveCases[i * carsCase.length + idx]));
    }

    //then
    expect(RaceCalculator.getWinnersPosition(carsCase)).toEqual(2);
  });

  //given
  const testCases = [
    {
      moveCase : [true, false, true, false, false, true],
      winnersPosion: 2,
      winners: ['pobi'],
    },
    {
      moveCase : [true, false, true, true, false, true],
      winnersPosion: 2,
      winners: ['pobi', 'jay'],
    },
  ];

  test.each(testCases)('getWinners', ({ moveCase, winnersPosion, winners }) => {
    //given
    const carsCase = [new Car('pobi'), new Car('jay')];

    //when
    for (let i = 0; i < TEST_RULES.attemptNum; i++) {
      carsCase.forEach((car, idx) => car.move(moveCase[i * carsCase.length + idx]));
    }

    expect(RaceCalculator.getWinners(carsCase, winnersPosion)).toEqual(winners);
  });
});
