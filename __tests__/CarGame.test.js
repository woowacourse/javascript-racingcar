const CarGame = require('../src/domain/CarGame');

describe('CarGame 테스트', () => {
  test('자동차 객체 리스트 생성 테스트', () => {
    const carGame = new CarGame();
    carGame.initCarList(['pobi', 'crong', 'jun']);
    expect(carGame.getCarNames()).toEqual(['pobi', 'crong', 'jun']);
  });
});
