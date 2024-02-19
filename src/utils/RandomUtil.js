class RandomUtil {
  static pickRandomNumbers(minInclusive, maxInclusive, count) {
    return Array.from({ length: count }).map(() => {
      return this.#pickRandomNumberBetween(minInclusive, maxInclusive);
    });
  }

  static #pickRandomNumberBetween(minInclusive, maxInclusive) {
    return Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive;
  }
}

export default RandomUtil;
