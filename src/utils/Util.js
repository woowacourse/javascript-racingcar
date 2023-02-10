class Util {
  static generateRandomNumber(rangeMaxNumber) {
    return Math.floor(Math.random() * (rangeMaxNumber + 1));
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
