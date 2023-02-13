const { DECIMAL_NUMBER } = require('./constants');

const RandomNumberGenerator = {
  generate() {
    return Math.floor(Math.random() * DECIMAL_NUMBER.NUMBER);
  },
};

module.exports = RandomNumberGenerator;
