import Car from '../../src/domain/Car';
import RaceCalculator from '../../src/domain/RaceCalculator';

describe('RaceCalculator 테스트', () => {
    //given
    const carA = new Car('pobi');
    const carB = new Car('jay');

    //when
    carA.move();
    carA.move();
    carB.move();

  test('getCycleResult 결과 테스트', () => {
    //then
    expect(RaceCalculator.getCycleResult([carA, carB])).toEqual({
      pobi: 2,
      jay: 1,
    });
  });

  test('getWinnersPosition 결과 테스트', () => {
    //then
    expect(RaceCalculator.getWinnersPosition([carA, carB])).toEqual(2);
  });

  test('getWinners 결과 테스트 - 단독 우승일 때', () => {
    //then
    expect(RaceCalculator.getWinners([carA, carB], 2)).toEqual(['pobi']);
  });
});

describe('RaceCalculator 테스트 - 공동 우승일 때', () => {
  test('getWinners 결과 테스트 - 공동 우승일 때', () => {
    //given
    const carA = new Car('pobi');
    const carB = new Car('jay');

    //when
    carA.move();
    carA.move();
    carB.move();
    carB.move();

    //then
    expect(RaceCalculator.getWinners([carA, carB], 2)).toEqual(['pobi', 'jay']);
  });
});
