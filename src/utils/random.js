import { swap } from './array.js';

const Random = Object.freeze({
  shuffle(array) {
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex -= 1) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

      swap(array, currentIndex, randomIndex);
    }

    return array;
  },

  pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    const result = [];

    for (let currentValue = startInclusive; currentValue <= endInclusive; currentValue += 1) {
      result.push(currentValue);
    }

    return this.shuffle(result).slice(0, count);
  },
});

export default Random;
