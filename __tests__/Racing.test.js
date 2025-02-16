import Car from '../src/domain/Car.js';
import Racing from '../src/domain/Racing.js';

describe('우승자 판단 메서드 테스트', () => {
  let racing;
  let cars;

  beforeEach(() => {
    const NAMES = ['jenna', 'mato'];
    cars = NAMES.map((name) => new Car(name));
    racing = new Racing(cars);
  });

  test('우승자가 한 명일 수 있다.', () => {
    const results = [
      { name: 'jenna', position: 3 },
      { name: 'mato', position: 2 },
    ];

    const winners = racing.decideWinner(results);

    const expectedWinner = [{ name: 'jenna', position: 3 }];

    expect(winners).toEqual(expectedWinner);
  });

  test('우승자가 두 명 이상일 수 있다.', () => {
    const results = [
      { name: 'jenna', position: 2 },
      { name: 'mato', position: 2 },
    ];

    const winners = racing.decideWinner(results);

    const expectedWinner = [
      { name: 'jenna', position: 2 },
      { name: 'mato', position: 2 },
    ];

    expect(winners).toEqual(expectedWinner);
  });
});
