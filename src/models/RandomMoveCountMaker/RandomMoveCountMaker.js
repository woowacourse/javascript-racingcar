import Random from '../../utils/random.js';
import { RANDOM_MOVE_COUNT_RANGE } from './constant.js';

/**
 * @module RandomMoveCountMaker
 * 자동차 경주에 필요한 랜덤 이동 값들을 생성하는 도메인 모델 객체
 */
const RandomMoveCountMaker = Object.freeze({
  /**
   * @param {number} tryCount - 자동차 게임 진행 횟수
   * @param {number} racingCarNamesLength - 자동차 갯수
   * @returns {number[][]} - 각 턴마다 각 자동차 들의 랜덤 이동 값을 나타내는 2차원 숫자 배열
   */
  execute(tryCount, racingCarNamesLength) {
    return Array.from({ length: tryCount }, () =>
      Random.pickUniqueNumbersInRange(RANDOM_MOVE_COUNT_RANGE.min, RANDOM_MOVE_COUNT_RANGE.max, racingCarNamesLength),
    );
  },
});

export default RandomMoveCountMaker;
