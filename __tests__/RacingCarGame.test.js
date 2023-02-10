const RacingCarGame = require('../src/model/RacingCarGame');

describe('getWinnerCar 테스트', () => {
  const racingCarGame = new RacingCarGame();

  //TODO: 제목 변경
  test('pobi 3, ukko 5, gonni 7 -> gonni 우승', () => {
    const carNamesMap = ['pobi', 'ukko', 'gonni'].reduce((acc, cur, index) => {
      return acc.set(cur, index + 1);
    }, new Map());

    expect(racingCarGame.getWinnerCar(carNamesMap)).toBe(
      'gonni이(가) 최종 우승했습니다.'
    );
  });

  //TODO: set함수 인자 변경
  test('pobi 1, ukko 2, gonni 3 -> gonni 우승', () => {
    const carNamesMap = new Map();
    carNamesMap.set('pobi', 3);
    carNamesMap.set('ukko', 5);
    carNamesMap.set('gonni', 5);

    expect(racingCarGame.getWinnerCar(carNamesMap)).toBe(
      'ukko, gonni이(가) 최종 우승했습니다.'
    );
  });

  //TODO: set함수 인자 변경
  test('pobi 1, ukko 1, gonni 1 -> pobi, ukko, gonni 우승', () => {
    const carNamesMap = new Map();
    carNamesMap.set('pobi', 5);
    carNamesMap.set('ukko', 5);
    carNamesMap.set('gonni', 5);
    
    expect(racingCarGame.getWinnerCar(carNamesMap)).toBe(
      'pobi, ukko, gonni이(가) 최종 우승했습니다.'
    );
  });
});
