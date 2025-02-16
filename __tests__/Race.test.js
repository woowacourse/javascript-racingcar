import Race from '../src/domain/Race.js';

describe('자동차 게임 테스트', () => {
  test('레이스가 생성될 때 주어진 자동차 목록을 가진다', () => {
    const race = new Race(['bunju', 'peter', 'pobi']);
    expect(race.cars).toBeDefined();
  });
});
