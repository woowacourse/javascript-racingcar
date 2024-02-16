import Random from '../../utils/random.js';
import { RANDOM_MOVE_COUNT_RANGE } from './constant.js';

const RandomMoveCountMaker = Object.freeze({
  execute(tryCount, racingCarNamesLength) {
    return Array.from({ length: tryCount }, () =>
      Random.pickUniqueNumbersInRange(RANDOM_MOVE_COUNT_RANGE.min, RANDOM_MOVE_COUNT_RANGE.max, racingCarNamesLength),
    );
  },
});

export default RandomMoveCountMaker;
