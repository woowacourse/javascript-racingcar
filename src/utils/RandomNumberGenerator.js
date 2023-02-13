const RandomNumberGenerator = {
  generate(min, max) {
    const minToMaxNumbers = this.getMinToMaxNumberArray(min, max);
    const randomSortedNumbers = minToMaxNumbers.sort(() => Math.random() - 0.5);

    return randomSortedNumbers.pop();
  },

  getMinToMaxNumberArray(min, max) {
    const randomNumberArraySize = max - min + 1;
    const minToMaxNumberArray = new Array(randomNumberArraySize)
      .fill(0)
      .map((_, i) => min + i);

    return minToMaxNumberArray;
  },
};

module.exports = RandomNumberGenerator;
