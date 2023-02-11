const RandomNumberGenerator = {
  generate(lowerBound, UpperBound) {
    return (
      Math.floor(
        Math.random() * (this.RANDOM_UPPER_INCLUSIVE - this.RANDOM_LOWER_INCLUSIVE),
      ) + this.RANDOM_LOWER_INCLUSIVE
    );
  },
};

module.exports = RandomNumberGenerator;
