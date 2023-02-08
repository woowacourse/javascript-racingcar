const CarManager = require('../src/CarManager');

describe('자동차를 관리하는 클래스 테스트', () => {
  test('자동차 관리자 인스턴스를 생성한다.', () => {
    const carManager = new CarManager(['pobi', 'crong', 'honux']);

    expect(carManager.getCars().length).toEqual(3);
  });
});
