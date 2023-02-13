const trimmer = {
  trimCarNames(carNames) {
    return carNames.split(",");
  },

  trimRepeatNumber(repeatNumber) {
    return Number(repeatNumber);
  },
};

module.exports = trimmer;
