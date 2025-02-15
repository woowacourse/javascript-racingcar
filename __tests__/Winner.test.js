import Car from '../src/domain/Car.js';
import Winner from '../src/domain/Winner.js';
/*
- 한 자동차가 가장 멀리갔을때 우승자이다.
- 같은거리 자동차들은 모두 우승자이다.
- 아무도 전진하지 않았을때 모두가 우승자이다.
*/
describe('우승자 테스트', () => {
  test('한 자동차가 가장 멀리갔을때 우승자이다.', () => {
    const car1 = new Car('bunju');
    const car2 = new Car('pobi');

    car1.position = 1;
    car2.position = 3;

    const winner = Winner.findWinners([car1, car2]);
    expect(winner).toBe('pobi');
  });
  test('같은거리 자동차들은 모두 우승자이다.', () => {
    const car1 = new Car('bunju');
    const car2 = new Car('pobi');

    car1.position = 1;
    car2.position = 1;

    const winner = Winner.findWinners([car1, car2]);
    expect(winner).toBe('bunju, pobi');
  });
  test('아무도 전진하지 않았을때 모두가 우승자이다.', () => {
    const car1 = new Car('bunju');
    const car2 = new Car('pobi');

    car1.position = 0;
    car2.position = 0;

    const winner = Winner.findWinners([car1, car2]);
    expect(winner).toBe('bunju, pobi');
  });
});
