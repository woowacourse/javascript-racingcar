import Car from '../src/domain/Car.js';
import WinnerSelector from '../src/domain/WinnerSelector.js';

describe('우승자 선별 테스트', () => {
  test('우승자가 잘 선별되는지 테스트한다.', () => {
    // given
    const winnerSelector = new WinnerSelector();
    const loser1 = new Car('재오');
    const winner = new Car('앵버');
    const loser2 = new Car('상추');
    winner.move();
    winner.move();
    loser2.move();
    const cars = [loser1, winner, loser2];

    // when
    winnerSelector.calculateWinners(cars);

    // then
    expect(winnerSelector.winners).toEqual([winner]);
  });

  test('우승자가 여러명일 경우를 테스트한다.', () => {
    // given
    const winnerSelector = new WinnerSelector();
    const loser = new Car('재오');
    const winner1 = new Car('앵버');
    const winner2 = new Car('상추');
    winner1.move();
    winner2.move();
    const cars = [loser, winner1, winner2];

    // when
    winnerSelector.calculateWinners(cars);

    // then
    expect(winnerSelector.winners).toEqual([winner1, winner2]);
  });
});
