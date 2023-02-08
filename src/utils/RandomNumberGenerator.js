const RandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 8,

  generate() {
    return (
      Math.floor(
        Math.random() * (this.RANDOM_UPPER_INCLUSIVE - this.RANDOM_LOWER_INCLUSIVE),
      ) + this.RANDOM_LOWER_INCLUSIVE
    );
  },
};

module.exports = RandomNumberGenerator;
