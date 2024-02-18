const CarService = require('../src/service/CarService');
const getRandomNumberInRange = require('../src/utils/getRandomNumberInRange.js');

jest.mock('../src/utils/getRandomNumberInRange.js');

const mockRandoms = (numbers) => {
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, getRandomNumberInRange);
};

describe('카서비스 클래스 테스트', () => {
  test('각 레이싱 결과값 테스트', () => {
    const carNames = ['붕붕이', '빵빵이'];
    const moveCount = 2;
    const randomNumbers = [1, 4, 1, 5];
    const carService = new CarService(carNames);
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

    carService.setMoveCount(moveCount);
    mockRandoms(randomNumbers);

    expect(carService.startRacing()).toEqual(raceResult);
  });

  test('레이싱 최종 결과 테스트', () => {
    const carNames = ['붕붕이', '빵빵이', '옥지'];
    const moveCount = 3;
    const randomNumbers = [1, 1, 4, 1, 2, 5, 1, 3, 6];
    const carService = new CarService(carNames);
    const raceWinner = ['옥지'];

    carService.setMoveCount(moveCount);
    mockRandoms(randomNumbers);

    randomNumbers.forEach(() => carService.startRacing());
    expect(carService.getRaceResult()).toEqual(raceWinner);
  });
});
