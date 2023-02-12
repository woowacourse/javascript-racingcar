const RandomNumberGenerator = {
  generate(lowerBound, UpperBound) {
    return Math.floor(Math.random() * (UpperBound - lowerBound)) + lowerBound;
  },
};

module.exports = RandomNumberGenerator;
