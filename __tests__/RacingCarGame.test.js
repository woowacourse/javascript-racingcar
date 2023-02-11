const RacingCarGame = require('../src/model/RacingCarGame');

describe('getWinnerCar 테스트', () => {
  const racingCarGame = new RacingCarGame();
  test('pobi 1칸 전진, ukko 2칸 전진, gonni 3칸 전진 -> gonni 우승', () => {
    const carNamesMap = ['pobi', 'ukko', 'gonni'].reduce((acc, cur, index) => {
      return acc.set(cur, index + 1);
    }, new Map());

    expect(racingCarGame.getWinnerCar(carNamesMap)).toBe(
      'gonni이(가) 최종 우승했습니다.'
    );
  });
  test('pobi 2칸 전진, ukko 5칸 전진, gonni 5칸 전진 -> ukko, gonni 우승', () => {
    const carNamesMap = new Map();
    carNamesMap.set('pobi', 2);
    carNamesMap.set('ukko', 5);
    carNamesMap.set('gonni', 5);

    expect(racingCarGame.getWinnerCar(carNamesMap)).toBe(
      'ukko, gonni이(가) 최종 우승했습니다.'
    );
  });
  test('pobi 1칸 전진, ukko 1칸 전진, gonni 1칸 전진 -> pobi, ukko, gonni 우승', () => {
    const carNamesMap = new Map();
    carNamesMap.set('pobi', 1);
    carNamesMap.set('ukko', 1);
    carNamesMap.set('gonni', 1);
    
    expect(racingCarGame.getWinnerCar(carNamesMap)).toBe(
      'pobi, ukko, gonni이(가) 최종 우승했습니다.'
    );
  });
});
