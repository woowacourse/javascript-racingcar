const CarGame = require('../src/domain/CarGame');

describe('CarGame 테스트', () => {
  test('자동차 객체 리스트 생성 테스트', () => {
    const carGame = new CarGame();
    carGame.initCarList(['pobi', 'crong', 'jun']);
    expect(carGame.getCarNames()).toEqual(['pobi', 'crong', 'jun']);
  });

  test('우승자 리스트를 반환한다.', () => {
    const carGame = new CarGame();

    const getRandomNumber = jest.fn();

    getRandomNumber.mockReturnValueOnce(1);
    getRandomNumber.mockReturnValueOnce(6);
    getRandomNumber.mockReturnValueOnce(7);
    getRandomNumber.mockReturnValueOnce(8);
    getRandomNumber.mockReturnValueOnce(3);
    getRandomNumber.mockReturnValueOnce(5);

    carGame.initCarList(['pobi', 'crong', 'jun']);
    carGame.moveCars(2, getRandomNumber);

    expect(carGame.getWinners()).toEqual(['jun']);
  });
});
