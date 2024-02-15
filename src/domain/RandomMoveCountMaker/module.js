import Random from '../../utils/random.js`';

const RandomMoveCountMaker = Object.freeze({
  execute(tryCount, racingCarNamesLength) {
    return Array.from({ length: tryCount }, () => Random.pickUniqueNumbersInRange(0, 9, racingCarNamesLength));
  },
});

export default RandomMoveCountMaker;
