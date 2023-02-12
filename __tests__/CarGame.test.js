const CarGame = require('../src/models/CarGame');

describe('CarGame 테스트', () => {
  test('자동차 객체 리스트 생성 테스트', () => {
    const carGame = new CarGame();
    carGame.initCarList(['pobi', 'crong', 'jun']);
    expect(carGame.getCarNames()).toEqual(['pobi', 'crong', 'jun']);
  });

  test('우승자 리스트를 반환한다.', () => {
    const carGame = new CarGame();

    const getRandomNumber = jest.fn();

    [1, 6, 7, 8, 3, 5].forEach((value) => {
      getRandomNumber.mockReturnValueOnce(value);
    });

    carGame.initCarList(['pobi', 'crong', 'jun']);
    carGame.moveCars(2, getRandomNumber);

    expect(carGame.getWinners()).toEqual(['jun']);
  });
});
