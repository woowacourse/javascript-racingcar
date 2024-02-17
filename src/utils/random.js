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
    const rangeArray = Array.from({ length: endInclusive - startInclusive + 1 }, (_, index) => startInclusive + index);

    return this.shuffle(rangeArray).slice(0, count);
  },
});

export default Random;
