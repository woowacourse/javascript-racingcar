/* eslint-disable no-undef */

import GameManager from '../src/domain/GameManager';

describe('GameManager Test', () => {
  test('차 이름 입력이 유효하지 않으면 에러를 던지는 지 테스트', () => {
    const gameMananger = new GameManager();
    const badNamesInput = 'abcdef,bad guy,nononono';

    expect(() => gameMananger.checkCarNames(badNamesInput)).toThrow();
  });
});
