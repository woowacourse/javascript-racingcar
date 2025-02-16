import Car from '../src/domain/Car.js';
import Racing from '../src/domain/Racing.js';

describe('우승자 판단 메서드 테스트', () => {
  //todo: beforeEach 쓰기
  test('우승자가 한 명일 수 있다.', () => {
    const NAMES = ['jenna', 'mato'];
    const cars = NAMES.map((name) => new Car(name));

    const racing = new Racing(cars);
    //todo: 테스트 할때마다 이렇게 만들어줘야 하나 (beforeEach 쓰면 안되나)
    racing.getCarInfo = jest.fn().mockReturnValue([
      { name: 'jenna', position: 3 },
      { name: 'mato', position: 2 },
    ]);

    const winners = racing.decideWinner();

    const expectedWinner = [{ name: 'jenna', position: 3 }];

    expect(winners).toEqual(expectedWinner);
  });

  test('우승자가 두 명 이상일 수 있다.', () => {
    const NAMES = ['jenna', 'mato'];
    const cars = NAMES.map((name) => new Car(name));

    const racing = new Racing(cars);
    racing.getCarInfo = jest.fn().mockReturnValue([
      { name: 'jenna', position: 2 },
      { name: 'mato', position: 2 },
    ]);
    const winners = racing.decideWinner();

    const expectedWinner = [
      { name: 'jenna', position: 2 },
      { name: 'mato', position: 2 },
    ];

    expect(winners).toEqual(expectedWinner);
  });
});
