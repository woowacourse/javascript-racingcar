class Util {
  static generateRandomNumber(rangeMaxNumber) {
    return Math.floor(Math.random() * (rangeMaxNumber + 1));
  }

  static maxValueInMap(map) {
    return Math.max(...map.values());
  }

  static filterMaxObjects(map) {
    const maxValue = Util.maxValueInMap(map);
    const maxObjects = [...map.entries()].filter((obj) => obj[1] === maxValue);

    return maxObjects;
  }
}

module.exports = Util;
