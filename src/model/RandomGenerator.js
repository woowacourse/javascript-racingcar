const RandomGenerator = {
  getBetween(min, max) {
    return min + Math.floor(Math.random() * max);
  },
};

module.exports = RandomGenerator;
