const { Random } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 8,

  generate() {
    return Random.pickNumberInRange(
      this.RANDOM_LOWER_INCLUSIVE,
      this.RANDOM_UPPER_INCLUSIVE,
    );
  },
};

module.exports = RandomNumberGenerator;
