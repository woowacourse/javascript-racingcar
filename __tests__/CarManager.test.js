const CarManager = require('../src/CarManager');

describe('자동차를 관리하는 클래스 테스트', () => {
  let carManager;

  beforeEach(() => {
    carManager = new CarManager(['pobi', 'crong', 'honux']);
  });

  test('자동차 관리자 인스턴스를 생성한다.', () => {
    expect(carManager.getCars().length).toEqual(3);
  });
});
