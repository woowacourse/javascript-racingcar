const RandomNumberGenerator = {
  generate(min, max) {
    const RANDOM_NUMBER_ARRAY_SIZE = max - min + 1;
    const NUMBERS = new Array(RANDOM_NUMBER_ARRAY_SIZE)
      .fill(0)
      .map((_, i) => min + i);

    NUMBERS.sort(() => Math.random() - 0.5);

    return NUMBERS.pop();
  },
};

module.exports = RandomNumberGenerator;
