const CarRace = require('../src/domain/CarRace.js');
const pickRandomNumberInRange = require('../src/utils/pickRandomNumberInRange.js');

jest.mock('../src/utils/pickRandomNumberInRange.js');

const mockRandoms = (numbers) => {
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, pickRandomNumberInRange);
};

describe('카서비스 클래스 테스트', () => {
  test('각 레이싱 결과값 테스트', () => {
    const carNames = ['붕붕이', '빵빵이'];
    const moveCount = 2;
    const randomNumbers = [1, 4, 1, 5];
    const carRace = new CarRace(carNames);
    const raceResult = [
      [
        {
          carName: '붕붕이',
          distance: 0,
        },
        {
          carName: '빵빵이',
          distance: 1,
        },
      ],
      [
        {
          carName: '붕붕이',
          distance: 0,
        },
        {
          carName: '빵빵이',
          distance: 2,
        },
      ],
    ];

    carRace.setMoveCount(moveCount);
    mockRandoms(randomNumbers);

    expect(carRace.startRacing()).toEqual(raceResult);
  });

  test('레이싱 최종 결과 테스트', () => {
    const carNames = ['붕붕이', '빵빵이', '옥지'];
    const moveCount = 3;
    const randomNumbers = [1, 1, 4, 1, 2, 5, 1, 3, 6];
    const carRace = new CarRace(carNames);
    const raceWinner = ['옥지'];

    carRace.setMoveCount(moveCount);
    mockRandoms(randomNumbers);

    randomNumbers.forEach(() => carRace.startRacing());
    expect(carRace.getRaceResult()).toEqual(raceWinner);
  });
});
