const CarManager = require('../src/CarManager');

const RandomNumberGenerator = require('../src/utils/RandomNumberGenerator');

const mockRandoms = (numbers) => {
  RandomNumberGenerator.generate = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomNumberGenerator.generate);
};

describe('자동차를 관리하는 클래스 테스트', () => {
  let carManager;

  beforeEach(() => {
    carManager = new CarManager(['pobi', 'crong', 'honux']);
  });

  test('자동차 관리자 인스턴스를 생성한다.', () => {
    expect(carManager.getCars().length).toEqual(3);
  });

  test('자동차 각각을 전진시킨다', () => {
    mockRandoms([5, 2, 1]);

    carManager.progress();

    expect(carManager.getCars().map((singleCar) => singleCar.getProgressCount())).toEqual(
      [1, 0, 0],
    );
  });
});
