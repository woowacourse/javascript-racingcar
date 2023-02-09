const { UTIL_NUMBER } = require('../data/constants.js');

class Util {
  static randomValue() {
    return Math.floor(
      Math.random() * (UTIL_NUMBER.CAR_RANDOM_MAXIMUM_NUMBER + 1)
    );
  }

  static maxValueInMap(map) {
    return [...map.entries()].reduce((prev, next) =>
      prev[1] > next[1] ? prev : next
    )[1];
  }

  static filterMaxObjects(map) {
    const maxValue = Util.maxValueInMap(map);
    const maxObjects = [...map.entries()].filter((obj) => obj[1] === maxValue);

    return maxObjects;
  }
}

module.exports = Util;
