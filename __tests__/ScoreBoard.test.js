import ScoreBoard from '../src/domains/ScoreBoard.js';

describe('초기화된 점수판에 대한 유효성 테스트', () => {
  test('유효한 자동차 이름 입력값읋 넣으면 0으로 초기화된 Map 객체(초기화 된 점수판)를 반환한다', () => {
    const input = ['pobi', 'jun'];

    const expectedResult = new Map();
    input.forEach((name) => {
      expectedResult.set(name, 0);
    });

    const scoreBoard = new ScoreBoard(input);
    const initializedBoard = scoreBoard.getScoreBoard();

    expect(initializedBoard).toEqual(expectedResult);
  });
});
