import CarRace from '../src/domains/CarRace';
import pickNumberInRange from '../src/utils/pickNumberInRange';

jest.mock('../src/utils/pickNumberInRange', () => {
  return jest.fn();
});

const mockRandoms = (numbers) => {
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, pickNumberInRange);
};

describe('자동차 경주 도메인 테스트', () => {
  let carRace;

  beforeEach(() => {
    carRace = new CarRace(['harry', 'bong', 'pobi']);
  });

  it('각 라운드의 결과를 올바르게 표시한다.', () => {
    // given
    mockRandoms([1, 4, 9]);
    const expectedResult = {
      harry: 0,
      bong: 1,
      pobi: 1,
    };

    // when
    const roundResult = carRace.makesRoundResult();

    // then
    expect(roundResult).toEqual(expectedResult);
  });

  it('우승자를 올바르게 판단한다.', () => {
    // given
    mockRandoms([1, 4, 9, 7, 1, 3, 2, 8, 5]);
    const TRY_COUNT = 3;
    const expectedWinner = ['bong', 'pobi'];

    // when
    Array.from({ length: TRY_COUNT }, () => {
      carRace.makesRoundResult();
    });
    const winners = carRace.judgeWinners();

    // then
    expect(winners).toEqual(expectedWinner);
  });
});
