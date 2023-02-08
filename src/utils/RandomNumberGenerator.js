const Random = require('../utils/random');

const RandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 0,
  RANDOM_UPPER_INCLUSIVE: 9,
  generate() {
    return Random.pickNumberInRange(
      RandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
      RandomNumberGenerator.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = RandomNumberGenerator;
