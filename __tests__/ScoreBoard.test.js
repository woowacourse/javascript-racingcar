import GAME_CONDITION from '../src/constants/configs/gameCondition.js';
import RANDOM_CAR_NAME_CONFIG from '../src/constants/configs/randomCarNameConfig.js';
import ScoreBoard from '../src/domains/ScoreBoard.js';

describe('초기화된 점수판에 대한 유효성 테스트', () => {
  test('유효한 자동차 이름 입력값을 넣으면 0으로 초기화된 Map 객체(초기화 된 점수판)를 반환한다', () => {
    const validInput = ['pobi', 'jun'];
    const expectedResult = new Map();
    validInput.forEach((name) => {
      expectedResult.set(name, GAME_CONDITION.INITIALIZED_SCORE);
    });

    const scoreBoard = new ScoreBoard(validInput);
    const initializedScoreBoard = scoreBoard.getScoreBoard();

    expect(initializedScoreBoard).toEqual(expectedResult);
  });
});
