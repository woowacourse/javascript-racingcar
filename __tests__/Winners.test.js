import Car from '../src/domain/Car.js';
import Winners from '../src/domain/Winners.js';

describe('winners', () => {
  let winners;
  let car1;
  let car2;

  beforeEach(() => {
    car1 = new Car('seo');
    car2 = new Car('kim');
    winners = new Winners();
  });

  test('경기가 종료되고 제일 멀리 위치해 있는 자동차가 우승자이다.', () => {
    car1.moveForward();

    winners.determine([car1, car2]);

    expect(winners.getNames()).toBe('seo');
  });

  test('우승자는 여러명일 수 있다.', () => {
    car1.moveForward();
    car2.moveForward();

    winners.determine([car1, car2]);

    expect(winners.getNames().split(', ').length).toBe(2);
  });
});
