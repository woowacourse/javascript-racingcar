import GameController from '../src/controller/GameController';
import Car from '../src/model/Car';

describe('최종 우승자 선발 테스트', () => {
  test('가장 전진을 많이 한 자동차를 최종 우승자로 선발한다', () => {
    const game = new GameController();

    const carA = new Car('파슬리');
    const carB = new Car('쑤쑤');

    carA.updateAdvance(8);
    carB.updateAdvance(2);

    expect(game.calculateWinner([carA, carB])).toEqual([carA]);
  });

  test('최종 우승자는 한 명 이상일 수 있다', () => {
    const game = new GameController();

    const carA = new Car('파슬리');
    const carB = new Car('쑤쑤');
    const carC = new Car('쿠키');

    carA.updateAdvance(8);
    carB.updateAdvance(8);
    carB.updateAdvance(2);

    expect(game.calculateWinner([carA, carB, carC])).toEqual([carA, carB]);
  });
});
