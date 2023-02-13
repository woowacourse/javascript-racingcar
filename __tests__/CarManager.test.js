const App = require('../src/App');

describe('자동차를 관리하는 클래스 테스트', () => {
  const app = new App();

  const initializeBasicTestSettingWithRandomNumbers = (randomNumbers) => {
    const cars = app.carManager.getCars();

    for (let i = 0; i < cars.length; i++) {
      cars[i].tryProgress(randomNumbers[i]);
    }
  };

  beforeEach(() => {
    app.carManager.createInitialCars(['pobi', 'crong', 'honux']);
  });

  test('자동차 관리자 인스턴스를 생성한다.', () => {
    expect(app.carManager.getCars().length).toEqual(3);
  });

  test('자동차 각각을 전진시킨다', () => {
    initializeBasicTestSettingWithRandomNumbers([5, 2, 1]);

    expect(app.carManager.getCars().map((singleCar) => singleCar.progressCount)).toEqual([
      1, 0, 0,
    ]);
  });

  describe('경주 우승자를 도출한다.', () => {
    test('우승자가 한 명인 경우', () => {
      initializeBasicTestSettingWithRandomNumbers([5, 2, 1]);

      const winners = app.carManager.getWinners();
      expect(winners.length === 1 && winners[0] === 'pobi').toBe(true);
    });

    test('우승자가 두 명 이상인 경우', () => {
      initializeBasicTestSettingWithRandomNumbers([6, 7, 2]);

      const winners = app.carManager.getWinners();
      expect(winners).toEqual(['pobi', 'crong']);
    });
  });
});
