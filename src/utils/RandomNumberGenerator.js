const { StaticValue } = require('../constants/constants');

const RandomNumberGenerator = {
  generate() {
    return Math.floor(Math.random() * StaticValue.RANDOM_NUMBER_LIMIT);
  },
};

module.exports = RandomNumberGenerator;
