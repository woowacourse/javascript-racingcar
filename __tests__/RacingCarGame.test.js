const RacingCarGame = require('../src/model/RacingCarGame');

describe('getWinnerCar 테스트', () => {
  const racingCarGame = new RacingCarGame();

  test('입력 받은 자동차 중 하나만 우승한 경우', () => {
    const carNamesMap = new Map();

    ['pobi', 'ukko', 'gonni'].reduce((acc, cur, index) => {
      return acc.set(cur, index + 1);
    }, carNamesMap);

    expect(racingCarGame.getWinnerCar(carNamesMap)).toBe(
      'gonni이(가) 최종 우승했습니다.'
    );
  });

  test('입력 받은 자동차 중 두개가 우승한 경우', () => {
    const carNamesMap = new Map();
    carNamesMap.set('pobi', 3);
    carNamesMap.set('ukko', 5);
    carNamesMap.set('gonni', 5);

    expect(racingCarGame.getWinnerCar(carNamesMap)).toBe(
      'ukko, gonni이(가) 최종 우승했습니다.'
    );
  });

  test('입력 받은 자동차 중 모두가 우승한 경우', () => {
    const carNamesMap = new Map();
    carNamesMap.set('pobi', 5);
    carNamesMap.set('ukko', 5);
    carNamesMap.set('gonni', 5);
    expect(racingCarGame.getWinnerCar(carNamesMap)).toBe(
      'pobi, ukko, gonni이(가) 최종 우승했습니다.'
    );
  });
});
