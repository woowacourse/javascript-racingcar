const RandomUtil = {
  pickRandomNumberBetween(minInclusive, maxInclusive) {
    return Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive;
  },
};

export default RandomUtil;
