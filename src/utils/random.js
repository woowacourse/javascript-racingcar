const Random = Object.freeze({
  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  },

  pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    const result = [];

    for (let i = startInclusive; i <= endInclusive; i += 1) {
      result.push(i);
    }

    return Random.shuffle(result).slice(0, count);
  },
});

export default Random;
