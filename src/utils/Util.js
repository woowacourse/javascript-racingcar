const { UTIL_NUMBER } = require('../data/constants.js');

const Util = {
  generateRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber + 1 - minNumber) - minNumber);
  },

  maxValueInMap(map) {
    return Math.max(...map.values());
  },

  filterMaxObjects(map) {
    const maxValue = Util.maxValueInMap(map);
    const maxObjects = [...map.entries()].filter((obj) => obj[1] === maxValue);

    return maxObjects;
  },
};

module.exports = Util;
