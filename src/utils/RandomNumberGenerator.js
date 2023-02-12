const GAME_RULE = require('../constants/gameRule');
const Random = require('../lib/random');

const RandomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(
      GAME_RULE.RANDOM_LOWER_INCLUSIVE,
      GAME_RULE.RANDOM_UPPER_INCLUSIVE,
    );
  },
};

module.exports = RandomNumberGenerator;
