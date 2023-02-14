const RandomNumberGenerator = {
  generate(lowerBound, upperBound) {
    return Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound;
  },
};

module.exports = RandomNumberGenerator;
